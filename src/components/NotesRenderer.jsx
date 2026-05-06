function NotesRenderer({ notes }) {
  return (
    <div className="space-y-4">
      {notes.map((note, index) => {
        if (note.type === 'heading') {
          return (
            <h3 className="text-lg font-semibold tracking-tight text-ink" key={`${note.type}-${index}`}>
              {note.text}
            </h3>
          )
        }

        if (note.type === 'paragraph') {
          return (
            <p className="leading-7 text-muted" key={`${note.type}-${index}`}>
              {note.text}
            </p>
          )
        }

        if (note.type === 'bullet-list') {
          return (
            <ul className="space-y-2 pl-5 text-muted" key={`${note.type}-${index}`}>
              {note.items.map((item) => (
                <li className="list-disc leading-7" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          )
        }

        if (note.type === 'highlight') {
          return (
            <div
              className="rounded-2xl bg-palette-green/45 px-4 py-3 text-sm leading-7 text-ink"
              key={`${note.type}-${index}`}
            >
              <p className="font-semibold">{note.label}</p>
              <p>{note.text}</p>
            </div>
          )
        }

        if (note.type === 'keywords') {
          return (
            <div className="flex flex-wrap gap-2" key={`${note.type}-${index}`}>
              {note.items.map((item) => (
                <span
                  className="rounded-full bg-palette-blue/55 px-3 py-1 text-sm font-semibold text-ink"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default NotesRenderer
