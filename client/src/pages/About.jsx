import { CheckCircle, Target, Eye, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const values = [
    {
      icon: CheckCircle,
      key: 'integrity',
    },
    {
      icon: Target,
      key: 'impact',
    },
    {
      icon: Eye,
      key: 'vision',
    },
    {
      icon: Award,
      key: 'excellence',
    },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Outreach Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
    },
    {
      name: 'David Williams',
      role: 'Finance & Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
    },
  ]

  const milestones = [
    { year: '2015', event: 'CharityHope Founded', description: 'Started with a vision to make meaningful impact' },
    { year: '2017', event: 'First Major Project', description: 'Clean water initiative reaches 10,000 people' },
    { year: '2019', event: 'International Expansion', description: 'Operations extended to 5 countries' },
    { year: '2022', event: '50K Lives Impacted', description: 'Reached milestone of helping 50,000+ individuals' },
  ]

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
            <h1 className="heading-1 mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="heading-3 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.mission.text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="bg-secondary-100 dark:bg-secondary-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
            </div>
            <h2 className="heading-3 mb-4">{t('about.vision.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.vision.text')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{t(`about.values.${value.key}.title`)}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t(`about.values.${value.key}.desc`)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t('about.journey.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.journey.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {milestone.year}
                </div>
                {index !== milestones.length - 1 && (
                  <div className="w-1 bg-primary-200 flex-grow mt-2" />
                )}
              </div>
              <div className="card p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{milestone.event}</h3>
                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">{t('about.team.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
