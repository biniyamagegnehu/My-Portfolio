import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-[#3B82F6]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        initial={false}
        animate={{ 
          x: isDark ? 24 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
      >
        {isDark ? (
          <span className="text-[#FBBF24] text-sm">🌙</span>
        ) : (
          <span className="text-[#F59E0B] text-sm">☀️</span>
        )}
      </motion.div>
      
      {/* Visual indicator of current state */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 text-xs">
        <span className="text-[#F59E0B]">☀️</span>
        <span className="text-[#FBBF24]">🌙</span>
      </div>
    </motion.button>
  )
}

export default ThemeToggle