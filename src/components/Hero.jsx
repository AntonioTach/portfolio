import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas, RazorCanvas } from "./canvas";
import Contact from "./Contact";

//Change the word every 5 seconds
const WordChanger = ({ words, initialWord, interval = 5000 }) => {
  const [currentWord, setCurrentWord] = useState(initialWord);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = words.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }, interval);
    return () => clearInterval(timer);
  }, [currentWord, interval, words]);

  return currentWord;
};

const Hero = () => {
  const words = ["Antonio Tach", "Human", "Developer"];
  const currentWord = <WordChanger words={words} initialWord="Antonio" />;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white font-shareTechMono`}>
            Hello!, I'm <span className="text-secondary font-shareTechMono">{currentWord}</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 text-start font-shareTechMono`}>
          I am a Full Stack Developer that loves to create dynamic solutions. My passion for developing innovative applications drives me to continually learn and apply the latest technologies to solve complex problems. 
          </p>
        </div>
      </div>

      <RazorCanvas />
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );

};

export default Hero;