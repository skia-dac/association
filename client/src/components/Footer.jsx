import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerLinks = {
    [t('footer.quickLinks')]: [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.about'), path: '/about' },
      { name: t('nav.projects'), path: '/projects' },
      { name: t('nav.support'), path: '/support' },
    ],
    [t('footer.getInvolved')]: [
      { name: t('footer.volunteer'), path: '/support' },
      { name: t('footer.donate'), path: '/support' },
      { name: t('footer.partner'), path: '/contact' },
      { name: t('nav.contact'), path: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 transition-colors duration-200">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white dark:text-gray-100">
                Charity<span className="text-primary-400 dark:text-primary-300">Hope</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
              {t('footer.tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 dark:bg-gray-900 p-2 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white dark:text-gray-100 font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold text-lg mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Charity Street, Hope City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@charityhope.org" className="text-sm hover:text-primary-400 transition-colors">
                  info@charityhope.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {currentYear} CharityHope. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-primary-400 dark:hover:text-primary-300 transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
