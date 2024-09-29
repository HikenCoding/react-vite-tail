import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Navbar from './Navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
  </StrictMode>,
)
