import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SkillCard = ({ skill, index }) => {
  const animationProps = useScrollAnimation()

  return (
    <motion.div
      {...animationProps}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)'
      }}
    >
      <div className="flex items-center space-x-4 mb-4">
        {skill.icon === 'custom' ? (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
            }}
          >
            <img 
              src={skill.image} 
              alt={skill.name}
              className="w-6 h-6 object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
            }}
          >
            <i className={`${skill.icon} text-white text-xl`}></i>
          </div>
        )}
        <div>
          <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {skill.name}
          </h4>
          <div className="w-16 h-2 rounded-full overflow-hidden mt-2" style={{ backgroundColor: 'var(--border-color)' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))'
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {skill.description}
      </p>
    </motion.div>
  )
}

const SkillsCategory = ({ title, icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
          }}
        >
          <i className={`${icon} text-white`}></i>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 backdrop-blur-sm" style={{
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
          My <span style={{ color: 'var(--accent-primary)' }}>Skills</span>
        </motion.h2>

        <SkillsCategory
          title="Programming Languages"
          icon="fas fa-file-code"
          skills={skills.programming}
          delay={0.2}
        />

        <SkillsCategory
          title="Web Development"
          icon="fas fa-laptop-code"
          skills={skills.web}
          delay={0.4}
        />

        <SkillsCategory
          title="Tools, Platforms and Databases"
          icon="fas fa-toolbox"
          skills={skills.tools}
          delay={0.6}
        />
      </div>
    </section>
  )
}

export default Skills