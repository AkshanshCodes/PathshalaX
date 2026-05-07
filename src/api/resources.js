const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'
const OPEN_LIBRARY_SEARCH_URL = 'https://openlibrary.org/search.json'
const ARCHIVE_BASE_URL = 'https://archive.org/details'

export const resourceTopics = [
  {
    id: 'hindi-stories',
    label: 'Hindi Stories',
    query: 'premchand hindi',
    language: 'hin',
    category: 'Hindi reading',
  },
  {
    id: 'indian-stories',
    label: 'Indian Stories',
    query: 'panchatantra',
    language: 'eng',
    category: 'Indian stories',
  },
  {
    id: 'comics',
    label: 'Comics',
    query: 'amar chitra katha',
    language: 'eng',
    category: 'Indian comics',
  },
  {
    id: 'indian-leaders',
    label: 'Indian Leaders',
    query: 'mahatma gandhi children',
    language: 'eng',
    category: 'Indian leaders',
  },
  {
    id: 'school-maths',
    label: 'School Maths',
    query: 'vedic mathematics',
    language: 'eng',
    category: 'School maths',
  },
]

function getCoverUrl(coverId) {
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : ''
}

function getTopic(topicId) {
  return resourceTopics.find((topic) => topic.id === topicId) ?? resourceTopics[0]
}

function getReadableUrl(work) {
  const archiveId = work.ia?.[0]

  if (archiveId) {
    return `${ARCHIVE_BASE_URL}/${archiveId}`
  }

  return work.key ? `${OPEN_LIBRARY_BASE_URL}${work.key}` : OPEN_LIBRARY_BASE_URL
}

function getResourceLanguageCode(work, topic) {
  const rawLanguage = Array.isArray(work.language) ? work.language[0] : topic.language

  if (typeof rawLanguage === 'object' && rawLanguage?.key) {
    return rawLanguage.key
  }

  return rawLanguage || topic.language
}

export async function fetchRecommendedResources({
  subject = 'hindi-stories',
  limit = 6,
  signal,
} = {}) {
  const topic = getTopic(subject)
  const searchParams = new URLSearchParams({
    q: topic.query,
    language: topic.language,
    has_fulltext: 'true',
    limit: String(limit * 2),
    fields: 'key,title,author_name,cover_i,language,ia,has_fulltext,ebook_access',
  })
  const response = await fetch(`${OPEN_LIBRARY_SEARCH_URL}?${searchParams.toString()}`, { signal })

  if (!response.ok) {
    throw new Error('Unable to load recommended resources')
  }

  const result = await response.json()
  const docs = Array.isArray(result?.docs) ? result.docs : []
  const readableDocs = docs.filter(
    (doc) => doc.has_fulltext || doc.ebook_access === 'public' || doc.ia?.length,
  )

  return readableDocs.slice(0, limit).map((work) => ({
    id: work.key ?? `${work.title}-${work.cover_i ?? 'no-cover'}`,
    title: work.title ?? 'Untitled resource',
    author: work.author_name?.[0] ?? 'Author unavailable',
    category: topic.category,
    coverUrl: getCoverUrl(work.cover_i),
    languageCode: getResourceLanguageCode(work, topic),
    url: getReadableUrl(work),
  }))
}
