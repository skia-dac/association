import { useState } from 'react'
import { Calendar, MapPin, Users, DollarSign, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = ['all', 'education', 'healthcare', 'infrastructure', 'environment']

  const projects = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      category: 'infrastructure',
      location: 'Rural Kenya',
      image: 'https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&auto=format&fit=crop',
      description: 'Installing water purification systems and wells in 20 villages, providing clean water access to over 5,000 families.',
      startDate: 'Jan 2024',
      endDate: 'Dec 2024',
      budget: '$120,000',
      beneficiaries: '5,000+ families',
      progress: 85,
      status: 'ongoing',
    },
    {
      id: 2,
      title: 'Education for All',
      category: 'education',
      location: 'Bangladesh',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop',
      description: 'Building 3 schools and providing educational materials, teacher training, and scholarships for 1,200 children.',
      startDate: 'Mar 2024',
      endDate: 'Mar 2025',
      budget: '$200,000',
      beneficiaries: '1,200+ children',
      progress: 70,
      status: 'ongoing',
    },
    {
      id: 3,
      title: 'Mobile Health Clinics',
      category: 'healthcare',
      location: 'Amazon Basin',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      description: 'Operating mobile health units providing essential medical care, vaccinations, and health education in remote communities.',
      startDate: 'Jan 2023',
      endDate: 'Ongoing',
      budget: '$150,000/year',
      beneficiaries: '3,000+ people',
      progress: 92,
      status: 'ongoing',
    },
    {
      id: 4,
      title: 'Reforestation Project',
      category: 'environment',
      location: 'Philippines',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop',
      description: 'Planting 100,000 trees to restore degraded forest areas and combat climate change while creating local jobs.',
      startDate: 'Jun 2023',
      endDate: 'Dec 2024',
      budget: '$80,000',
      beneficiaries: '50+ communities',
      progress: 100,
      status: 'completed',
    },
    {
      id: 5,
      title: 'Women Empowerment Program',
      category: 'education',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop',
      description: 'Vocational training and microfinance support for 500 women entrepreneurs to start sustainable businesses.',
      startDate: 'Feb 2024',
      endDate: 'Feb 2025',
      budget: '$90,000',
      beneficiaries: '500+ women',
      progress: 60,
      status: 'ongoing',
    },
    {
      id: 6,
      title: 'Emergency Relief Fund',
      category: 'healthcare',
      location: 'Global',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop',
      description: 'Rapid response fund for natural disasters and humanitarian crises, providing immediate aid and support.',
      startDate: 'Jan 2022',
      endDate: 'Ongoing',
      budget: 'Variable',
      beneficiaries: '10,000+ people',
      progress: 100,
      status: 'completed',
    },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 section-padding transition-colors duration-300">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">{t('projects.title')}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-container py-8 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-primary-600 dark:bg-primary-700 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {t(`projects.filters.${category}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {t(`projects.filters.${project.category}`)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                    project.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {t(`projects.status.${project.status}`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    {project.startDate} - {project.endDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    {project.beneficiaries}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    {t('projects.budget')}: {project.budget}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{t('projects.progress')}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Learn More Link */}
                <button className="mt-4 inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 group-hover:gap-2 transition-all">
                  {t('projects.learnMore')}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 dark:bg-primary-800 text-white section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">{t('projects.cta.title')}</h2>
            <p className="text-xl text-primary-50 dark:text-gray-300 mb-8">
              {t('projects.cta.subtitle')}
            </p>
            <a
              href="/support"
              className="inline-flex items-center bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-colors shadow-lg"
            >
              {t('projects.cta.button')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
