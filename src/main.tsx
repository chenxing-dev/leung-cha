import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
const backend = isTouchDevice ? TouchBackend : HTML5Backend
const backendOptions = isTouchDevice ? { enableMouseEvents: true, delayTouchStart: 80 } : undefined

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={backend} options={backendOptions}>
      <App isTouchDevice={isTouchDevice} />
    </DndProvider>
  </StrictMode>,
)
