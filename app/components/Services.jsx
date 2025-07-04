import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.06, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }
}

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-6 md:px-[12%] py-16 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo text-primary"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-4xl md:text-5xl font-Ovo font-bold text-gray-800"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center max-w-3xl mx-auto mt-6 mb-14 font-Ovo text-gray-600 leading-relaxed"
      >
        As a passionate full-stack developer and problem solver, I bring a unique blend of competitive
        programming expertise and real-world software engineering experience to every project.
        I specialize in building robust web applications using modern stacks like React,
        Next.js, Node.js, and Express, and I’m equally comfortable working with databases such as MongoDB and MySQL.
        My enthusiasm for AI and machine learning drives me to integrate intelligent features into my solutions,
        leveraging Python and popular ML frameworks. Whether you need a dynamic website, a scalable backend, or
        a data-driven application, I’m dedicated to delivering high-quality, innovative results tailored to your needs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl px-8 py-12 shadow-sm hover:bg-gray-50 cursor-pointer flex flex-col items-center text-center transition-all duration-300"
          >
            <div className="bg-primary/10 rounded-full p-4 mb-4 flex items-center justify-center">
              <Image src={icon} alt={title} width={40} height={40} />
            </div>
            <h3 className="text-xl font-semibold my-2 text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 leading-6 mb-6">{description}</p>
            <a
              href={link} target='_blank'
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition"
            >
              Read more
              <Image src={assets.right_arrow} alt="" width={16} height={16} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Services
