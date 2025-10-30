import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.routes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(helmet()) // Security headers
app.use(cors()) // Enable CORS for all origins (configure for production)
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Charity Website API is running',
    timestamp: new Date().toISOString(),
  })
})

// API Routes
app.use('/api/contact', contactRoutes)

// Error handling
app.use(notFound)
app.use(errorHandler)

// Start server (only if not in Vercel environment)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`)
    console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`)
  })
}

// Export for Vercel
export default app
