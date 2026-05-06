import TranslatedText from './TranslatedText'

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-muted">
          <TranslatedText text={eyebrow} />
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        <TranslatedText text={title} />
      </h2>
      {text ? <TranslatedText as="p" className="leading-7 text-muted" text={text} /> : null}
    </div>
  )
}

export default SectionHeader
