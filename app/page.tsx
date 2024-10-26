'use client'
import {AnimatePresence, easeInOut, motion} from 'framer-motion'
import { useState } from 'react'

const Page = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className='h-screen flex flex-col items-center'>
    <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: easeInOut }}
    >
      Hello, Sumona here!
    </motion.div>
    
    <div className='h-[40vh] w-full flex flex-col justify-center items-center mt-20'>
    <motion.button onClick={
      () => setIsVisible(!isVisible)
    } className='text-white' layout>Show/Hide</motion.button>
    <AnimatePresence mode='popLayout'>
    {isVisible && (
    <motion.div className='bg-red-500 w-44 h-44 mt-40'
    initial={{ rotate: "0deg", scale: 0 }}
    animate={{ rotate: "90deg", scale: 1 }}
    exit={{ rotate: "0deg", scale: 0 }}
    transition={{ duration: 1, ease: easeInOut}}
    >

    </motion.div>)}
    </AnimatePresence>
    </div> 
    </div>
  )
}

export default Page

