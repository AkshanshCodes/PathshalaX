import DailyLearningTip from '../components/DailyLearningTip'
import RecommendedResources from '../components/RecommendedResources'
import Card from '../components/ui/Card'
import TranslatedText from '../components/TranslatedText'

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
      <RecommendedResources />
    </div>
  )
}

export default Resources
