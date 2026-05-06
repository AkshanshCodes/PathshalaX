import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import ProgressBar from './ui/ProgressBar'

function CourseCard({ course }) {
  const Icon = course.icon

  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <div className={`grid size-14 place-items-center rounded-lg ${course.tone}`}>
          <Icon aria-hidden="true" className="size-7" />
        </div>
        <span className="rounded-full bg-sage-50 px-3 py-1 text-xs font-bold text-sage-800">
          {course.difficulty}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-ink">{course.title}</h3>
        <p className="text-sm leading-6 text-muted">
          Gentle lessons, short practice, and clear next steps for steady learning.
        </p>
      </div>

      <div className="mt-auto space-y-5">
        <ProgressBar label="Progress" value={course.progress} />
        <Button className="w-full" icon={ArrowRight} to={`/courses#${course.id}`}>
          Start learning
        </Button>
      </div>
    </Card>
  )
}

export default CourseCard
