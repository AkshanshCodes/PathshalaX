import { ArrowRight, PlayCircle } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { lessons } from '../data/courses'

function CourseDetail() {
  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <Card className="h-fit space-y-4">
        <div>
          <p className="text-sm font-semibold text-muted">Lessons</p>
          <h1 className="mt-1 text-xl font-semibold tracking-tight text-ink">English Basics</h1>
        </div>
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <button
              className={[
                'w-full rounded-xl p-3 text-left transition-colors duration-200',
                lesson.active ? 'bg-palette-blue/50 text-ink' : 'hover:bg-palette-blue/25',
              ].join(' ')}
              key={lesson.title}
              type="button"
            >
              <span className="block text-sm font-semibold">{lesson.title}</span>
              <span className="text-xs text-muted">{lesson.time}</span>
            </button>
          ))}
        </div>
      </Card>

      <div className="space-y-5">
        <Card className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-muted">Current lesson</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight text-ink">
              Reading simple stories
            </h2>
          </div>

          <div className="grid min-h-56 place-items-center rounded-2xl bg-palette-blue/30 text-center">
            <div>
              <PlayCircle aria-hidden="true" className="mx-auto size-10 text-navy" />
              <p className="mt-3 font-semibold text-ink">Video placeholder</p>
              <p className="mt-1 text-sm text-muted">Lesson video can be connected later.</p>
            </div>
          </div>

          <Button icon={ArrowRight}>Next lesson</Button>
        </Card>

        <Card className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-muted">Notes</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">Key ideas</h2>
          </div>
          <div className="space-y-3 leading-7 text-muted">
            <p>
              Read the story once to understand the meaning. Read it again to notice new
              words and simple sentence patterns.
            </p>
            <p>
              Write two new words in your notebook and use each word in one sentence.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CourseDetail
