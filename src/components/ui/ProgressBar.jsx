function ProgressBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-muted">{label}</span>
        <span className="font-semibold text-sage-800">{value}%</span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-sage-100"
        role="progressbar"
        aria-label={label}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
      >
        <div className="h-full rounded-full bg-sage-600" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
