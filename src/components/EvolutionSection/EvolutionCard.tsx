interface CardProps {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col text-center p-5 rounded-xl gap-2 bg-second">
      <Img className={"w-full h-12 fill-current text-first"} />
      <div className="flex flex-col">
        <p className="font-[600] text-xl">{year}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default EvolutionCard;
