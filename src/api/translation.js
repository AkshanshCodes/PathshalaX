const DEFAULT_TRANSLATE_URL = 'https://libretranslate.com/translate'

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

  const apiUrl = import.meta.env?.VITE_LIBRETRANSLATE_URL || DEFAULT_TRANSLATE_URL
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
