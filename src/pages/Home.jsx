import { ArrowRight, BookOpenCheck, Clock3 } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import {
  continueLearning,
  dailyTip,
  featuredCourses,
  learningStats,
} from '../data/courses'

function Home() {
  const ContinueIcon = continueLearning.icon
  const TipIcon = dailyTip.icon

  return (
    <>
      <section className="section-shell py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-4 py-2 text-sm font-semibold text-sage-800">
              <BookOpenCheck aria-hidden="true" className="size-4" />
              Beginner-friendly learning dashboard
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                PathshalaX
              </h1>
              <p className="max-w-2xl text-xl font-medium leading-8 text-sage-800">
                Simple Learning Beyond Barriers
              </p>
              <p className="max-w-2xl leading-7 text-muted">
                A calm, accessible learning space with clear courses, visible progress,
                and touch-friendly paths for students starting anywhere.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="w-full sm:w-auto" icon={ArrowRight} to="/courses">
                Explore courses
              </Button>
              <Button className="w-full sm:w-auto" icon={Clock3} variant="secondary">
                Continue learning
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-lg bg-sage-100 text-sage-800">
                  <ContinueIcon aria-hidden="true" className="size-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted">{continueLearning.course}</p>
                  <h2 className="text-2xl font-bold text-ink">{continueLearning.title}</h2>
                </div>
              </div>
              <ProgressBar label="Current course progress" value={continueLearning.progress} />
              <p className="rounded-lg bg-sage-50 p-4 text-sm font-medium leading-6 text-sage-900">
                Next: {continueLearning.nextLesson}
              </p>
            </Card>

            <div className="grid grid-cols-3 gap-3">
              {learningStats.map((stat) => (
                <div
                  className="rounded-lg border border-sage-100 bg-white p-4 text-center"
                  key={stat.label}
                >
                  <p className="text-2xl font-bold text-sage-800">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 sm:py-12">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="flex flex-col justify-between gap-6 bg-sage-700 text-white">
            <div className="space-y-4">
              <div className="grid size-12 place-items-center rounded-lg bg-white/15">
                <TipIcon aria-hidden="true" className="size-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{dailyTip.title}</h2>
                <p className="leading-7 text-sage-50">{dailyTip.text}</p>
              </div>
            </div>
            <Button className="w-full bg-white text-sage-800 hover:bg-sage-50" variant="primary">
              Save tip
            </Button>
          </Card>

          <Card className="space-y-5">
            <SectionHeader
              eyebrow="Continue learning"
              title="Pick up from your last lesson"
              text="A compact overview for the next lesson, designed for quick study sessions."
            />
            <div className="rounded-lg bg-sage-50 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-sage-700">{continueLearning.course}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">
                    {continueLearning.nextLesson}
                  </h3>
                </div>
                <Button className="w-full sm:w-auto" icon={ArrowRight}>
                  Resume
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-shell py-8 pb-14 sm:py-12 sm:pb-20">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Featured courses"
            title="Start with clear, friendly lessons"
            text="Course cards are ready for real API data, progress tracking, and module routing later."
          />
          <Button className="w-full sm:w-auto" to="/courses" variant="secondary">
            View all
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
