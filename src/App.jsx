import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import CourseDetail from './pages/CourseDetail'
import Courses from './pages/Courses'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import Progress from './pages/Progress'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
        <Route path="/progress" element={<Progress />} />
      </Route>
    </Routes>
  )
}

export default App
