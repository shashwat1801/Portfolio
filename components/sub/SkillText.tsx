'use client'

import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
             <motion.div
        variants={slideInFromTop}
        className = "Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]">

        <SparklesIcon className = "text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className = "Welcome-text text-[13px] ">
            
                   Better with Next.js
            
            </h1>
        </motion.div>
        <motion.div 
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
                Development with Modern Technologies

        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >

            Make ideas more functional 




        </motion.div>

    </div>
  )
}

export default SkillText