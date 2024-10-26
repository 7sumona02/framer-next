'use client'
import React from 'react'
import {easeInOut, motion, MotionConfig} from 'framer-motion'

const Gesture = () => {
  return (
    <div className='h-screen w-full flex gap-10 justify-center items-center'>
        <MotionConfig transition={{ duration: 0.125, ease: easeInOut }}>
            <motion.button className='bg-red-500 px-4 py-2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.80, rotate: "60deg" }}
            >Click</motion.button>
            <motion.button className='bg-violet-500 px-4 py-2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.80, rotate: "60deg" }}
            >Click</motion.button>
        </MotionConfig>
    </div>
  )
}

export default Gesture
