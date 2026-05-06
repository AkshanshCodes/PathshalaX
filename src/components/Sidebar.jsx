import {
  BarChart3,
  BookOpen,
  Gauge,
  GraduationCap,
  Library,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import TranslatedText from './TranslatedText'

const items = [
  { label: 'Dashboard', to: '/', icon: Gauge },
  { label: 'Courses', to: '/courses', icon: BookOpen },
  { label: 'Quiz', to: '/quiz', icon: GraduationCap },
  { label: 'Resources', to: '/resources', icon: Library },
  { label: 'Progress', to: '/progress', icon: BarChart3 },
]

function SidebarContent({ onClose }) {
  return (
    <aside className="flex h-full flex-col bg-navy p-4 text-white">
      <div className="mb-8 flex items-center justify-between gap-3 pt-1">
        <NavLink className="flex items-center gap-3 rounded-xl" onClick={onClose} to="/">
          <span className="grid size-10 place-items-center rounded-xl bg-palette-green text-lg font-bold text-navy shadow-sm">
            P
          </span>
          <span>
            <span className="block text-lg font-bold text-white">PathshalaX</span>
            <span className="block text-xs text-white/60">
              <TranslatedText text="Simple Learning Beyond Barriers" />
            </span>
          </span>
        </NavLink>
        <button
          aria-label="Close menu"
          className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/70 lg:hidden"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>

      <nav className="space-y-1.5" aria-label="Main navigation">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              className={({ isActive }) =>
                [
                  'flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-palette-blue/15 text-white shadow-sm ring-1 ring-white/10'
                    : 'text-white/65 hover:bg-white/8 hover:text-white',
                ].join(' ')
              }
              key={item.to}
              onClick={onClose}
              to={item.to}
            >
              <Icon aria-hidden="true" className="size-5" />
              <TranslatedText text={item.label} />
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

function Sidebar({ open, onClose }) {
  return (
    <>
      <div className="fixed inset-y-0 left-0 z-30 hidden w-64 bg-navy lg:block">
        <SidebarContent />
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={onClose}>
          <div
            className="h-full w-72 max-w-[86vw] bg-navy shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <SidebarContent onClose={onClose} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Sidebar
