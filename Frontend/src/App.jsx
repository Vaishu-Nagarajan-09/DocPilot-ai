import React from 'react'
import RegistrationPage from "./pages/RegistrationPage";
import { BrowserRouter } from 'react-router-dom'
import PricingPage from "./pages/PricingPage";
import { Route, Routes } from 'react-router-dom'
import DataSubmission from './pages/DataSubmission'
import LoginPage from './pages/LoginPage'
import DashBoard from './pages/DashBoard'
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegistrationPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/submission' element={<DataSubmission />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App