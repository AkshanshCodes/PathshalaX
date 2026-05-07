import { Square, Volume2 } from 'lucide-react'
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis'

function AudioButton({ lang = 'en-IN', label, text }) {
  const { isSpeaking, isSupported, message, speak, stop } = useSpeechSynthesis()
  const isHindi = lang?.startsWith('hi')
  const buttonLabel = label ?? (isHindi ? 'Play Hindi audio' : 'Play English audio')
  const statusMessage = isSupported ? message : 'Audio playback is not supported in this browser.'

  function handleClick() {
    if (isSpeaking) {
      stop()
      return
    }

    speak(text, lang)
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button
        aria-label={buttonLabel}
        className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-surface px-3 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-slate-200/80 transition-colors hover:bg-palette-blue/35 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!text?.trim()}
        onClick={handleClick}
        type="button"
      >
        {isSpeaking ? (
          <Square aria-hidden="true" className="size-4" />
        ) : (
          <Volume2 aria-hidden="true" className="size-4" />
        )}
        <span>{isHindi ? 'HI' : 'EN'}</span>
      </button>
      {statusMessage ? (
        <span aria-live="polite" className="max-w-52 text-xs font-medium text-rose-700">
          {statusMessage}
        </span>
      ) : null}
    </span>
  )
}

export default AudioButton
