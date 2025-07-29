const express = require('express')
const router = express.Router()

// GET /api/auth/user - Get current user
router.get('/user', (req, res) => {
  res.json({ message: 'Auth routes - Coming soon' })
})

// POST /api/auth/login - Login user
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - Coming soon' })
})

// POST /api/auth/logout - Logout user
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout endpoint - Coming soon' })
})

module.exports = router