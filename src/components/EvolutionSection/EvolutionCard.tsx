interface CardProps {
  img: React.ComponentClass;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col bg-third max-h-20">
      <Img className={"max-h-16 w-full"} />
      <p>{year}</p>
      <p>{name}</p>
    </div>
  );
};

export default EvolutionCard;
