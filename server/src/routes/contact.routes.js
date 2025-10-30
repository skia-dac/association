import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Please provide a valid phone number'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 3, max: 200 })
    .withMessage('Subject must be between 3 and 200 characters'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
]

// POST /api/contact - Handle contact form submission
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      })
    }

    const { name, email, phone, subject, message } = req.body

    // Mock response - In production, you would:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send confirmation email to user
    // 4. Trigger webhooks or notifications

    console.log('📧 New contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        name,
        email,
        subject,
        receivedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    })
  }
})

// GET /api/contact - Get contact information (optional endpoint)
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Contact endpoint is active',
    contact: {
      email: 'info@charityhope.org',
      phone: '+1 (234) 567-890',
      address: '123 Charity Street, Hope City, HC 12345',
      officeHours: {
        weekdays: '9:00 AM - 5:00 PM EST',
        saturday: '10:00 AM - 2:00 PM EST',
        sunday: 'Closed',
      },
    },
  })
})

export default router
