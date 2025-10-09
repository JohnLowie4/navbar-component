import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageTemplate from './PageTemplate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageTemplate></PageTemplate>
  </StrictMode>,
)
