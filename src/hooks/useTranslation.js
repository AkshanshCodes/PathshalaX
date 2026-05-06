import { useContext, useEffect, useState } from 'react'
import TranslationContext from '../context/translation-context'

export function useTranslation() {
  const context = useContext(TranslationContext)

  if (!context) {
    throw new Error('useTranslation must be used inside TranslationProvider')
  }

  return context
}

export function useTranslatedText(text, targetLanguage) {
  const { language, translateText } = useTranslation()
  const resolvedLanguage = targetLanguage ?? language
  const [translatedText, setTranslatedText] = useState(text)
  const [isTranslating, setIsTranslating] = useState(false)
  const shouldTranslate = Boolean(text && resolvedLanguage !== 'en')

  useEffect(() => {
    const controller = new AbortController()

    if (!shouldTranslate) {
      return () => controller.abort()
    }

    window.queueMicrotask(() => {
      if (!controller.signal.aborted) {
        setTranslatedText(text)
        setIsTranslating(true)
      }
    })

    translateText(text, resolvedLanguage, controller.signal)
      .then((nextText) => {
        if (!controller.signal.aborted) {
          setTranslatedText(nextText)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsTranslating(false)
        }
      })

    return () => controller.abort()
  }, [resolvedLanguage, shouldTranslate, text, translateText])

  return {
    isTranslating: shouldTranslate ? isTranslating : false,
    language: resolvedLanguage,
    text: shouldTranslate ? translatedText : text,
  }
}
