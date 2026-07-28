import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserDetailProvider } from './context/UserDetailsContext.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserDetailProvider>
        <App />
      </UserDetailProvider>
    </BrowserRouter>
  </StrictMode>,
)
