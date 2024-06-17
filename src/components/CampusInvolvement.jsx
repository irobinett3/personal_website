import React from 'react';
import { campus_involvement } from '../constants'; // Adjust the path based on your actual file structure
import { styles } from '../styles'; // Import styles object from styles.js
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const CampusInvolvement = () => {
  return (
    <div className={`flex flex-col gap-8 items-center ${styles.padding}`}>
      <div className='w-full flex'>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className='text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'
        >
          How I work with others
        </motion.p>
      </div>
      <h1 className={`${styles.sectionHeadText}`}>Campus Involvement.</h1>
      {campus_involvement.map((experience, index) => (
        <div key={index} className="max-w-4xl mx-auto p-4 border border-gray-200 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src={experience.image} alt={experience.name} className="rounded-lg" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">{experience.name}</h2>
              <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-sm font-semibold ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={experience.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampusInvolvement;