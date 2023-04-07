import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas, RazorCanvas } from "./canvas";

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
  const words = ["Antonio", "Human", "Developer"];
  const currentWord = <WordChanger words={words} initialWord="Antonio" />;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* vertical line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-600" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello!, I'm <span className="text-secondary">{currentWord}</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 text-start`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus ipsum in urna vestibulum lobortis. Ut sed tortor ut lacus ultrices sodales a eget nisl. Donec hendrerit ac lacus eu blandit. Ut rutrum nulla eu volutpat aliquam. Pellentesque accumsan nec odio non condimentum. Ut ac risus ex. In viverra sed arcu eget consequat. 
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