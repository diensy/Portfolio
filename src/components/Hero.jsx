import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import Computers from "../components/canvas/Computers";
import laptop from "../assets/laptop1.jpg";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dinesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build responsive and interactive web interfaces.
          </p>
        </div>
      </div>

      {!isMobile ? (
        <Computers />
      ) : (
        <img
          src={laptop}
          alt="3D Computer"
          className="w-full h-full object-contain"
          style={{ margin: "auto", width: "300px" }}
        />
      )}

      <div className="absolute flex justify-center items-center xs:bottom-[-10px] bottom-32 w-full">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
