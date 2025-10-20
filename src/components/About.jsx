import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const animationProps = useScrollAnimation()

  return (
    <section id="about" className="py-20 backdrop-blur-sm" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span style={{ color: 'var(--accent-primary)' }}>Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <img
                src="/images/portfolio.png"
                alt="About Me"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ border: '4px solid var(--accent-primary)' }}
              />
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: 'var(--accent-secondary)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            {...animationProps}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>
              Fullstack Developer
            </h3>
            
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I'm Biniyam Agegnehu, a dedicated Full-Stack Developer with a passion for building seamless and efficient web applications.
            </p>
            
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
             My mission: To build web solutions that are not only technically strong but also delightful to use.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['React', 'JavaScript', 'Tailwind', 'Node.js','Express js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 rounded-full font-semibold"
                  style={{ 
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About