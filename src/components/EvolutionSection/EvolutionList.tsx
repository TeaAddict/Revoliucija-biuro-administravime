import EvolutionCard from "./EvolutionCard";
import Typewriter from "../../assets/typewriter.svg?react";
import Telephone from "../../assets/telephone.svg?react";
import Computer from "../../assets/computer.svg?react";
import Robot from "../../assets/robot.svg?react";

const EvolutionList = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-5 py-5 px-5">
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
      <EvolutionCard img={Telephone} year={1950} name={"Telephone Systems"} />
      <EvolutionCard img={Computer} year={1990} name={"Computer Era"} />
      <EvolutionCard img={Robot} year={2025} name={"AI Integration"} />
    </div>
  );
};

export default EvolutionList;
