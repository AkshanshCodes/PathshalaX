import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import ProgressBar from './ui/ProgressBar'

function CourseCard({ course }) {
  const Icon = course.icon

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className={`grid h-24 place-items-center rounded-xl ${course.tone}`}>
        <Icon aria-hidden="true" className="size-7" />
      </div>

      <div className="space-y-2.5">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{course.title}</h3>
        <p className="text-sm leading-6 text-muted">
          Short lessons with clear notes and simple practice.
        </p>
      </div>

      <div className="mt-auto space-y-5">
        <ProgressBar label="Progress" value={course.progress} />
        <Button className="w-full" icon={ArrowRight} to={`/courses/${course.id}`}>
          Continue
        </Button>
      </div>
    </Card>
  )
}

export default CourseCard
