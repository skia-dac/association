import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 text-white overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="heading-1 text-white leading-tight">
              {t('hero.title')} <span className="text-primary-200">{t('hero.titleHighlight')}</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-50 dark:text-gray-300 max-w-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/support"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                {t('hero.supportBtn')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-200"
              >
                {t('hero.projectsBtn')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold">500+</div>
                <div className="text-sm text-primary-100 dark:text-gray-400">{t('hero.stats.projects')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold">50K+</div>
                <div className="text-sm text-primary-100 dark:text-gray-400">{t('hero.stats.lives')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl md:text-4xl font-bold">100+</div>
                <div className="text-sm text-primary-100 dark:text-gray-400">{t('hero.stats.volunteers')}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Placeholder for charity image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-3 shadow-2xl" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Heart className="w-48 h-48 text-white/20" fill="currentColor" />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Donations</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">$1.2M+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
