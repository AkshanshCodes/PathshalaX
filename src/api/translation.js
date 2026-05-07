const DEFAULT_TRANSLATE_URL = 'https://libretranslate.com/translate'
const DEFAULT_LANGUAGES_URL = 'https://libretranslate.com/languages'

function getTranslateUrl() {
  return import.meta.env?.VITE_LIBRETRANSLATE_URL || DEFAULT_TRANSLATE_URL
}

function getLanguagesUrl() {
  const configuredUrl = import.meta.env?.VITE_LIBRETRANSLATE_LANGUAGES_URL

  if (configuredUrl) {
    return configuredUrl
  }

  const translateUrl = getTranslateUrl()

  if (translateUrl.endsWith('/translate')) {
    return `${translateUrl.slice(0, -'/translate'.length)}/languages`
  }

  if (translateUrl.includes('/translate?')) {
    return `${translateUrl.split('/translate?')[0]}/languages`
  }

  if (translateUrl === DEFAULT_TRANSLATE_URL) {
    return DEFAULT_LANGUAGES_URL
  }

  return `${translateUrl.replace(/\/$/, '')}/languages`
}

export function normalizeLanguageCode(languageCode = '') {
  if (!languageCode) {
    return ''
  }

  const normalizedCode = String(languageCode)
    .trim()
    .toLowerCase()
    .replace(/\.json$/, '')
    .split('/')
    .filter(Boolean)
    .pop()
    ?.split('-')[0] ?? ''

  if (normalizedCode === 'eng') {
    return 'en'
  }

  if (normalizedCode === 'hin') {
    return 'hi'
  }

  return normalizedCode
}

export async function fetchSupportedLanguages({ signal } = {}) {
  const response = await fetch(getLanguagesUrl(), { signal })

  if (!response.ok) {
    throw new Error('Unable to load supported languages')
  }

  const result = await response.json()

  return Array.isArray(result) ? result : []
}

export function resolveLanguageName(languageList = [], languageCode = '', fallback = '') {
  const normalizedCode = normalizeLanguageCode(languageCode)

  if (!normalizedCode) {
    return fallback
  }

  const matchedLanguage = languageList.find(
    (language) => normalizeLanguageCode(language?.code) === normalizedCode,
  )

  if (matchedLanguage?.name) {
    return matchedLanguage.name
  }

  return fallback || normalizedCode.toUpperCase()
}

export async function translateWithLibreTranslate({
  text,
  source = 'en',
  target = 'hi',
  signal,
}) {
  const trimmedText = text?.trim()

  if (!trimmedText || source === target) {
    return text
  }

  const apiUrl = getTranslateUrl()
  const apiKey = import.meta.env?.VITE_LIBRETRANSLATE_API_KEY
  const payload = {
    q: trimmedText,
    source,
    target,
    format: 'text',
  }

  if (apiKey) {
    payload.api_key = apiKey
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal,
  })

  if (!response.ok) {
    throw new Error('Translation request failed')
  }

  const result = await response.json()

  if (!result?.translatedText) {
    throw new Error('Translation response was empty')
  }

  return result.translatedText
}
