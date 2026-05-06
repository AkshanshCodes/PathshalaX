import Card from '../components/ui/Card'

function PlaceholderPage({ title }) {
  return (
    <Card className="space-y-3">
      <p className="text-sm font-semibold text-muted">PathshalaX</p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink">{title}</h1>
      <p className="max-w-2xl leading-7 text-muted">
        This clean page is ready for future content.
      </p>
    </Card>
  )
}

export default PlaceholderPage
