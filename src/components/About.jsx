import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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