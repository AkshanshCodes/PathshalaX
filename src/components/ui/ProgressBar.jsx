function ProgressBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-muted">{label}</span>
        <span className="font-semibold text-ink">{value}%</span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-label={label}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
      >
        <div className="h-full rounded-full bg-navy" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
