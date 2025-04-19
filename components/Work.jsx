'use client'
import { workData } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Work = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? workData : workData.slice(0, 4)

  return (
    <motion.div
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading Section */}
      <motion.h4
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My portfolio
      </motion.h4>

      <motion.h2
        className='text-center text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in Full-stack development.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'
      >
        {visibleProjects.map(({   title, description }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className='bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:dark:shadow-white/10'
            key={index}
          >
            
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{title}</h3>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>{description}</p>
          </motion.li>
        ))}
      </motion.ul>

      {workData.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default Work
