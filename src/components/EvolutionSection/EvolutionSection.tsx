import EvolutionList from "./EvolutionList";

const EvolutionSection = () => {
  return (
    <div className="bg-third py-10 pt-15 px-5 lg:px-10 flex flex-col items-center gap-5">
      <h2 className="text-head text-sixth font-bold">
        Evolution of Office Administration
      </h2>
      <EvolutionList />
    </div>
  );
};

export default EvolutionSection;
