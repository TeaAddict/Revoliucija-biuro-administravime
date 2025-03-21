interface CardProps {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col text-center bg-third p-5 rounded-xl">
      <Img className={"w-full h-16 fill-current text-black"} />
      <p>{year}</p>
      <p>{name}</p>
    </div>
  );
};

export default EvolutionCard;
