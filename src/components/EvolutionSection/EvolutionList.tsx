import EvolutionCard from "./EvolutionCard";
import Typewriter from "../../assets/typewriter.svg?react";

const EvolutionList = () => {
  return (
    <div>
      <EvolutionCard img={Typewriter} year={1910} name={"Manual Typewriters"} />
    </div>
  );
};

export default EvolutionList;
