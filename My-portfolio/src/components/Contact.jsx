import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ContactMethod = ({ icon, title, value, href, isLink = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 p-4 backdrop-blur-sm rounded-xl"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
        }}
      >
        <i className={`${icon} text-white`}></i>
      </div>
      <div>
        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h4>
        {isLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--accent-primary)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            {value}
          </a>
        ) : (
          <a
            href={href}
            className="transition-colors duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--accent-primary)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            {value}
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 backdrop-blur-sm" style={{
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
          Get In <span style={{ color: 'var(--accent-primary)' }}>Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Contact Information
            </h3>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              Feel free to reach out through these channels:
            </p>

            <div className="space-y-4">
              <ContactMethod
                icon="fas fa-envelope"
                title="Email"
                value="biniyamagegnehu2@gmail.com"
                href="mailto:biniyamagegnehu2@gmail.com"
              />
              <ContactMethod
                icon="fas fa-phone-alt"
                title="Phone"
                value="+251919413008"
                href="tel:+251919413008"
              />
              <ContactMethod
                icon="fab fa-linkedin"
                title="LinkedIn"
                value="linkedin.com/in/biniyamagegnehu"
                href="https://www.linkedin.com/in/biniyamagegnehu/"
                isLink={true}
              />
              <ContactMethod
                icon="fab fa-github"
                title="GitHub"
                value="github.com/biniyamagegnehu"
                href="https://github.com/biniyamagegnehu"
                isLink={true}
              />
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 rounded-xl backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Availability
              </h4>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm currently available for:
              </p>
              <ul className="space-y-2">
                {[
                  "Freelance projects",
                  "Remote full-time/part-time opportunities",
                  "Internship opportunities",
                  "Technical collaborations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3" style={{ color: 'var(--text-secondary)' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--accent-tertiary)' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Enter your message"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-white py-4 px-8 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact