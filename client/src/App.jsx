import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Breadcrumb from './components/Breadcrumb'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Support from './pages/Support'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <Breadcrumb />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
