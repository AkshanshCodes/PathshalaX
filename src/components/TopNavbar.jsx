import { useState } from 'react'
import { Bell, Menu, Search, UserCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getCatalogSuggestions } from '../data/courses'
import { useTranslatedText } from '../hooks/useTranslation'
import LanguageToggle from './LanguageToggle'
import TranslatedText from './TranslatedText'

function TopNavbar({ onMenuClick }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestions = getCatalogSuggestions(query)
  const searchPlaceholder = useTranslatedText('Search courses or lessons')

  function handleSearchSubmit(event) {
    event.preventDefault()

    if (!query.trim()) {
      return
    }

    setShowSuggestions(false)
    navigate(`/courses?query=${encodeURIComponent(query.trim())}`)
  }

  function openSuggestion(target, nextQuery = query) {
    setShowSuggestions(false)
    setQuery(nextQuery)
    navigate(target)
  }

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

        <form className="relative max-w-md flex-1" onSubmit={handleSearchSubmit}>
          <label>
            <span className="sr-only">Search courses</span>
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted"
            />
            <input
              className="h-11 w-full rounded-xl bg-surface pl-10 pr-3 text-sm text-ink shadow-sm ring-1 ring-slate-200/80 placeholder:text-muted transition-shadow focus:ring-2 focus:ring-palette-blue"
              onBlur={() => window.setTimeout(() => setShowSuggestions(false), 100)}
              onChange={(event) => {
                setQuery(event.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={searchPlaceholder.text}
              type="search"
              value={query}
            />
          </label>

          {showSuggestions && query.trim() ? (
            <div className="absolute inset-x-0 top-full mt-2 overflow-hidden rounded-2xl bg-surface p-2 shadow-[0_24px_50px_rgb(34_40_49_/_0.16)] ring-1 ring-slate-200/80">
              {suggestions.length ? (
                <div className="space-y-1">
                  {suggestions.map((suggestion) => (
                    <button
                      className="flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors hover:bg-palette-blue/35"
                      key={suggestion.id}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => openSuggestion(suggestion.to, suggestion.title)}
                      type="button"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          <TranslatedText text={suggestion.title} />
                        </span>
                        <span className="block text-xs text-muted">
                          <TranslatedText text={suggestion.subtitle} />
                        </span>
                      </span>
                      <span className="rounded-full bg-palette-green/55 px-2.5 py-1 text-xs font-semibold text-ink">
                        <TranslatedText text={suggestion.type} />
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 rounded-xl px-3 py-2">
                  <p className="text-sm text-muted">
                    <TranslatedText text="No quick matches yet." />
                  </p>
                  <button
                    className="text-sm font-semibold text-ink"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => openSuggestion(`/courses?query=${encodeURIComponent(query.trim())}`)}
                    type="button"
                  >
                    <TranslatedText text={`Search all courses for "${query.trim()}"`} />
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </form>

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
