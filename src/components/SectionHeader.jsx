function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-bold uppercase text-sage-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {text ? <p className="leading-7 text-muted">{text}</p> : null}
    </div>
  )
}

export default SectionHeader
