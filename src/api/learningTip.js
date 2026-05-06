const FALLBACK_TIP = {
  text: 'Small daily practice makes learning easier to remember.',
  author: 'PathshalaX',
}

export async function fetchDailyLearningTip({ signal } = {}) {
  try {
    const response = await fetch(
      'https://api.quotable.io/random?tags=education|inspirational&maxLength=130',
      { signal },
    )

    if (!response.ok) {
      throw new Error('Learning tip request failed')
    }

    const result = await response.json()

    return {
      text: result?.content || FALLBACK_TIP.text,
      author: result?.author || FALLBACK_TIP.author,
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      throw error
    }

    return FALLBACK_TIP
  }
}

export { FALLBACK_TIP }
