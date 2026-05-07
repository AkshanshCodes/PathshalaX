import { useState } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, RotateCcw, XCircle } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import AudioButton from '../components/AudioButton'
import TranslatedText from '../components/TranslatedText'
import Button from '../components/ui/Button'
import ProgressBar from '../components/ui/ProgressBar'
import { quizSubjects, getQuizSubjectById } from '../data/quizCatalog'
import { useLearning } from '../hooks/useLearning'
import { useTranslatedText } from '../hooks/useTranslation'

const surfaceClass = 'rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgb(15_23_42_/_0.08)]'

const difficultyStyles = {
  Easy: 'bg-[#E2F7E5] text-[#166534]',
  Medium: 'bg-[#FFF3D6] text-[#9A6700]',
  Hard: 'bg-[#E2E8F0] text-[#1E293B]',
}

function SubjectCard({ subject, onSelect }) {
  const Icon = subject.icon

  return (
    <button
      className="group rounded-[28px] bg-white p-6 text-left shadow-[0_16px_40px_rgb(15_23_42_/_0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgb(15_23_42_/_0.12)]"
      onClick={() => onSelect(subject.id)}
      type="button"
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <div className="grid size-14 place-items-center rounded-2xl bg-[#1E293B] text-white">
            <Icon aria-hidden="true" className="size-7" />
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            <TranslatedText text={`${subject.quizzes.length} quizzes`} />
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            <TranslatedText text={subject.title} />
          </h2>
          <p className="leading-7 text-slate-600">
            <TranslatedText text={subject.description} />
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-slate-700">
          <span>
            <TranslatedText text="Choose subject" />
          </span>
          <ChevronRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  )
}

function QuizCard({ quiz, onStart }) {
  return (
    <div className={`${surfaceClass} flex h-full flex-col gap-5`}>
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            <TranslatedText text={quiz.title} />
          </h3>
          <p className="leading-7 text-slate-600">
            <TranslatedText text={quiz.description} />
          </p>
        </div>
        <span
          className={[
            'rounded-full px-3 py-1 text-xs font-semibold',
            difficultyStyles[quiz.difficulty] ?? 'bg-slate-100 text-slate-700',
          ].join(' ')}
        >
          <TranslatedText text={quiz.difficulty} />
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <span>
          <TranslatedText text={`${quiz.questions.length} questions`} />
        </span>
        <span>
          <TranslatedText text="MCQ practice" />
        </span>
      </div>

      <Button className="mt-auto w-full" onClick={() => onStart(quiz.id)}>
        <TranslatedText text="Start Quiz" />
      </Button>
    </div>
  )
}

function SubjectSelectionStep({ onSelectSubject }) {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          <TranslatedText text="Step 1" />
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          <TranslatedText text="Choose a Subject" />
        </h1>
        <TranslatedText
          as="p"
          className="max-w-3xl text-lg leading-8 text-slate-600"
          text="Pick a subject to view its available quizzes. Each quiz is short, focused, and built for steady practice."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quizSubjects.map((subject) => (
          <SubjectCard key={subject.id} onSelect={onSelectSubject} subject={subject} />
        ))}
      </div>
    </section>
  )
}

function QuizSelectionStep({ subject, onBack, onStartQuiz }) {
  const SubjectIcon = subject.icon

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <Button icon={ArrowLeft} onClick={onBack} variant="ghost">
            <TranslatedText text="Back to subjects" />
          </Button>
          <div className="flex items-center gap-4">
            <div className="grid size-14 place-items-center rounded-2xl bg-[#1E293B] text-white">
              <SubjectIcon aria-hidden="true" className="size-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                <TranslatedText text="Step 2" />
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                <TranslatedText text={subject.title} />
              </h1>
            </div>
          </div>
          <TranslatedText
            as="p"
            className="max-w-3xl text-lg leading-8 text-slate-600"
            text="Choose one quiz to begin. Each quiz has 10 questions and clear feedback after every answer."
          />
        </div>

        <div className={`${surfaceClass} max-w-sm space-y-2`}>
          <p className="text-sm font-semibold text-slate-500">
            <TranslatedText text="Available quizzes" />
          </p>
          <p className="text-3xl font-semibold text-slate-900">{subject.quizzes.length}</p>
          <p className="text-sm leading-6 text-slate-600">
            <TranslatedText text="Easy, medium, and harder practice sets." />
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {subject.quizzes.map((quiz) => (
          <QuizCard key={quiz.id} onStart={onStartQuiz} quiz={quiz} />
        ))}
      </div>
    </section>
  )
}

