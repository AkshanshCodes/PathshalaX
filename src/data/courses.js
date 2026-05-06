import {
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  Languages,
  Microscope,
  Target,
} from 'lucide-react'

export const featuredCourses = [
  {
    id: 'english-basics',
    title: 'English Basics',
    progress: 68,
    icon: Languages,
    tone: 'bg-palette-pink/55 text-navy',
  },
  {
    id: 'math-foundations',
    title: 'Math Foundations',
    progress: 42,
    icon: Calculator,
    tone: 'bg-palette-blue/70 text-navy',
  },
  {
    id: 'science-around-us',
    title: 'Science Around Us',
    progress: 24,
    icon: Microscope,
    tone: 'bg-palette-green/70 text-navy',
  },
  {
    id: 'world-cultures',
    title: 'World Cultures',
    progress: 15,
    icon: Globe2,
    tone: 'bg-palette-blue/35 text-navy',
  },
]

export const progressStats = [
  { label: 'Active courses', value: '04', icon: BookOpen },
  { label: 'Lessons done', value: '18', icon: CheckCircle2 },
  { label: 'Study hours', value: '6.5', icon: Clock3 },
  { label: 'Weekly goal', value: '82%', icon: Target },
]

export const continueLearning = {
  title: 'Reading Simple Stories',
  course: 'English Basics',
  progress: 68,
  nextLesson: 'Lesson 6: New words in context',
  icon: BookOpen,
}

export const dailyTip = {
  title: 'Daily learning tip',
  text: 'Study for ten calm minutes today. Small sessions are easier to repeat.',
  icon: FileText,
}

export const lessons = [
  { title: 'Welcome and goals', time: '5 min', done: true },
  { title: 'Reading simple stories', time: '12 min', active: true },
  { title: 'New words in context', time: '10 min' },
  { title: 'Short practice', time: '8 min' },
  { title: 'Review notes', time: '6 min' },
]

export const quizQuestions = [
  {
    question: 'Which habit supports steady learning?',
    options: ['Small daily practice', 'Skipping reviews', 'Rushing lessons', 'Studying only once'],
    answer: 'Small daily practice',
  },
  {
    question: 'What should you do after learning new words?',
    options: ['Use them in a sentence', 'Ignore them', 'Close the lesson', 'Guess randomly'],
    answer: 'Use them in a sentence',
  },
]
