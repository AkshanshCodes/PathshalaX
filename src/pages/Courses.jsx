import CourseCard from '../components/CourseCard'
import { featuredCourses } from '../data/courses'

function Courses() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-muted">Courses</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink">Learning paths</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Simple courses with notes, practice, and visible progress.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {featuredCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  )
}

export default Courses
