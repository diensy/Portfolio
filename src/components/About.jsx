import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrap  } from "../HigherOrderComponent";
// Service Card Component
const ServiceCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index,0.75)}
        className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
      >
        <div option={{max:45,scale:1,speed:450}} className="bg-tertiary rounded-[20px] px-12 py-5 min-h-[250px] flex flex-col justify-evenly items-center ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white font-bold text-16  text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", "0.1", "1")}
        className="mt-4 leading-6 max-w-3xl text-secondary text-[18px]"
      >
        Passionate and detail-oriented MERN Stack Developer with expertise in
        MongoDB, Express.js, React.js, and Node.js. Skilled in building dynamic
        and responsive web applications with a focus on clean code and efficient
        performance. Proficient in Tailwind CSS for modern UI design and
        experienced in developing RESTful APIs for seamless data management. A
        quick learner with a problem-solving mindset, always eager to explore
        new technologies and improve development workflows. Dedicated to
        creating user-friendly solutions with a strong emphasis on responsive
        design and scalability.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(About,"about");
