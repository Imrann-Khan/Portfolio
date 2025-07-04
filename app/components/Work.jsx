import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-lime-700"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo font-bold text-gray-900"
      >
        Recent Projects & Highlights
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-6 mb-14 font-Ovo text-gray-700 text-lg"
      >
        Here’s a glimpse into some of my favorite work—ranging from web apps and mobile experiences to AI-powered robotics. I love building things that make a difference and am always exploring new ideas and technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden relative cursor-pointer group shadow-md"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white/90 backdrop-blur-md w-11/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between gap-4 duration-500 group-hover:bottom-7 shadow-lg">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.description}</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full border-lime-500 w-10 aspect-square flex items-center justify-center shadow group-hover:bg-lime-200 transition"
                aria-label={`Visit ${project.title}`}
              >
                <Image src={assets.send_icon} alt="Open project" className="w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="https://github.com/Imrann-Khan?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lime-50 hover:border-lime-400 transition font-medium shadow"
      >
        See more on GitHub
        <Image src={assets.right_arrow_bold} alt="Right Arrow" className="w-4" />
      </motion.a>
    </motion.section>
  )
}

export default Work
