import { useEffect, useState } from 'react'
import { translateWithLibreTranslate } from '../api/translation'
import { getLocalHindiTranslation } from '../data/hindiTranslations'
import TranslationContext from './translation-context'

const LANGUAGE_STORAGE_KEY = 'pathshalax-language'
const TRANSLATION_ERROR_MESSAGE = 'Translation is unavailable. Showing English for now.'

function readStoredLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'hi' ? 'hi' : 'en'
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  useEffect(() => {
    if (!errorMessage) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setErrorMessage('')
    }, 3500)

    return () => window.clearTimeout(timeoutId)
  }, [errorMessage])

  async function translateText(text, targetLanguage = language, signal) {
    if (!text || targetLanguage === 'en') {
      return text
    }

    const localTranslation = targetLanguage === 'hi' ? getLocalHindiTranslation(text) : ''

    if (localTranslation) {
      return localTranslation
    }

    try {
      const translatedText = await translateWithLibreTranslate({
        text,
        source: 'en',
        target: targetLanguage,
        signal,
      })

      setErrorMessage('')
      return translatedText
    } catch (error) {
      if (error.name !== 'AbortError') {
        setErrorMessage(TRANSLATION_ERROR_MESSAGE)
      }

      return text
    }
  }

  function toggleLanguage() {
    setErrorMessage('')
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'hi' : 'en'))
  }

  const value = {
    errorMessage,
    language,
    setLanguage,
    toggleLanguage,
    translateText,
  }

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}
