import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LearningProvider } from './context/LearningContext.jsx'
import { TranslationProvider } from './context/TranslationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslationProvider>
      <LearningProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LearningProvider>
    </TranslationProvider>
  </StrictMode>,
)
