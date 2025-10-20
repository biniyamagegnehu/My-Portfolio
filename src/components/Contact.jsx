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
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear any previous submission status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      // Netlify forms work by submitting to the current URL
      // The form-name attribute is crucial for Netlify to identify the form
      const form = e.target
      
      // Create FormData object for submission
      const formDataToSend = new FormData(form)
      
      // Netlify requires the form-name field
      formDataToSend.append('form-name', 'contact')
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset form after successful submission
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
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
            {/* Netlify Form Submission Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg border"
                style={{
                  backgroundColor: 'var(--accent-tertiary)',
                  borderColor: 'var(--accent-tertiary)',
                  color: 'white'
                }}
              >
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle"></i>
                  <span className="font-semibold">{submitMessage}</span>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg border"
                style={{
                  backgroundColor: '#FECACA',
                  borderColor: '#F87171',
                  color: '#DC2626'
                }}
              >
                <div className="flex items-center space-x-2">
                  <i className="fas fa-exclamation-circle"></i>
                  <span className="font-semibold">{submitMessage}</span>
                </div>
              </motion.div>
            )}

            {/* 
              NETLIFY FORM SETUP:
              - form-name="contact" is REQUIRED for Netlify to recognize the form
              - data-netlify="true" enables Netlify form handling
              - netlify-honeypot adds spam protection
              - action points to current page (Netlify will handle the rest)
            */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields required by Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
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
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
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
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
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
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
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
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full text-white py-4 px-8 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              {/* Form submission note */}
              <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact