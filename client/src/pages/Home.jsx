import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { Heart, Users, Target, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const features = [
    { icon: Heart, key: 'compassion' },
    { icon: Users, key: 'community' },
    { icon: Target, key: 'focused' },
    { icon: TrendingUp, key: 'transparent' },
  ]

  const recentProjects = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&auto=format&fit=crop',
      description: 'Providing clean water access to 5,000 families in rural communities.',
      progress: 85,
    },
    {
      id: 2,
      title: 'Education for All',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop',
      description: 'Building schools and providing educational materials for underserved children.',
      progress: 70,
    },
    {
      id: 3,
      title: 'Healthcare Support',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      description: 'Mobile health clinics serving remote areas with essential medical care.',
      progress: 92,
    },
  ]

  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="section-container section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            {t('home.whyChoose.title')}
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('home.whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{t(`home.whyChoose.${feature.key}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t(`home.whyChoose.${feature.key}.desc`)}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-2 mb-4">{t('home.recentProjects.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {t('home.recentProjects.subtitle')}
            </p>
          </div>
          <Link
            to="/projects"
            className="mt-6 md:mt-0 inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 group"
          >
            {t('home.recentProjects.viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{t('home.recentProjects.progress')}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary-600 dark:bg-primary-800 text-white section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 text-white mb-6"
            >
              {t('home.cta.title')}
            </motion.h2>
            <p className="text-xl text-primary-50 dark:text-gray-300 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/support"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-colors shadow-lg"
              >
                {t('home.cta.donate')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 dark:hover:bg-white/20 transition-colors"
              >
                {t('home.cta.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
