import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import FuturisticBackground from './FuturisticBackground'

const Hero = () => {
  const { isDark } = useTheme()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/biniyamagegnehu', icon: 'fab fa-github' },
    { name: 'Instagram', url: 'https://www.instagram.com/biniyamagegnehu', icon: 'fab fa-instagram' },
    { name: 'Telegram', url: 'https://t.me/@Bbini19', icon: 'fab fa-telegram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/biniyamagegnehu/', icon: 'fab fa-linkedin' }
  ]

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center py-10">
      {/* Futuristic Background */}
      <FuturisticBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Text Section */}
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Greeting */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mt-15
              " />
              <span 
                className="text-xl font-medium tracking-wider uppercase pt-15"
                style={{ color: 'var(--accent-primary)' }}
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Main Name */}
            <div className="space-y-2">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Biniyam
              </motion.h1>
              
              <motion.h1
                variants={scaleIn}
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Agegnehu
              </motion.h1>
            </div>

            {/* Title */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="w-1 h-8 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }} />
              <h2 
                className="text-lg sm:text-xl font-semibold"
                style={{ color: 'var(--accent-secondary)' }}
              >
                Frontend Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              className="max-w-md mx-auto lg:mx-0"
            >
              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I create <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>modern web experiences</span> 
                {" "}and <span style={{ color: 'var(--accent-secondary)', fontWeight: '500' }}>responsive solutions</span> 
                {" "}using cutting-edge technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg font-semibold text-sm sm:text-base relative overflow-hidden group"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
              
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold text-sm sm:text-base border text-center"
                style={{ 
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'var(--accent-primary)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i 
                    className={`${social.icon} text-sm`}
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
              
              {/* Outer Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-lg opacity-30"
                style={{ backgroundColor: 'var(--accent-primary)' }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Main Image */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2"
                style={{ 
                  borderColor: 'var(--accent-primary)',
                  backgroundColor: 'var(--bg-secondary)'
                }}
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src="/images/portfolio-image.png"
                  alt="Biniyam Agegnehu"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ backgroundColor: 'var(--accent-tertiary)' }}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                style={{ backgroundColor: 'var(--accent-secondary)' }}
                animate={{ 
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                🚀
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-56 backdrop-blur-sm rounded-xl p-3 border"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>2+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Years</div>
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent-secondary)' }}>15+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: 'var(--accent-tertiary)' }}>10+</div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Skills</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Scroll down
          </span>
          <div 
            className="w-4 h-6 rounded-full flex justify-center border"
            style={{ borderColor: 'var(--accent-primary)' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full mt-1"
              style={{ backgroundColor: 'var(--accent-primary)' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero