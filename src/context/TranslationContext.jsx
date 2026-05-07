import { useCallback, useEffect, useMemo, useState } from 'react'
import { translateWithLibreTranslate } from '../api/translation'
import { getLocalHindiTranslation } from '../data/hindiTranslations'
import TranslationContext from './translation-context'

const LANGUAGE_STORAGE_KEY = 'pathshalax-language'
const TRANSLATION_ERROR_MESSAGE = 'Translation is unavailable. Showing English for now.'

function readStoredLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  try {
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'hi' ? 'hi' : 'en'
  } catch {
    return 'en'
  }
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // Browsers can block localStorage in private or restricted contexts.
    }
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

  const translateText = useCallback(async (text, targetLanguage = language, signal) => {
    if (!text || targetLanguage === 'en') {
      return text
    }

    const localTranslation = targetLanguage === 'hi' ? getLocalHindiTranslation(text) : ''

    if (localTranslation) {
      return localTranslation
    }

    if (targetLanguage === 'hi') {
      return text
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
  }, [language])

  const toggleLanguage = useCallback(() => {
    setErrorMessage('')
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'hi' : 'en'))
  }, [])

  const value = useMemo(
    () => ({
      errorMessage,
      language,
      setLanguage,
      toggleLanguage,
      translateText,
    }),
    [errorMessage, language, toggleLanguage, translateText],
  )

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}
