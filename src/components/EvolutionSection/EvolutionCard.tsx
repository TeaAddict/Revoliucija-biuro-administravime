interface CardProps {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col text-center p-5 rounded-xl gap-2 bg-fourth shadow-lg">
      <Img className={"w-full h-10 fill-current text-second"} />
      <div className="flex flex-col">
        <p className="font-[600] text-xl text-second">{year}</p>
        <p className="text-second">{name}</p>
      </div>
    </div>
  );
};

export default EvolutionCard;
