import EvolutionList from "./EvolutionList";

const EvolutionSection = () => {
  return (
    <div className="bg-first py-10 pt-15 px-5 lg:px-10 flex flex-col items-center gap-5">
      <h2 className="text-head">Evolution of Office Administration</h2>
      <EvolutionList />
    </div>
  );
};

export default EvolutionSection;
