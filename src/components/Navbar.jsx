import { BookMarked, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Button from './ui/Button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-sage-100 bg-warm/95 backdrop-blur">
      <nav
        className="section-shell flex min-h-20 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <NavLink className="flex items-center gap-3 rounded-lg text-left" to="/">
          <span className="grid size-11 place-items-center rounded-lg bg-sage-700 text-white">
            <BookMarked aria-hidden="true" className="size-6" />
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-ink">PathshalaX</span>
            <span className="block text-xs font-medium text-muted">
              Simple Learning Beyond Barriers
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 rounded-lg border border-sage-100 bg-white p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'bg-sage-100 text-sage-900' : 'text-muted hover:text-sage-800',
                ].join(' ')
              }
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            aria-label="Search courses"
            className="hidden min-h-11 rounded-xl px-3 sm:inline-flex"
            icon={Search}
            variant="secondary"
          >
            Search
          </Button>
        </div>
      </nav>
      <div className="section-shell flex gap-2 pb-3 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              [
                'flex min-h-11 flex-1 items-center justify-center rounded-xl text-sm font-semibold transition-colors',
                isActive ? 'bg-sage-100 text-sage-900' : 'bg-white text-muted',
              ].join(' ')
            }
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

export default Navbar
