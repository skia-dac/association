import { Heart, CreditCard, Building, Smartphone, Users, Briefcase, Gift, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Support = () => {
  const { t } = useTranslation()
  const donationAmounts = [
    { amount: 25, impact: 'Provide school supplies for 5 children' },
    { amount: 50, impact: 'Supply clean water for a family for 1 month' },
    { amount: 100, impact: 'Medical care for 10 patients' },
    { amount: 250, impact: 'Full scholarship for 1 student for a semester' },
  ]

  const paymentMethods = [
    { icon: CreditCard, name: 'Credit/Debit Card', description: 'Secure online payment' },
    { icon: Building, name: 'Bank Transfer', description: 'Direct bank deposit' },
    { icon: Smartphone, name: 'Mobile Money', description: 'M-Pesa, PayPal, etc.' },
    { icon: Gift, name: 'Recurring Donation', description: 'Monthly support' },
  ]

  const volunteerOpportunities = [
    {
      icon: Users,
      title: 'Field Volunteer',
      description: 'Work directly with communities on project implementation and support.',
      commitment: '3-6 months',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Share your expertise in areas like legal, finance, marketing, or IT.',
      commitment: 'Flexible',
    },
    {
      icon: Heart,
      title: 'Event Support',
      description: 'Help organize and run fundraising events and community activities.',
      commitment: '1-2 days/event',
    },
  ]

  const impactStats = [
    { value: '$2.5M+', label: 'Total Donations Received' },
    { value: '95%', label: 'Goes Directly to Programs' },
    { value: '15,000+', label: 'Active Monthly Donors' },
    { value: '4.8/5', label: 'Charity Rating' },
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
            <h1 className="heading-1 mb-6">{t('support.title')}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {t('support.subtitle')}
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>{t('support.taxDeductible')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-container py-12 -mt-16 relative z-10 bg-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t('support.donate.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('support.donate.subtitle')}
            </p>
          </div>

          {/* Donation Amounts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {donationAmounts.map((donation, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  ${donation.amount}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {donation.impact}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="card p-8">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">{t('support.donate.customAmount')}</h3>
            <div className="flex gap-4 items-center max-w-md mx-auto">
              <div className="relative flex-grow">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-lg">$</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:border-primary-600 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 outline-none text-lg"
                />
              </div>
              <button className="btn-primary whitespace-nowrap">
                {t('support.donate.button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t('support.payment.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('support.payment.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{method.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">{t('support.volunteer.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('support.volunteer.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {volunteerOpportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-secondary-100 dark:bg-secondary-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{opportunity.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{opportunity.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{t('support.volunteer.commitment')}:</span>
                  <span className="ml-2">{opportunity.commitment}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            <Users className="w-5 h-5 mr-2" />
            {t('support.volunteer.applyButton')}
          </a>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-gray-900 text-white section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h2 className="heading-2 text-white mb-6">{t('support.corporate.title')}</h2>
            <p className="text-xl text-primary-50 dark:text-gray-300 mb-8">
              {t('support.corporate.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-colors shadow-lg"
              >
                {t('support.corporate.partnerButton')}
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 dark:hover:bg-white/20 transition-colors"
              >
                {t('support.corporate.projectsButton')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
