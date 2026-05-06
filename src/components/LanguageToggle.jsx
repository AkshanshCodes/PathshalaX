import { AlertCircle, Languages } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

function LanguageToggle() {
  const { errorMessage, language, toggleLanguage } = useTranslation()
  const nextLanguageLabel = language === 'en' ? 'Hindi' : 'English'

  return (
    <div className="hidden sm:block">
      <button
        aria-label={`Switch language to ${nextLanguageLabel}`}
        className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-surface px-3 text-sm font-semibold text-ink shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-palette-blue/35"
        onClick={toggleLanguage}
        type="button"
      >
        <Languages aria-hidden="true" className="size-4" />
        {language === 'en' ? 'EN' : 'HI'}
      </button>
      {errorMessage && language === 'hi' ? (
        <div
          aria-live="polite"
          className="pointer-events-none fixed right-4 top-20 z-50 flex max-w-[18rem] items-start gap-2 rounded-xl bg-surface px-3 py-2 text-xs font-semibold leading-5 text-rose-700 shadow-soft ring-1 ring-rose-100"
          role="status"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      ) : null}
    </div>
  )
}

export default LanguageToggle
