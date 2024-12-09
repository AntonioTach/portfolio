import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flew-row flex-wrap justify-center gap-28'>
      {technologies.map((tech, indes) => (
        <div className='w-32 h-32' key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");