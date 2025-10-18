import React from 'react'
import { ThemeProvider, useTheme } from './hooks/useTheme'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Debug component to show current theme state
const ThemeDebug = () => {
  const { isDark } = useTheme()
  
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white px-3 py-1 rounded text-sm">
        Theme: {isDark ? 'Dark' : 'Light'}
      </div>
    )
  }
  
  return null
}

function AppContent() {
  const { isDark } = useTheme()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark-theme' : 'light-theme'
    }`}>
      <ThemeDebug />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App