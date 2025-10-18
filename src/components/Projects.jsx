import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ProjectCard = ({ project, index }) => {
  const animationProps = useScrollAnimation()

  return (
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
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--accent-secondary)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'var(--accent-primary)';
            }}
          >
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300"
            style={{
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--accent-primary)';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--accent-primary)';
            }}
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20" style={{
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
          My <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/biniyamagegnehu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
            }}
          >
            <span>View All Projects</span>
            <i className="fab fa-github"></i>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects