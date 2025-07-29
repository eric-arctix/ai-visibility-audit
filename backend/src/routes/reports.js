const express = require('express')
const router = express.Router()

// GET /api/reports - Get all reports for user
router.get('/', (req, res) => {
  // Mock empty reports for now
  res.json({
    reports: [],
    total: 0,
    message: 'No reports found. Generate your first report!'
  })
})

// GET /api/reports/:id - Get specific report
router.get('/:id', (req, res) => {
  res.json({ message: 'Get specific report - Coming soon' })
})

// POST /api/reports - Save a new report
router.post('/', (req, res) => {
  res.json({ message: 'Save report - Coming soon' })
})

// DELETE /api/reports/:id - Delete a report
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete report - Coming soon' })
})

module.exports = router