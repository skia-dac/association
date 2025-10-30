import { motion } from 'framer-motion'
import { Shield, Mail, Lock, Eye, Database, UserCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Privacy = () => {
  const { t } = useTranslation()

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, including name, email address, phone number, and donation history. We also automatically collect certain information about your device when you use our website.',
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to process donations, send receipts, provide updates about our projects, respond to your inquiries, and improve our services.',
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our charitable activities.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information. All payment information is encrypted and processed securely through our payment processors.',
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also opt out of receiving communications from us at any time.',
    },
    {
      icon: Mail,
      title: 'Contact Us',
      content: 'If you have questions about this Privacy Policy, please contact us at privacy@charityhope.org or call +1 (234) 567-890.',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-gray-900 text-white py-20 transition-colors duration-300">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="heading-1 mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-50 dark:text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-primary-100 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Cookies and Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Changes to This Policy
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
