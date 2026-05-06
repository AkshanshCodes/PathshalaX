import { useEffect, useState } from 'react'
import { courses, getCourseById, getLessonById } from '../data/courses'
import LearningContext from './learning-context'

const STORAGE_KEY = 'pathshalax-learning-state'

function buildDefaultState() {
  const currentLessons = Object.fromEntries(
    courses.map((course) => [course.id, course.lessons[0]?.id ?? null]),
  )

  return {
    completedLessons: {},
    currentLessons,
    quizResults: {},
    lastVisited: {
      courseId: courses[0]?.id ?? null,
      lessonId: courses[0]?.lessons[0]?.id ?? null,
    },
  }
}

function sanitizeState(rawState) {
  const fallbackState = buildDefaultState()

  if (!rawState || typeof rawState !== 'object') {
    return fallbackState
  }

  const completedLessons = {}

  courses.forEach((course) => {
    const validLessonIds = new Set(course.lessons.map((lesson) => lesson.id))
    const savedLessons = Array.isArray(rawState.completedLessons?.[course.id])
      ? rawState.completedLessons[course.id]
      : []

    completedLessons[course.id] = savedLessons.filter((lessonId) => validLessonIds.has(lessonId))
  })

  const lastVisitedCourse = getCourseById(rawState.lastVisited?.courseId)
  const fallbackCourse = courses[0]
  const resolvedCourse = lastVisitedCourse ?? fallbackCourse
  const resolvedLesson =
    getLessonById(resolvedCourse, rawState.lastVisited?.lessonId) ?? resolvedCourse?.lessons[0] ?? null

  return {
    completedLessons,
    currentLessons: {
      ...fallbackState.currentLessons,
      ...rawState.currentLessons,
    },
    quizResults: rawState.quizResults && typeof rawState.quizResults === 'object' ? rawState.quizResults : {},
    lastVisited: {
      courseId: resolvedCourse?.id ?? null,
      lessonId: resolvedLesson?.id ?? null,
    },
  }
}

function readLearningState() {
  if (typeof window === 'undefined') {
    return buildDefaultState()
  }

  try {
    const storedState = window.localStorage.getItem(STORAGE_KEY)

    if (!storedState) {
      return buildDefaultState()
    }

    return sanitizeState(JSON.parse(storedState))
  } catch {
    return buildDefaultState()
  }
}

function getContinueLesson(course, currentLessonId, completedLessonIds) {
  const currentLesson = getLessonById(course, currentLessonId)

  if (currentLesson && !completedLessonIds.includes(currentLesson.id)) {
    return currentLesson
  }

  return (
    course.lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ??
    currentLesson ??
    course.lessons[course.lessons.length - 1]
  )
}

export function LearningProvider({ children }) {
  const [learningState, setLearningState] = useState(readLearningState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(learningState))
  }, [learningState])

  function setCurrentLesson(courseId, lessonId) {
    setLearningState((currentState) => ({
      ...currentState,
      currentLessons: {
        ...currentState.currentLessons,
        [courseId]: lessonId,
      },
      lastVisited: {
        courseId,
        lessonId,
      },
    }))
  }

  function toggleLessonComplete(courseId, lessonId) {
    setLearningState((currentState) => {
      const savedLessons = currentState.completedLessons[courseId] ?? []
      const isAlreadyComplete = savedLessons.includes(lessonId)
      const nextCompletedLessons = isAlreadyComplete
        ? savedLessons.filter((savedLessonId) => savedLessonId !== lessonId)
        : [...savedLessons, lessonId]

      return {
        ...currentState,
        completedLessons: {
          ...currentState.completedLessons,
          [courseId]: nextCompletedLessons,
        },
        currentLessons: {
          ...currentState.currentLessons,
          [courseId]: lessonId,
        },
        lastVisited: {
          courseId,
          lessonId,
        },
      }
    })
  }

  function recordQuizResult(courseId, score, totalQuestions) {
    setLearningState((currentState) => {
      const previousResult = currentState.quizResults[courseId] ?? {
        attempts: 0,
        bestScore: 0,
        bestPercentage: 0,
      }
      const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0
      const bestScore = Math.max(previousResult.bestScore ?? 0, score)
      const bestPercentage = Math.max(previousResult.bestPercentage ?? 0, percentage)

      return {
        ...currentState,
        quizResults: {
          ...currentState.quizResults,
          [courseId]: {
            attempts: (previousResult.attempts ?? 0) + 1,
            lastScore: score,
            totalQuestions,
            lastPercentage: percentage,
            bestScore,
            bestPercentage,
          },
        },
      }
    })
  }

  const courseSummaries = courses.map((course) => {
    const completedLessonIds = learningState.completedLessons[course.id] ?? []
    const completedCount = completedLessonIds.length
    const totalLessons = course.lessons.length
    const progress = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0
    const currentLessonId = learningState.currentLessons[course.id] ?? course.lessons[0]?.id ?? null
    const continueLesson = getContinueLesson(course, currentLessonId, completedLessonIds)

    return {
      course,
      completedLessonIds,
      completedCount,
      totalLessons,
      progress,
      currentLesson: getLessonById(course, currentLessonId) ?? course.lessons[0],
      continueLesson,
      quizResult: learningState.quizResults[course.id] ?? null,
    }
  })

  const totalLessonsCompleted = courseSummaries.reduce(
    (sum, summary) => sum + summary.completedCount,
    0,
  )
  const totalLessonsAvailable = courseSummaries.reduce(
    (sum, summary) => sum + summary.totalLessons,
    0,
  )
  const completedCourseCount = courseSummaries.filter((summary) => summary.progress === 100).length
  const averageProgress = courseSummaries.length
    ? Math.round(
        courseSummaries.reduce((sum, summary) => sum + summary.progress, 0) / courseSummaries.length,
      )
    : 0

  const prioritizedCourseSummaries = [
    ...courseSummaries.filter((summary) => summary.course.id === learningState.lastVisited.courseId),
    ...courseSummaries.filter((summary) => summary.course.id !== learningState.lastVisited.courseId),
  ]

  const continueLearningSummary =
    prioritizedCourseSummaries.find((summary) => summary.progress < 100) ??
    prioritizedCourseSummaries[0] ??
    null

  const value = {
    courseSummaries,
    completedCourseCount,
    averageProgress,
    totalLessonsAvailable,
    totalLessonsCompleted,
    continueLearning: continueLearningSummary,
    isLessonComplete(courseId, lessonId) {
      return (learningState.completedLessons[courseId] ?? []).includes(lessonId)
    },
    getCourseProgress(courseId) {
      return courseSummaries.find((summary) => summary.course.id === courseId)?.progress ?? 0
    },
    getCourseSummary(courseId) {
      return courseSummaries.find((summary) => summary.course.id === courseId) ?? null
    },
    setCurrentLesson,
    toggleLessonComplete,
    recordQuizResult,
  }

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>
}
