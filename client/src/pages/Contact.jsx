import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    // Simulate API call (replace with actual API when ready)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock success response
      toast.success(t('contact.form.successMessage'))
      reset()
    } catch (error) {
      toast.error(t('contact.form.errorMessage'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Charity Street', 'Hope City, HC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (234) 567-890', '+1 (234) 567-891', 'Mon-Fri: 9AM-5PM EST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@charityhope.org', 'support@charityhope.org', 'We reply within 24h'],
    },
  ]

  const faqs = [
    {
      question: 'How can I donate?',
      answer: 'Visit our Support page to make a one-time or recurring donation through various payment methods.',
    },
    {
      question: 'Are donations tax-deductible?',
      answer: 'Yes! We are a registered 501(c)(3) organization. You will receive a receipt for tax purposes.',
    },
    {
      question: 'How can I volunteer?',
      answer: 'Fill out the contact form indicating your interest in volunteering, and our team will reach out to you.',
    },
    {
      question: 'Can I sponsor a specific project?',
      answer: 'Absolutely! Contact us to learn about current projects that need funding and how you can help.',
    },
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
            <h1 className="heading-1 mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-container py-12 -mt-16 relative z-10 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-container section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-3 mb-6">{t('contact.form.title')}</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.nameLabel')}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: t('contact.form.nameRequired') })}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('contact.form.namePlaceholder')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.emailLabel')}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: t('contact.form.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.form.emailInvalid'),
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.phoneLabel')}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 outline-none transition-colors"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.subjectLabel')}
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: t('contact.form.subjectRequired') })}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 outline-none transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.messageLabel')}
                </label>
                <textarea
                  id="message"
                  rows="6"
                  {...register('message', { required: t('contact.form.messageRequired') })}
                  className={`w-full px-4 py-3 border rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 dark:bg-primary-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.sendButton')}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="card overflow-hidden h-80">
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600">Map Integration</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t('contact.officeHours.title')}</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">{t('contact.faq.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
