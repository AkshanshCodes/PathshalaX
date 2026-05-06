import { ArrowRight, BookOpen, CheckCircle2, Target, Trophy } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import DailyLearningTip from '../components/DailyLearningTip'
import RecommendedResources from '../components/RecommendedResources'
import TranslatedText from '../components/TranslatedText'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import { useLearning } from '../hooks/useLearning'

function Home() {
  const {
    averageProgress,
    completedCourseCount,
    continueLearning,
    courseSummaries,
    totalLessonsCompleted,
  } = useLearning()

  const stats = [
    { label: 'Active courses', value: String(courseSummaries.length).padStart(2, '0'), icon: BookOpen },
    { label: 'Lessons done', value: String(totalLessonsCompleted).padStart(2, '0'), icon: CheckCircle2 },
    { label: 'Courses completed', value: String(completedCourseCount).padStart(2, '0'), icon: Trophy },
    { label: 'Average progress', value: `${averageProgress}%`, icon: Target },
  ]

  const continueCourse = continueLearning?.course
  const continueLesson = continueLearning?.continueLesson
  const ContinueIcon = continueCourse?.icon

  return (
    <div className="space-y-6 sm:space-y-7">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <Card className="space-y-5">
          <p className="text-sm font-semibold text-muted">
            <TranslatedText text="Welcome back" />
          </p>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">PathshalaX</h1>
            <p className="mt-2 text-lg font-medium text-muted">
              <TranslatedText text="Simple Learning Beyond Barriers" />
            </p>
          </div>
          <TranslatedText
            as="p"
            className="max-w-2xl leading-7 text-muted"
            text="A clean learning space with short lessons, clear notes, practice quizzes, and visible progress that works well even in low-connectivity study moments."
          />
          <Button className="w-full sm:w-auto" icon={ArrowRight} to="/courses">
            <TranslatedText text="Browse courses" />
          </Button>
        </Card>

        <DailyLearningTip />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card className="flex items-center gap-4" key={stat.label}>
              <div className="grid size-11 place-items-center rounded-xl bg-palette-blue/55 text-navy">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted">
                  <TranslatedText text={stat.label} />
                </p>
                <p className="text-2xl font-semibold text-ink">{stat.value}</p>
              </div>
            </Card>
          )
        })}
      </section>

      {continueCourse && continueLesson ? (
        <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="space-y-5">
            <div className="flex items-center gap-3">
              <div className={`grid size-12 place-items-center rounded-xl ${continueCourse.tone}`}>
                {ContinueIcon ? <ContinueIcon aria-hidden="true" className="size-6" /> : null}
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">
                  <TranslatedText text={continueCourse.title} />
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-ink">{continueLesson.title}</h2>
              </div>
            </div>
            <ProgressBar label="Course progress" value={continueLearning.progress} />
            <p className="rounded-xl bg-palette-green/45 p-4 text-sm text-ink">
              <TranslatedText text={`Next focus: ${continueLesson.summary}`} />
            </p>
            <Button
              className="w-full"
              to={`/courses/${continueCourse.id}?lesson=${continueLesson.id}`}
            >
              <TranslatedText text="Continue learning" />
            </Button>
          </Card>

          <div className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-muted">
                  <TranslatedText text="Featured courses" />
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                  <TranslatedText text="Start learning" />
                </h2>
              </div>
              <Button to="/courses" variant="secondary">
                <TranslatedText text="View all" />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {courseSummaries.slice(0, 2).map((summary) => (
                <CourseCard
                  continueTo={`/courses/${summary.course.id}?lesson=${summary.continueLesson.id}`}
                  course={summary.course}
                  key={summary.course.id}
                  nextLessonTitle={summary.continueLesson.title}
                  progress={summary.progress}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <RecommendedResources />
    </div>
  )
}

export default Home
