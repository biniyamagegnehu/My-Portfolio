import React from 'react'
import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/biniyamagegnehu', icon: 'fab fa-github' },
    { name: 'Instagram', url: 'https://www.instagram.com/biniyamagegnehu', icon: 'fab fa-instagram' },
    { name: 'Telegram', url: 'https://t.me/@Bbini19', icon: 'fab fa-telegram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/biniyamagegnehu/', icon: 'fab fa-linkedin' }
  ]

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--bg-primary) 100%)'
    }}>
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h3
                className="text-lg md:text-xl mb-4 font-semibold"
                style={{ color: 'var(--accent-primary)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.h3>
              
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Biniyam <span style={{ color: 'var(--accent-primary)' }}>Agegnehu</span>
              </motion.h1>
              
              <motion.h2
                className="text-2xl md:text-3xl mb-6 font-semibold"
                style={{ color: 'var(--accent-secondary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Frontend Developer
              </motion.h2>
              
              <motion.p
                className="text-lg mb-8 max-w-2xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Creating beautiful, responsive websites with modern technologies and cutting-edge 3D animations.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    style={{ 
                      backgroundColor: 'var(--accent-primary)',
                      color: 'white'
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.1,
                      backgroundColor: 'var(--accent-secondary)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white'
                }}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'var(--accent-secondary)'
                }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Image/3D Model */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <motion.img
                  src="/images/portfolio-image.png"
                  alt="Biniyam Agegnehu"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{ border: '4px solid var(--accent-primary)' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
                  style={{ backgroundColor: 'var(--accent-tertiary)' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full"
                  style={{ backgroundColor: 'var(--accent-secondary)' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div 
          className="w-6 h-10 rounded-full flex justify-center"
          style={{ border: '2px solid var(--accent-primary)' }}
        >
          <motion.div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: 'var(--accent-primary)' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero