import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { externalLink } from '../assets'
import { SectionWrapper } from '../hoc'
import { iconEnum, projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Icon } from '@iconify/react';

const ProjectCard = ({ index, name, description, tags, image, source_code }) => {
  try {
    return (
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {source_code.map((source) => (
              <div key={`${source.source_code_link}`} onClick={() => window.open(source.source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1' >
                <img
                  src={source.icon == iconEnum.GITHUB ? github : externalLink}
                  alt={source.icon == iconEnum.GITHUB ? "github" : "external link"}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Icon key={`tag-${tag.name}-${index}`} icon={tag.name} width="40" height="40" className="transition-transform duration-200 hover:scale-110" />
          ))}
        </div>
      </Tilt>
    )
  } catch (error) {
    console.error("Error rendering ProjectCard:", error);
    return <div>Error loading project</div>;
  }

}

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText}>My projects</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Here are some of the projects I have worked on.
          Each project has a link to the GitHub repository or a link to their webpage. It reflects my skills and knowledge in web development to solve real-world problems, working with different technologies and tools to make projects more efficient and user-friendly.
        </p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


    </>
  )
}

export default SectionWrapper(Works, 'projects')