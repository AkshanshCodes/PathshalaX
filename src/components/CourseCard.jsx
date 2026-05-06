import { ArrowRight } from 'lucide-react'
import TranslatedText from './TranslatedText'
import Button from './ui/Button'
import Card from './ui/Card'
import ProgressBar from './ui/ProgressBar'

function CourseCard({ course, continueTo, nextLessonTitle, progress = 0, searchMatches = [] }) {
  const Icon = course.icon

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className={`grid h-24 place-items-center rounded-xl ${course.tone}`}>
        <Icon aria-hidden="true" className="size-7" />
      </div>

      <div className="space-y-2.5">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          <TranslatedText text={course.title} />
        </h3>
        <p className="text-sm leading-6 text-muted">
          <TranslatedText text={course.description} />
        </p>
        <p className="text-sm font-medium text-muted">
          <TranslatedText text={`${course.category} • ${course.level} • ${course.duration}`} />
        </p>
        {searchMatches.length ? (
          <div className="rounded-xl bg-palette-blue/30 p-3 text-sm text-ink">
            <TranslatedText text={`Suggested lessons: ${searchMatches.join(', ')}`} />
          </div>
        ) : null}
        {nextLessonTitle ? (
          <div className="rounded-xl bg-palette-green/45 p-3 text-sm text-ink">
            <TranslatedText text={`Next lesson: ${nextLessonTitle}`} />
          </div>
        ) : null}
      </div>

      <div className="mt-auto space-y-5">
        <ProgressBar label="Progress" value={progress} />
        <Button className="w-full" icon={ArrowRight} to={continueTo ?? `/courses/${course.id}`}>
          <TranslatedText text={progress === 0 ? 'Start course' : 'Continue'} />
        </Button>
      </div>
    </Card>
  )
}

export default CourseCard
