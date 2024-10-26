'use client'
import { useScroll, motion, useSpring, useTransform } from "framer-motion"

const Scroll = () => {
  const {scrollYProgress} = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(scrollYProgress, 
    [0, 1],
    ["#bef264", "#f472b6"]
  )

  return (
    <>
    <motion.div className="bg-blue-700 w-full sticky top-0 h-3" style={{ transformOrigin: "left", scaleX, background }} />
    <div className='h-screen w-full flex flex-col gap-10 text-xl text-red-600 p-20 items-center'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate impedit, error recusandae necessitatibus sapiente optio ab temporibus reprehenderit. Quaerat doloribus sunt nostrum quo similique dolorem necessitatibus amet quibusdam commodi!</p>
    </div>
    </>
  )
}

export default Scroll
