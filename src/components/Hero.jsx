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


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
  <a href="#about">
    <div className="relative w-[35px] h-[64px] flex justify-center items-center">
      <div className="absolute w-16 h-16 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-secondary text-2xl transform rotate-90 drop-shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </motion.div>
    </div>
  </a>
</div>



    </section>
  );

};

export default Hero;