function QuizResultsStep({ quiz, score, subjectTitle, onRetry, onChooseAnotherQuiz }) {
  const percentage = Math.round((score / quiz.questions.length) * 100)

  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          <TranslatedText text="Quiz Complete" />
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          <TranslatedText text="Results Summary" />
        </h1>
        <TranslatedText
          as="p"
          className="max-w-3xl text-lg leading-8 text-slate-600"
          text={`You finished the ${quiz.title} quiz for ${subjectTitle}. Review your score and choose your next step.`}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`${surfaceClass} space-y-6`}>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-500">
              <TranslatedText text="Your score" />
            </p>
            <h2 className="text-5xl font-semibold tracking-tight text-slate-900">
              {score}/{quiz.questions.length}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              <TranslatedText text={`${percentage}% correct`} />
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              <TranslatedText text={quiz.title} />
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              <TranslatedText text={quiz.description} />
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={onRetry} variant="secondary">
              <TranslatedText text="Retry Quiz" />
            </Button>
            <Button onClick={onChooseAnotherQuiz}>
              <TranslatedText text="Choose Another Quiz" />
            </Button>
          </div>
        </div>

        <div className={`${surfaceClass} space-y-4`}>
          <p className="text-sm font-semibold text-slate-500">
            <TranslatedText text="Quick guidance" />
          </p>
          <div className="space-y-3 text-slate-600">
            <p>
              <TranslatedText
                text={
                  percentage >= 80
                    ? 'Strong work. You are ready for another quiz in this subject.'
                    : 'A retry can help lock in the ideas you missed.'
                }
              />
            </p>
            <p>
              <TranslatedText text="Each PathshalaX quiz uses short practice so you can improve in small, repeatable steps." />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuizPlayStep({
  question,
  quiz,
  questionIndex,
  selectedOption,
  feedback,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
  onChooseAnotherQuiz,
}) {
  const progress = Math.round(((questionIndex + 1) / quiz.questions.length) * 100)
  const translatedQuestion = useTranslatedText(question.prompt)
  const hindiQuestion = useTranslatedText(question.prompt, 'hi')

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            <TranslatedText text="Step 3" />
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            <TranslatedText text={quiz.title} />
          </h1>
          <TranslatedText as="p" className="text-lg leading-8 text-slate-600" text={quiz.description} />
        </div>

        <Button icon={ArrowLeft} onClick={onChooseAnotherQuiz} variant="ghost">
          <TranslatedText text="Back to quizzes" />
        </Button>
      </div>

      <div className={`${surfaceClass} mx-auto max-w-4xl space-y-6`}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-500">
              <TranslatedText text={`Question ${questionIndex + 1} of ${quiz.questions.length}`} />
            </p>
            <span
              className={[
                'rounded-full px-3 py-1 text-xs font-semibold',
                difficultyStyles[quiz.difficulty] ?? 'bg-slate-100 text-slate-700',
              ].join(' ')}
            >
              <TranslatedText text={quiz.difficulty} />
            </span>
          </div>

          <ProgressBar label="Quiz progress" value={progress} />
        </div>

        <div className="space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="text-3xl font-semibold leading-snug tracking-tight text-slate-900">
              {translatedQuestion.text}
            </h2>
            <div className="flex shrink-0 flex-wrap gap-2">
              <AudioButton lang="en-IN" text={question.prompt} />
              <AudioButton lang="hi-IN" text={hindiQuestion.text} />
            </div>
          </div>
          {translatedQuestion.isTranslating ? (
            <p className="text-sm font-medium text-slate-500" aria-live="polite">
              <TranslatedText text="Translating question..." />
            </p>
          ) : null}
        </div>

        <div className="grid gap-3">
          {question.options.map((option) => {
            const isSelected = selectedOption === option

            return (
              <button
                className={[
                  'rounded-2xl border p-5 text-left text-base font-semibold transition-colors duration-200',
                  isSelected
                    ? 'border-[#1E293B] bg-[#1E293B] text-white'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50',
                  feedback ? 'cursor-default' : '',
                ].join(' ')}
                disabled={Boolean(feedback)}
                key={option}
                onClick={() => onSelectOption(option)}
                type="button"
              >
                <TranslatedText text={option} />
              </button>
            )
          })}
        </div>

        {feedback ? (
          <div
            className={[
              'rounded-2xl border p-4',
              feedback.isCorrect
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-rose-200 bg-rose-50 text-rose-900',
            ].join(' ')}
          >
            <div className="flex items-start gap-3">
              {feedback.isCorrect ? (
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              ) : (
                <XCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              )}
              <div className="space-y-1">
                <p className="font-semibold">
                  <TranslatedText text={feedback.isCorrect ? 'Correct answer' : 'Incorrect answer'} />
                </p>
                <TranslatedText as="p" className="leading-7" text={feedback.message} />
                {!feedback.isCorrect ? (
                  <p className="text-sm font-semibold">
                    <TranslatedText text={`Correct answer: ${question.correctAnswer}`} />
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button icon={RotateCcw} onClick={onChooseAnotherQuiz} variant="ghost">
            <TranslatedText text="Choose Another Quiz" />
          </Button>

          {feedback ? (
            <Button onClick={onNextQuestion}>
              <TranslatedText
                text={questionIndex === quiz.questions.length - 1 ? 'View Results' : 'Next Question'}
              />
            </Button>
          ) : (
            <Button disabled={!selectedOption} onClick={onCheckAnswer}>
              <TranslatedText text="Check Answer" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { recordQuizResult } = useLearning()
  const initialSubject = getQuizSubjectById(searchParams.get('course'))

  const [step, setStep] = useState(initialSubject ? 'quizzes' : 'subjects')
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubject?.id ?? '')
  const [selectedQuizId, setSelectedQuizId] = useState('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [score, setScore] = useState(0)

  const selectedSubject = getQuizSubjectById(selectedSubjectId)
  const selectedQuiz =
    selectedSubject?.quizzes.find((quiz) => quiz.id === selectedQuizId) ?? null
  const currentQuestion = selectedQuiz?.questions[currentQuestionIndex] ?? null

  function resetQuizRun() {
    setCurrentQuestionIndex(0)
    setSelectedOption('')
    setFeedback(null)
    setScore(0)
  }

  function handleSelectSubject(subjectId) {
    setSelectedSubjectId(subjectId)
    setSelectedQuizId('')
    resetQuizRun()
    setStep('quizzes')
    setSearchParams({ course: subjectId })
  }

  function handleBackToSubjects() {
    setSelectedSubjectId('')
    setSelectedQuizId('')
    resetQuizRun()
    setStep('subjects')
    setSearchParams({})
  }

  function handleStartQuiz(quizId) {
    setSelectedQuizId(quizId)
    resetQuizRun()
    setStep('quiz')
  }

  function handleChooseAnotherQuiz() {
    setSelectedQuizId('')
    resetQuizRun()
    setStep('quizzes')
  }

  function handleRetryQuiz() {
    resetQuizRun()
    setStep('quiz')
  }

  function handleCheckAnswer() {
    if (!currentQuestion || !selectedOption) {
      return
    }

    const isCorrect = selectedOption === currentQuestion.correctAnswer

    setFeedback({
      isCorrect,
      message: currentQuestion.explanation,
    })
  }

  function handleNextQuestion() {
    if (!currentQuestion || !feedback || !selectedQuiz || !selectedSubject) {
      return
    }

    const nextScore = feedback.isCorrect ? score + 1 : score

    if (currentQuestionIndex === selectedQuiz.questions.length - 1) {
      setScore(nextScore)
      recordQuizResult(selectedSubject.id, nextScore, selectedQuiz.questions.length)
      setStep('results')
      setFeedback(null)
      setSelectedOption('')
      return
    }

    setScore(nextScore)
    setCurrentQuestionIndex((value) => value + 1)
    setSelectedOption('')
    setFeedback(null)
  }

  return (
    <div className="-mx-4 -my-5 min-h-[calc(100svh-4rem)] bg-[#F5F5F5] px-4 py-5 sm:-mx-6 sm:px-6 sm:py-7 lg:-my-8 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {step === 'subjects' ? (
          <SubjectSelectionStep onSelectSubject={handleSelectSubject} />
        ) : null}

        {step === 'quizzes' && selectedSubject ? (
          <QuizSelectionStep
            onBack={handleBackToSubjects}
            onStartQuiz={handleStartQuiz}
            subject={selectedSubject}
          />
        ) : null}

        {step === 'quiz' && selectedSubject && selectedQuiz && currentQuestion ? (
          <QuizPlayStep
            feedback={feedback}
            onCheckAnswer={handleCheckAnswer}
            onChooseAnotherQuiz={handleChooseAnotherQuiz}
            onNextQuestion={handleNextQuestion}
            onSelectOption={setSelectedOption}
            question={currentQuestion}
            questionIndex={currentQuestionIndex}
            quiz={selectedQuiz}
            selectedOption={selectedOption}
          />
        ) : null}

        {step === 'results' && selectedSubject && selectedQuiz ? (
          <QuizResultsStep
            onChooseAnotherQuiz={handleChooseAnotherQuiz}
            onRetry={handleRetryQuiz}
            quiz={selectedQuiz}
            score={score}
            subjectTitle={selectedSubject.title}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Quiz
