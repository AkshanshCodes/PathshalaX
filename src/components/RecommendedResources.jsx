import { useEffect, useState } from 'react'
import { BookOpen, ExternalLink, RefreshCw } from 'lucide-react'
import { fetchRecommendedResources, resourceTopics } from '../api/resources'
import Button from './ui/Button'
import Card from './ui/Card'
import TranslatedText from './TranslatedText'

function ResourceCover({ resource }) {
  if (!resource.coverUrl) {
    return (
      <div className="grid aspect-[3/4] w-full place-items-center rounded-xl bg-palette-blue/35 p-4 text-center text-sm font-semibold text-ink">
        <TranslatedText text="Cover unavailable" />
      </div>
    )
  }

  return (
    <img
      alt={`Cover for ${resource.title}`}
      className="aspect-[3/4] w-full rounded-xl object-cover shadow-sm"
      loading="lazy"
      src={resource.coverUrl}
    />
  )
}

function RecommendedResources() {
  const [subject, setSubject] = useState(resourceTopics[0].id)
  const [resources, setResources] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  function changeSubject(nextSubject) {
    setIsLoading(true)
    setErrorMessage('')
    setSubject(nextSubject)
  }

  useEffect(() => {
    const controller = new AbortController()

    fetchRecommendedResources({ subject, signal: controller.signal })
      .then((items) => {
        setResources(items)
        if (!items.length) {
          setErrorMessage('No resources were found. Try another subject.')
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setResources([])
          setErrorMessage('Resources are unavailable right now. Please try again later.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [subject])

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-muted">
            <TranslatedText text="Recommended Resources" />
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
            <TranslatedText text="Indian learner picks" />
          </h2>
          <TranslatedText
            as="p"
            className="mt-2 max-w-2xl text-muted"
            text="Readable Hindi and India-focused books for self-study and classroom support."
          />
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Resource subjects">
          {resourceTopics.map((item) => (
            <button
              className={[
                'min-h-10 rounded-xl px-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200/80 transition-colors',
                subject === item.id
                  ? 'bg-navy text-white'
                  : 'bg-surface text-ink hover:bg-palette-blue/35',
              ].join(' ')}
              key={item.id}
              onClick={() => changeSubject(item.id)}
              type="button"
            >
              <TranslatedText text={item.label} />
            </button>
          ))}
        </div>
      </div>

      {errorMessage ? (
        <p aria-live="polite" className="rounded-xl bg-palette-cream/60 px-4 py-3 text-sm text-muted">
          <TranslatedText text={errorMessage} />
        </p>
      ) : null}

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card className="space-y-4" key={index}>
              <div className="aspect-[3/4] w-full animate-pulse rounded-xl bg-slate-100" />
              <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-100" />
              <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-100" />
            </Card>
          ))}
        </div>
      ) : resources.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <a
              className="group block rounded-2xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00adb5]"
              href={resource.url}
              key={resource.id}
              rel="noreferrer"
              target="_blank"
            >
              <Card className="flex h-full flex-col gap-4 group-hover:-translate-y-1">
                <ResourceCover resource={resource} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-ink">
                    <TranslatedText text={resource.title} />
                  </h3>
                  <p className="text-sm text-muted">
                    <TranslatedText text={resource.author} />
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="inline-flex items-center gap-2 rounded-full bg-palette-green/50 px-3 py-1 text-xs font-semibold text-ink">
                      <BookOpen aria-hidden="true" className="size-4" />
                      <TranslatedText text={resource.category} />
                    </p>
                    <p className="rounded-full bg-palette-blue/45 px-3 py-1 text-xs font-semibold text-ink">
                      <TranslatedText text={resource.language} />
                    </p>
                    <p className="inline-flex items-center gap-1 text-xs font-semibold text-ink">
                      <ExternalLink aria-hidden="true" className="size-4" />
                      <TranslatedText text="Read online" />
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      ) : (
        <Card className="space-y-3">
          <h3 className="text-xl font-semibold text-ink">
            <TranslatedText text="No resources found" />
          </h3>
          <TranslatedText
            as="p"
            className="leading-7 text-muted"
            text="Try a broader subject or check again when the connection is stronger."
          />
          <Button icon={RefreshCw} onClick={() => changeSubject(resourceTopics[0].id)} variant="secondary">
            <TranslatedText text="Reset subject" />
          </Button>
        </Card>
      )}
    </section>
  )
}

export default RecommendedResources
