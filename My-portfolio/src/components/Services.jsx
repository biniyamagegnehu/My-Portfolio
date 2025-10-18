import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ServiceCard = ({ service, index }) => {
  const animationProps = useScrollAnimation()

  return (
    <motion.div
      {...animationProps}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
        }}
      >
        <i className={`${service.icon} text-white text-2xl`}></i>
      </div>
      
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {service.title}
      </h3>
      
      <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {service.description}
      </p>
      
      <div className="space-y-2">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-tertiary)' }}></div>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-20" style={{
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
          My <span style={{ color: 'var(--accent-primary)' }}>Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services