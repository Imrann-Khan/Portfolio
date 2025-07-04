'use client'

import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-6 md:px-[12%] py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-500 tracking-widest uppercase"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo font-bold text-gray-800 mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-16 md:gap-20 my-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-64 md:w-80 rounded-3xl shadow-xl overflow-hidden border-4 border-gray-200 bg-white"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-full object-cover rounded-3xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-justify text-gray-700 text-base md:text-lg leading-relaxed">
            Ambitious and results-oriented Computer Science graduate with hands-on experience as a full-stack developer using various stacks. Proven ability to design, develop, and deploy feature-rich applications, demonstrated through personal and academic projects. Eager to apply strong problem-solving skills, honed through competitive programming achievements, to a challenging Software Engineer role in the software industry.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="border border-gray-200 bg-white rounded-xl p-6 cursor-pointer hover:bg-gray-50 hover:-translate-y-1 duration-300 shadow-sm"
                key={index}
              >
                <Image src={icon} alt={title} className="w-8 h-8 mb-4" />
                <h3 className="mb-2 font-semibold text-gray-700 text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            whileHover={{ scale: 1.05 }}
            className="my-8 text-gray-700 font-Ovo text-xl font-semibold"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-200 bg-white rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md duration-300"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About
