import { useEffect, useState } from 'react'

export const HINDI_AUDIO_UNSUPPORTED_MESSAGE = 'Hindi audio not supported on this device.'
const ENGLISH_AUDIO_UNSUPPORTED_MESSAGE = 'English audio not supported on this device.'
const VOICE_NAME_PREFERENCES = {
  en: [
    'microsoft',
    'google',
    'natural',
    'samantha',
    'alex',
    'daniel',
    'karen',
    'zira',
    'heera',
    'rishi',
    'india',
  ],
  hi: ['microsoft', 'google', 'lekha', 'swara', 'kalpana', 'hemant', 'india'],
}

function getSpeechSynthesis() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null
  }

  return window.speechSynthesis
}

function waitForVoices(synth) {
  const voices = synth.getVoices()

  if (voices.length) {
    return Promise.resolve(voices)
  }

  return new Promise((resolve) => {
    const timeoutId = window.setTimeout(() => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged)
      resolve(synth.getVoices())
    }, 800)

    function handleVoicesChanged() {
      window.clearTimeout(timeoutId)
      synth.removeEventListener('voiceschanged', handleVoicesChanged)
      resolve(synth.getVoices())
    }

    synth.addEventListener('voiceschanged', handleVoicesChanged)
  })
}

function findVoice(voices, lang) {
  if (!voices.length) {
    return null
  }

  const normalizedLang = lang.toLowerCase()
  const languagePrefix = normalizedLang.slice(0, 2)
  const preferences = VOICE_NAME_PREFERENCES[languagePrefix] ?? []

  return [...voices]
    .map((voice) => {
      const voiceLang = voice.lang?.toLowerCase() ?? ''
      const voiceName = voice.name?.toLowerCase() ?? ''
      let score = 0

      if (voiceLang === normalizedLang) {
        score += 80
      }

      if (voiceLang.startsWith(languagePrefix)) {
        score += 40
      }

      if (languagePrefix === 'en' && voiceLang === 'en-in') {
        score += 20
      }

      if (voice.default) {
        score += 12
      }

      if (voice.localService) {
        score += 6
      }

      preferences.forEach((preference, index) => {
        if (voiceName.includes(preference)) {
          score += Math.max(16 - index, 4)
        }
      })

      return { score, voice }
    })
    .sort((left, right) => right.score - left.score)[0]?.voice ?? null
}

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [message, setMessage] = useState('')
  const isSupported = Boolean(getSpeechSynthesis())

  useEffect(() => {
    return () => {
      const synth = getSpeechSynthesis()

      if (synth?.speaking) {
        synth.cancel()
      }
    }
  }, [])

  function stop() {
    const synth = getSpeechSynthesis()

    if (synth?.speaking) {
      synth.cancel()
      setIsSpeaking(false)
      setMessage('Audio playback stopped.')
    }
  }

  async function speak(text, lang = 'en-US') {
    const synth = getSpeechSynthesis()
    const cleanText = text?.trim()

    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
      setMessage('Audio playback is not supported in this browser.')
      return false
    }

    if (!cleanText) {
      setMessage('No readable text is available for audio.')
      return false
    }

    if (synth.speaking || synth.pending) {
      synth.cancel()
    }

    const voices = await waitForVoices(synth)
    const selectedVoice = findVoice(voices, lang)

    if (lang === 'hi-IN' && !selectedVoice) {
      setIsSpeaking(false)
      setMessage(HINDI_AUDIO_UNSUPPORTED_MESSAGE)
      return false
    }

    if (lang.startsWith('en') && !selectedVoice) {
      setIsSpeaking(false)
      setMessage(ENGLISH_AUDIO_UNSUPPORTED_MESSAGE)
      return false
    }

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = lang
    utterance.rate = lang === 'hi-IN' ? 0.86 : 0.92
    utterance.pitch = lang === 'hi-IN' ? 0.98 : 1
    utterance.volume = 1

    if (selectedVoice) {
      utterance.voice = selectedVoice
    }

    utterance.onstart = () => {
      setIsSpeaking(true)
      setMessage('')
    }

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    utterance.onerror = (event) => {
      setIsSpeaking(false)
      setMessage(
        event.error === 'interrupted'
          ? 'Audio playback was interrupted.'
          : 'Audio playback could not start.',
      )
    }

    synth.speak(utterance)
    return true
  }

  return {
    isSpeaking,
    isSupported,
    message,
    speak,
    stop,
  }
}
