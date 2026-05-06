import { useEffect, useState } from 'react'

export const HINDI_AUDIO_UNSUPPORTED_MESSAGE = 'Hindi audio not supported on this device.'

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
  return (
    voices.find((voice) => voice.lang === lang) ??
    voices.find((voice) => voice.lang?.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()))
  )
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

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = lang
    utterance.rate = 0.9
    utterance.pitch = 1

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
