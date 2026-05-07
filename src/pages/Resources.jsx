import { ExternalLink, Gamepad2 } from 'lucide-react'
import DailyLearningTip from '../components/DailyLearningTip'
import RecommendedResources from '../components/RecommendedResources'
import Card from '../components/ui/Card'
import TranslatedText from '../components/TranslatedText'

const learningGameUrl = 'https://69ebcce5568a3a939b22935e--delightful-gelato-924fac.netlify.app/'

function Resources() {
  return (
    <div className="space-y-6">
      <Card className="space-y-3">
        <p className="text-sm font-semibold text-muted">PathshalaX</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          <TranslatedText text="Resources" />
        </h1>
        <TranslatedText
          as="p"
          className="max-w-2xl leading-7 text-muted"
          text="Simple reading support, book ideas, and daily motivation for learners."
        />
      </Card>

      <DailyLearningTip />

      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid size-12 place-items-center rounded-xl bg-palette-green/55 text-navy">
            <Gamepad2 aria-hidden="true" className="size-6" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              <TranslatedText text="Learning Game" />
            </h2>
            <TranslatedText
              as="p"
              className="mt-2 max-w-2xl leading-7 text-muted"
              text="Practice with a fun game made for PathshalaX learners."
            />
          </div>
        </div>
        <a
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:scale-[1.01] hover:bg-[#2d3440]"
          href={learningGameUrl}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink aria-hidden="true" className="size-5" />
          <span>
            <TranslatedText text="Play learning game" />
          </span>
        </a>
      </Card>

      <RecommendedResources />
    </div>
  )
}

export default Resources
