import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-svh bg-warm text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
