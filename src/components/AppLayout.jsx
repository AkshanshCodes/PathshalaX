import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-svh bg-warm text-ink">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-7 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
