import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/Auth/ProtectedRoute'
import { LoginPage } from './components/Auth/LoginPage'
import { DashboardLayout } from './components/Layout/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import { VisibilitySnapshot } from './pages/VisibilitySnapshot'
import { PromptOptimizer } from './pages/PromptOptimizer'
import { Workflows } from './pages/Workflows'
import { Reports } from './pages/Reports'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="visibility" element={<VisibilitySnapshot />} />
            <Route path="optimizer" element={<PromptOptimizer />} />
            <Route path="workflows" element={<Workflows />} />
            <Route path="reports" element={<Reports />} />
            <Route path="" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
