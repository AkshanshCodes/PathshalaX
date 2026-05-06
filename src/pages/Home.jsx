import { ArrowRight } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import {
  continueLearning,
  dailyTip,
  featuredCourses,
  progressStats,
} from '../data/courses'

function Home() {
  const ContinueIcon = continueLearning.icon
  const TipIcon = dailyTip.icon

  return (
    <div className="space-y-6 sm:space-y-7">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <Card className="space-y-5">
          <p className="text-sm font-semibold text-muted">Welcome back</p>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              PathshalaX
            </h1>
            <p className="mt-2 text-lg font-medium text-muted">
              Simple Learning Beyond Barriers
            </p>
          </div>
          <p className="max-w-2xl leading-7 text-muted">
            A clean student dashboard for lessons, notes, practice, and steady progress.
          </p>
          <Button className="w-full sm:w-auto" icon={ArrowRight} to="/courses">
            Browse courses
          </Button>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl bg-palette-green/70 text-navy">
              <TipIcon aria-hidden="true" className="size-5" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">{dailyTip.title}</h2>
          </div>
          <p className="leading-7 text-muted">{dailyTip.text}</p>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {progressStats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card className="flex items-center gap-4" key={stat.label}>
              <div className="grid size-11 place-items-center rounded-xl bg-palette-blue/55 text-navy">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted">{stat.label}</p>
                <p className="text-2xl font-semibold text-ink">{stat.value}</p>
              </div>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-xl bg-palette-blue/55 text-navy">
              <ContinueIcon aria-hidden="true" className="size-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-muted">{continueLearning.course}</p>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {continueLearning.title}
              </h2>
            </div>
          </div>
          <ProgressBar label="Course progress" value={continueLearning.progress} />
          <p className="rounded-xl bg-palette-green/45 p-4 text-sm text-ink">
            Next: {continueLearning.nextLesson}
          </p>
          <Button className="w-full" to="/courses/english-basics">
            Continue learning
          </Button>
        </Card>

        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-muted">Featured courses</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                Start learning
              </h2>
            </div>
            <Button to="/courses" variant="secondary">
              View all
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredCourses.slice(0, 2).map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
