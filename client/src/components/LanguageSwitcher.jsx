import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </motion.button>
  )
}

export default LanguageSwitcher
