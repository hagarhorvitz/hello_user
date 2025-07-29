import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UsernameProvider } from './Context/UsernameContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <UsernameProvider>
            <App />
        </UsernameProvider>
    </BrowserRouter>
  </StrictMode>,
)
