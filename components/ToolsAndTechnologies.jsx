'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { toolsData } from '@/assets/assets'
import { Tooltip } from 'antd'

const ToolsAndTechnologies = () => {
  return (
    <motion.div 
      className='w-full px-[12%] py-16 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='tools'
    >
      <motion.h2 
        className='text-center text-4xl font-Ovo mb-10'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools & Technologies
      </motion.h2>

      <motion.div 
        className='flex flex-wrap gap-6 justify-center items-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='w-14 h-14 sm:w-16 sm:h-16 border border-gray-400 dark:border-white rounded-xl flex items-center justify-center hover:-translate-y-1 duration-300 cursor-pointer bg-white dark:bg-darkHover/30 shadow-md dark:shadow-white/10'
            aria-label={tool.label}
          >
            <Tooltip  title={tool.label} position="top" arrow={false}>
              <Image 
                src={tool.icon} 
                alt={tool.label} 
                width={32} 
                height={32} 
                className='object-contain'
              />
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default ToolsAndTechnologies
