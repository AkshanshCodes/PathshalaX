import { Search } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Card from '../components/ui/Card'
import { filterCourses, getCatalogSuggestions, getMatchingLessons } from '../data/courses'
import { useLearning } from '../hooks/useLearning'

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchTerm = searchParams.get('query') ?? ''
  const { getCourseSummary } = useLearning()

  const filteredCourses = filterCourses(searchTerm)
  const suggestions = getCatalogSuggestions(searchTerm)

  function updateSearch(nextValue) {
    if (nextValue.trim()) {
      setSearchParams({ query: nextValue })
      return
    }

    setSearchParams({})
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-muted">Courses</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink">Learning paths</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Search by course, topic, or lesson and continue from where you left off.
        </p>
      </div>

      <Card className="space-y-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink">Find the right lesson quickly</h2>
            <p className="mt-1 text-sm text-muted">
              Instant filtering keeps the experience light for slower connections and beginner learners.
            </p>
          </div>
          <p className="text-sm font-semibold text-muted">
            {filteredCourses.length} course{filteredCourses.length === 1 ? '' : 's'} shown
          </p>
        </div>

        <label className="relative block">
          <span className="sr-only">Search all courses</span>
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted"
          />
          <input
            className="h-12 w-full rounded-xl bg-surface pl-10 pr-4 text-sm text-ink shadow-sm ring-1 ring-slate-200/80 placeholder:text-muted focus:ring-2 focus:ring-palette-blue"
            onChange={(event) => updateSearch(event.target.value)}
            placeholder="Search courses, lesson titles, or topics"
            type="search"
            value={searchTerm}
          />
        </label>

        {searchTerm.trim() ? (
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted">Suggested results</p>
            {suggestions.length ? (
              <div className="grid gap-3 md:grid-cols-2">
                {suggestions.map((suggestion) => (
                  <Link
                    className="rounded-xl bg-palette-blue/25 px-4 py-3 transition-colors hover:bg-palette-blue/45"
                    key={suggestion.id}
                    to={suggestion.to}
                  >
                    <span className="block text-sm font-semibold text-ink">{suggestion.title}</span>
                    <span className="block text-xs text-muted">{suggestion.subtitle}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="rounded-xl bg-palette-cream/60 px-4 py-3 text-sm text-muted">
                No direct matches yet. Try a broader word like "reading", "plants", or "fraction".
              </p>
            )}
          </div>
        ) : null}
      </Card>

      {filteredCourses.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => {
            const summary = getCourseSummary(course.id)
            const matchingLessons = getMatchingLessons(course, searchTerm)
              .slice(0, 2)
              .map((lesson) => lesson.title)

            return (
              <CourseCard
                continueTo={`/courses/${course.id}?lesson=${summary?.continueLesson.id ?? course.lessons[0].id}`}
                course={course}
                key={course.id}
                nextLessonTitle={summary?.continueLesson.title}
                progress={summary?.progress ?? 0}
                searchMatches={searchTerm.trim() ? matchingLessons : []}
              />
            )
          })}
        </div>
      ) : (
        <Card className="space-y-3">
          <p className="text-sm font-semibold text-muted">No courses found</p>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Try a simpler search term</h2>
          <p className="max-w-2xl leading-7 text-muted">
            Partial matches work best with short topic words. You can try terms like reading, math,
            plants, or culture.
          </p>
        </Card>
      )}
    </div>
  )
}

export default Courses
