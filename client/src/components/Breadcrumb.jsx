import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Breadcrumb = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbNames = {
    'about': t('nav.about'),
    'projects': t('nav.projects'),
    'support': t('nav.support'),
    'contact': t('nav.contact'),
    'privacy': t('footer.privacy'),
    'terms': t('footer.terms'),
  }

  if (pathnames.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 dark:bg-gray-800 py-4 transition-colors duration-200">
      <div className="section-container">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const displayName = breadcrumbNames[name] || name.charAt(0).toUpperCase() + name.slice(1)

            return (
              <li key={name} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
                {isLast ? (
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
