import CourseCard from '../components/CourseCard'
import SectionHeader from '../components/SectionHeader'
import { featuredCourses } from '../data/courses'

function Courses() {
  return (
    <section className="section-shell py-8 pb-16 sm:py-12">
      <div className="mb-8">
        <SectionHeader
          eyebrow="Course library"
          title="All learning paths"
          text="A simple route prepared for future course detail pages, filters, and backend data."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCourses.map((course) => (
          <div id={course.id} key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
