import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CertificateCard = ({ certificate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const animationProps = useScrollAnimation()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <motion.div
        {...animationProps}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)'
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          />
          <div 
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={openModal}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <i className="fas fa-search-plus text-white text-xl"></i>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {certificate.title}
          </h3>
          
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {certificate.description}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 font-semibold" style={{ color: 'var(--accent-secondary)' }}>
              <i className="fas fa-calendar-alt"></i>
              <span>{certificate.date}</span>
            </div>
            
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-300"
              style={{ color: 'var(--accent-primary)' }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--accent-secondary)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--accent-primary)';
              }}
            >
              View Details
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-2xl transition-colors duration-300"
              style={{ color: 'white' }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--accent-secondary)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'white';
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {certificate.title}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 backdrop-blur-sm" style={{
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
          My <span style={{ color: 'var(--accent-primary)' }}>Certificates</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates