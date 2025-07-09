import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Hello from "./Hello.jsx"
import Hello3 from "./Hello3.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello3 />
  </StrictMode>,
)
