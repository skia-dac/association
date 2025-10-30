import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <h2 className="heading-2 mb-4 text-gray-900 dark:text-white">
            {t('common.notFound.title') || 'Page Not Found'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t('common.notFound.message') || 'Sorry, the page you are looking for does not exist or has been moved.'}
          </p>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <svg
              className="w-64 h-64 mx-auto text-primary-200 dark:text-primary-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              {t('common.notFound.goHome') || 'Go to Home'}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('common.notFound.goBack') || 'Go Back'}
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {t('common.notFound.helpful') || 'You might be looking for:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-primary-600 dark:text-primary-400 hover:underline">
                {t('nav.about')}
              </Link>
              <Link to="/projects" className="text-primary-600 dark:text-primary-400 hover:underline">
                {t('nav.projects')}
              </Link>
              <Link to="/support" className="text-primary-600 dark:text-primary-400 hover:underline">
                {t('nav.support')}
              </Link>
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
