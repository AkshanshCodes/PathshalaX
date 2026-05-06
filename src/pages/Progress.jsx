import { BookOpen, CheckCircle2, Trophy } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import { useLearning } from '../hooks/useLearning'

function Progress() {
  const {
    averageProgress,
    completedCourseCount,
    continueLearning,
    courseSummaries,
    totalLessonsAvailable,
    totalLessonsCompleted,
  } = useLearning()

  const overviewCards = [
    { label: 'Lessons completed', value: `${totalLessonsCompleted}/${totalLessonsAvailable}`, icon: CheckCircle2 },
    { label: 'Average progress', value: `${averageProgress}%`, icon: BookOpen },
    { label: 'Courses completed', value: String(completedCourseCount).padStart(2, '0'), icon: Trophy },
  ]

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-muted">Progress</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink">Your learning progress</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Track completed lessons, course percentages, and the easiest next step to continue.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {overviewCards.map((card) => {
          const Icon = card.icon

          return (
            <Card className="flex items-center gap-4" key={card.label}>
              <div className="grid size-11 place-items-center rounded-xl bg-palette-blue/55 text-navy">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted">{card.label}</p>
                <p className="text-2xl font-semibold text-ink">{card.value}</p>
              </div>
            </Card>
          )
        })}
      </section>

      {continueLearning ? (
        <Card className="space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-muted">Continue learning</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                {continueLearning.course.title}
              </h2>
              <p className="mt-1 text-muted">{continueLearning.continueLesson.title}</p>
            </div>
            <Button
              to={`/courses/${continueLearning.course.id}?lesson=${continueLearning.continueLesson.id}`}
            >
              Resume lesson
            </Button>
          </div>

          <ProgressBar label="Course progress" value={continueLearning.progress} />
        </Card>
      ) : null}

      <section className="space-y-4">
        {courseSummaries.map((summary) => {
          const CourseIcon = summary.course.icon

          return (
            <Card className="space-y-4" key={summary.course.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`grid size-11 place-items-center rounded-xl ${summary.course.tone}`}>
                      <CourseIcon aria-hidden="true" className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-ink">
                        {summary.course.title}
                      </h2>
                      <p className="text-sm text-muted">
                        {summary.completedCount} of {summary.totalLessons} lessons completed
                      </p>
                    </div>
                  </div>
                  <p className="max-w-2xl leading-7 text-muted">{summary.course.description}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    to={`/courses/${summary.course.id}?lesson=${summary.continueLesson.id}`}
                    variant="secondary"
                  >
                    Continue course
                  </Button>
                  <Button to={`/quiz?course=${summary.course.id}`}>Open quiz</Button>
                </div>
              </div>

              <ProgressBar label="Completion" value={summary.progress} />

              <div className="flex flex-col gap-2 text-sm text-muted">
                <p>Next lesson: {summary.continueLesson.title}</p>
                {summary.quizResult ? (
                  <p>
                    Best quiz score: {summary.quizResult.bestScore}/
                    {summary.quizResult.totalQuestions} ({summary.quizResult.bestPercentage}%)
                  </p>
                ) : (
                  <p>Quiz not attempted yet.</p>
                )}
              </div>
            </Card>
          )
        })}
      </section>
    </div>
  )
}

export default Progress
