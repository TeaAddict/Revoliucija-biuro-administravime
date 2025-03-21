import EvolutionCard from "./EvolutionCard";
import Typewriter from "../../assets/typewriter.svg?react";
import Telephone from "../../assets/telephone.svg?react";
import Computer from "../../assets/computer.svg?react";
import Robot from "../../assets/robot.svg?react";

const EvolutionList = () => {
  return (
    <div className="flex gap-4">
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
      <EvolutionCard img={Telephone} year={1950} name={"Telephone Systems"} />
      <EvolutionCard img={Computer} year={1990} name={"Computer Era"} />
      <EvolutionCard img={Robot} year={2025} name={"AI Integration"} />
    </div>
  );
};

export default EvolutionList;
