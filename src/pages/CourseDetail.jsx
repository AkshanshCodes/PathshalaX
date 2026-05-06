import { useEffect, useEffectEvent, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookCheck,
  CheckCircle2,
  Circle,
  Search,
} from 'lucide-react'
import { useParams, useSearchParams } from 'react-router-dom'
import NotesRenderer from '../components/NotesRenderer'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import {
  getCourseById,
  getMatchingLessons,
  getNextLesson,
  getPreviousLesson,
  getLessonById,
} from '../data/courses'
import { useLearning } from '../hooks/useLearning'

function CourseDetail() {
  const { courseId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [lessonFilter, setLessonFilter] = useState('')
  const course = getCourseById(courseId)
  const { getCourseSummary, isLessonComplete, setCurrentLesson, toggleLessonComplete } = useLearning()

  const summary = course ? getCourseSummary(course.id) : null
  const requestedLessonId = searchParams.get('lesson')
  const currentLesson =
    (course && getLessonById(course, requestedLessonId ?? summary?.currentLesson?.id)) ??
    course?.lessons[0] ??
    null

  const syncCurrentLesson = useEffectEvent((nextCourseId, nextLessonId) => {
    setCurrentLesson(nextCourseId, nextLessonId)
  })

  useEffect(() => {
    if (!course || !currentLesson) {
      return
    }

    syncCurrentLesson(course.id, currentLesson.id)
  }, [course, currentLesson])

  if (!course || !summary || !currentLesson) {
    return (
      <Card className="space-y-3">
        <p className="text-sm font-semibold text-muted">Course not found</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">This lesson path is missing</h1>
        <p className="max-w-2xl leading-7 text-muted">
          Return to the courses page and choose another learning path.
        </p>
      </Card>
    )
  }

  const filteredLessons = getMatchingLessons(course, lessonFilter)
  const lessonCompleted = isLessonComplete(course.id, currentLesson.id)
  const previousLesson = getPreviousLesson(course, currentLesson.id)
  const nextLesson = getNextLesson(course, currentLesson.id)

  function openLesson(lessonId) {
    setSearchParams({ lesson: lessonId })
    setCurrentLesson(course.id, lessonId)
  }

  return (
    <div className="space-y-5">
      <Card className="space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted">
              {course.category} • {course.level}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-ink">{course.title}</h1>
            <p className="max-w-3xl leading-7 text-muted">{course.description}</p>
          </div>

          <div className="w-full max-w-sm space-y-3 rounded-2xl bg-palette-blue/25 p-4">
            <p className="text-sm font-semibold text-muted">Course completion</p>
            <ProgressBar label="Lesson progress" value={summary.progress} />
            <p className="text-sm text-muted">
              {summary.completedCount} of {summary.totalLessons} lessons completed
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start">
        <Card className="h-fit space-y-4 xl:sticky xl:top-24">
          <div>
            <p className="text-sm font-semibold text-muted">Lessons</p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink">
              Notes-first learning
            </h2>
          </div>

          <label className="relative block">
            <span className="sr-only">Filter lessons</span>
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
            <input
              className="h-11 w-full rounded-xl bg-surface pl-9 pr-3 text-sm text-ink ring-1 ring-slate-200/80 placeholder:text-muted focus:ring-2 focus:ring-palette-blue"
              onChange={(event) => setLessonFilter(event.target.value)}
              placeholder="Filter lessons"
              type="search"
              value={lessonFilter}
            />
          </label>

          <div className="space-y-2">
            {filteredLessons.length ? (
              filteredLessons.map((lesson) => {
                const active = lesson.id === currentLesson.id
                const complete = isLessonComplete(course.id, lesson.id)

                return (
                  <button
                    className={[
                      'w-full rounded-xl p-3 text-left transition-colors duration-200',
                      active
                        ? 'bg-palette-blue/50 text-ink ring-1 ring-palette-blue'
                        : 'hover:bg-palette-blue/25',
                    ].join(' ')}
                    key={lesson.id}
                    onClick={() => openLesson(lesson.id)}
                    type="button"
                  >
                    <span className="flex items-start gap-3">
                      <span className="pt-0.5 text-navy">
                        {complete ? (
                          <CheckCircle2 aria-hidden="true" className="size-4" />
                        ) : (
                          <Circle aria-hidden="true" className="size-4" />
                        )}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{lesson.title}</span>
                        <span className="text-xs text-muted">{lesson.duration}</span>
                      </span>
                    </span>
                  </button>
                )
              })
            ) : (
              <p className="rounded-xl bg-palette-cream/70 p-4 text-sm text-muted">
                No lessons match this filter. Try a broader word like review, story, or practice.
              </p>
            )}
          </div>
        </Card>

        <div className="space-y-5">
          <Card className="space-y-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-muted">Lesson notes</p>
                <h2 className="mt-1 text-3xl font-semibold tracking-tight text-ink">
                  {currentLesson.title}
                </h2>
                <p className="mt-2 max-w-3xl leading-7 text-muted">{currentLesson.summary}</p>
              </div>

              <div className="rounded-full bg-palette-green/45 px-3 py-1.5 text-sm font-semibold text-ink">
                {lessonCompleted ? 'Completed' : 'In progress'}
              </div>
            </div>

            <NotesRenderer notes={currentLesson.notes} />
          </Card>

          <Card className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-muted">Lesson viewer</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                {currentLesson.viewerTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {currentLesson.viewerParagraphs.map((paragraph) => (
                <p className="leading-7 text-muted" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl bg-palette-blue/25 p-4">
              <p className="text-sm font-semibold text-ink">Example</p>
              <p className="mt-2 leading-7 text-muted">{currentLesson.example}</p>
            </div>

            <div className="rounded-2xl bg-palette-cream/70 p-4">
              <p className="text-sm font-semibold text-ink">Practice prompt</p>
              <p className="mt-2 leading-7 text-muted">{currentLesson.practicePrompt}</p>
            </div>
          </Card>

          <Card className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-palette-green/55 text-navy">
                  <BookCheck aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted">Lesson navigation</p>
                  <p className="text-sm leading-6 text-muted">
                    Mark this lesson complete when the notes feel clear, then move forward at your
                    own pace.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => toggleLessonComplete(course.id, currentLesson.id)}
                  variant="secondary"
                >
                  {lessonCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                </Button>
                <Button to={`/quiz?course=${course.id}`} variant="secondary">
                  Practice quiz
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              {previousLesson ? (
                <Button icon={ArrowLeft} onClick={() => openLesson(previousLesson.id)} variant="ghost">
                  Previous lesson
                </Button>
              ) : (
                <span className="hidden sm:block" />
              )}

              {nextLesson ? (
                <Button icon={ArrowRight} onClick={() => openLesson(nextLesson.id)}>
                  Next lesson
                </Button>
              ) : (
                <Button icon={ArrowRight} to={`/quiz?course=${course.id}`}>
                  Take course quiz
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
