import EvolutionCard from "./EvolutionCard";
import Typewriter from "../../assets/typewriter.svg?react";

const EvolutionList = () => {
  return (
    <div className="flex gap-4">
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
    </div>
  );
};

export default EvolutionList;
