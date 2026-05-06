import { useContext } from 'react'
import LearningContext from '../context/learning-context'

export function useLearning() {
  const context = useContext(LearningContext)

  if (!context) {
    throw new Error('useLearning must be used inside LearningProvider')
  }

  return context
}
