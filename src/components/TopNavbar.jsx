import { Bell, Menu, Search, UserCircle } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

function TopNavbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-warm/95 backdrop-blur">
      <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:min-h-18">
        <button
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-xl bg-surface text-ink shadow-sm ring-1 ring-slate-200/70 transition-colors hover:bg-palette-blue/35 lg:hidden"
          onClick={onMenuClick}
          type="button"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>

        <label className="relative max-w-md flex-1">
          <span className="sr-only">Search courses</span>
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted"
          />
          <input
            className="h-11 w-full rounded-xl bg-surface pl-10 pr-3 text-sm text-ink shadow-sm ring-1 ring-slate-200/80 placeholder:text-muted transition-shadow focus:ring-2 focus:ring-palette-blue"
            placeholder="Search courses"
            type="search"
          />
        </label>

        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle />
          <button
            aria-label="Notifications"
            className="grid size-10 place-items-center rounded-xl bg-surface text-muted shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-palette-blue/35"
            type="button"
          >
            <Bell aria-hidden="true" className="size-5" />
          </button>
          <button
            aria-label="Profile"
            className="grid size-10 place-items-center rounded-xl bg-navy text-white shadow-sm transition-transform hover:scale-[1.02]"
            type="button"
          >
            <UserCircle aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopNavbar
