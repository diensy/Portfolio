import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrap } from "../HigherOrderComponent";
import { technologies } from "../Constants";
const Tech = () => {
  return (
    <div className="flex flex-row justify-center gap-10 flex-wrap">
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrap(Tech, "");
