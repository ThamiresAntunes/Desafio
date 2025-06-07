import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import LoginAdmin from './pages/LoginAdmin'
import PainelAdmin from './pages/PainelAdmin'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/solicitations" element={<PainelAdmin/>} />
        <Route path="/painelAdmin" element={<PainelAdmin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)