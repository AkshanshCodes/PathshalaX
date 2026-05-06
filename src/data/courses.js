import {
  BookOpen,
  Calculator,
  Globe2,
  Languages,
  Microscope,
  Sprout,
} from 'lucide-react'

export const featuredCourses = [
  {
    id: 'english-basics',
    title: 'English Basics',
    difficulty: 'Beginner',
    progress: 68,
    icon: Languages,
    tone: 'bg-sage-100 text-sage-800',
  },
  {
    id: 'math-foundations',
    title: 'Math Foundations',
    difficulty: 'Beginner',
    progress: 42,
    icon: Calculator,
    tone: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 'science-around-us',
    title: 'Science Around Us',
    difficulty: 'Intermediate',
    progress: 24,
    icon: Microscope,
    tone: 'bg-teal-100 text-teal-800',
  },
  {
    id: 'world-cultures',
    title: 'World Cultures',
    difficulty: 'Beginner',
    progress: 15,
    icon: Globe2,
    tone: 'bg-lime-100 text-lime-800',
  },
]

export const learningStats = [
  { label: 'Courses active', value: '04' },
  { label: 'Lessons done', value: '18' },
  { label: 'Day streak', value: '07' },
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
  text: 'Learn in small blocks. Ten calm minutes every day is easier to keep than one long session.',
  icon: Sprout,
}
