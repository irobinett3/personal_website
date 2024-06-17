import React from "react";
import { SectionWrapper } from "../hoc"; // Adjust path as necessary
import BallCanvas from "./canvas/BallCanvas"; // Adjust path as necessary
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Skills = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My Skills.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          cclassName='mt-6 mb-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The balls below each represent one of my most prominent skills.
          feel free to ask the chatbot any questions you might have about
          how I've applied them!
        </motion.p>
      </div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Skills, "");