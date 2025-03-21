interface CardProps {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col text-center bg-third max-h-20 p-5 rounded-xl">
      <Img className={"w-full h-16"} />
      <p>{year}</p>
      <p>{name}</p>
    </div>
  );
};

export default EvolutionCard;
