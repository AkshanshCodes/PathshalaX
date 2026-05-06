import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { dailyTip } from '../data/courses'
import { FALLBACK_TIP, fetchDailyLearningTip } from '../api/learningTip'
import Card from './ui/Card'
import TranslatedText from './TranslatedText'

function DailyLearningTip() {
  const [tip, setTip] = useState(FALLBACK_TIP)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetchDailyLearningTip({ signal: controller.signal })
      .then(setTip)
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <Card className="space-y-4" aria-busy={isLoading}>
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-xl bg-palette-green/70 text-navy">
          <Quote aria-hidden="true" className="size-5" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-ink">
          <TranslatedText text={dailyTip.title} />
        </h2>
      </div>
      {isLoading ? (
        <div className="space-y-3" aria-label="Loading learning tip">
          <div className="h-4 w-full animate-pulse rounded-full bg-slate-100" />
          <div className="h-4 w-4/5 animate-pulse rounded-full bg-slate-100" />
        </div>
      ) : (
        <blockquote className="space-y-3">
          <TranslatedText as="p" className="leading-7 text-muted" text={tip.text} />
          <footer className="text-sm font-semibold text-ink">- {tip.author}</footer>
        </blockquote>
      )}
    </Card>
  )
}

export default DailyLearningTip
