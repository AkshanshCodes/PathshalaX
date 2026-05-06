import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import { quizQuestions } from '../data/courses'

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = quizQuestions[current]
  const progress = Math.round(((current + 1) / quizQuestions.length) * 100)

  function handleNext() {
    const isCorrect = selected === question.answer
    if (isCorrect) {
      setScore((value) => value + 1)
    }

    if (current === quizQuestions.length - 1) {
      setFinished(true)
      return
    }

    setCurrent((value) => value + 1)
    setSelected('')
  }

  if (finished) {
    return (
      <Card className="mx-auto max-w-xl space-y-5 text-center">
        <p className="text-sm font-semibold text-muted">Quiz result</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          {score} / {quizQuestions.length}
        </h1>
        <p className="text-muted">Good work. Review your notes and try another short practice.</p>
        <Button
          className="mx-auto"
          onClick={() => {
            setCurrent(0)
            setSelected('')
            setScore(0)
            setFinished(false)
          }}
          variant="secondary"
        >
          Try again
        </Button>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-2xl space-y-5">
      <div>
        <p className="text-sm font-semibold text-muted">
          Question {current + 1} of {quizQuestions.length}
        </p>
        <h1 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-ink">
          {question.question}
        </h1>
      </div>

      <ProgressBar label="Quiz progress" value={progress} />

      <div className="grid gap-3">
        {question.options.map((option) => (
          <button
            className={[
              'rounded-xl p-4 text-left font-semibold shadow-sm ring-1 transition-colors duration-200',
              selected === option
                ? 'bg-palette-blue/60 text-ink ring-palette-blue'
                : 'bg-surface text-ink ring-slate-200/80 hover:bg-palette-blue/25',
            ].join(' ')}
            key={option}
            onClick={() => setSelected(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      <Button disabled={!selected} onClick={handleNext}>
        Next
      </Button>
    </Card>
  )
}

export default Quiz
