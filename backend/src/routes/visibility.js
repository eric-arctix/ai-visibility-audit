const express = require('express')
const router = express.Router()

// POST /api/visibility/analyze - Analyze business visibility
router.post('/analyze', (req, res) => {
  const { businessName, businessService } = req.body
  
  // Mock response for now
  const mockResponse = {
    business_name: businessName,
    business_service: businessService,
    visibility_score: Math.floor(Math.random() * 100),
    recommendations: [
      'Improve your online presence with SEO-optimized content',
      'Create more detailed business descriptions',
      'Add customer reviews and testimonials',
      'Optimize for local search results'
    ],
    platforms: {
      chatgpt: Math.floor(Math.random() * 100),
      claude: Math.floor(Math.random() * 100),
      perplexity: Math.floor(Math.random() * 100)
    },
    generated_at: new Date().toISOString()
  }
  
  res.json(mockResponse)
})

module.exports = router