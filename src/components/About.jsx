import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[280px] transform transition-transform hover:scale-110"
    options={{
      max: 35,
      scale: 1.1,
      speed: 500,
    }}
  >
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.3,
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
      className="relative bg-gradient-to-r from-purple-700 to-indigo-900 p-[3px] rounded-3xl shadow-2xl"
    >
      {/* Outer glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-xl rounded-3xl"></div>
      
      <div className="relative bg-gray-900 rounded-3xl p-6 flex flex-col items-center justify-center h-[300px]">
        <div className="relative">
          <img
            src={icon}
            alt={`${title}-icon`}
            className="w-20 h-20 object-contain"
          />
          {/* Pulsating ring effect */}
          <div className="absolute inset-0 w-full h-full rounded-full border-[3px] border-dashed border-indigo-400 opacity-50 animate-pulse"></div>
        </div>
        <h3 className="text-white text-xl font-bold text-center mt-4 tracking-wide">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        My name is <span className="text-white">Antonio Viña Hernandez</span> but people call me <span className="text-white">Tach</span>. I am a <span className="text-white">FullStack developer</span> specialized in web and mobile technologies, with a strong passion for creating high-quality projects using clean and efficient code, using <span className="text-white">Angular</span> & <span className="text-white">React</span> for front-end,
        with <span className="text-white">NEXT</span> for server-side rendering and static site generation and <span className="text-white">Ionic</span> & <span className="text-white">React Native</span> for mobile. I also worked with back-end, creating APIs in <span className="text-white">Node.js</span>, <span className="text-white">Express</span> & <span className="text-white">NestJS</span>.
        With a solid track record in the industry, I have successfully contributed to both <span className="text-white">Front-end</span> and <span className="text-white">Back-end </span>development across various companies. Additionally, I have experience working with cloud services, utilizing <span className="text-white">Amazon Web Services (AWS)</span>  and <span className="text-white">Azure</span>.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')