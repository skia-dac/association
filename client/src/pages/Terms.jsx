import { motion } from 'framer-motion'
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Terms = () => {
  const { t } = useTranslation()

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.',
    },
    {
      icon: Globe,
      title: 'Use of Website',
      content: 'You may use our website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the website or interfere with any other party\'s use of the website.',
    },
    {
      icon: CheckCircle,
      title: 'Donations',
      content: 'All donations made through our website are final and non-refundable except as required by law. Tax receipts will be provided for eligible donations. We reserve the right to refuse or return any donation.',
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, and images, is the property of CharityHope and protected by copyright and other intellectual property laws.',
    },
    {
      icon: XCircle,
      title: 'Limitation of Liability',
      content: 'CharityHope shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.',
    },
    {
      icon: AlertCircle,
      title: 'Disclaimer',
      content: 'The information on this website is provided "as is" without any warranties. We make no guarantees regarding the accuracy, completeness, or reliability of any content on the website.',
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
            <h1 className="heading-1 mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-50 dark:text-gray-300">
              Please read these terms carefully before using our website and services.
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

          {/* Additional Sections */}
          <div className="mt-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CharityHope operates, without regard to its conflict of law provisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes acceptance of those changes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about these Terms of Service, please contact us at legal@charityhope.org or call +1 (234) 567-890.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
