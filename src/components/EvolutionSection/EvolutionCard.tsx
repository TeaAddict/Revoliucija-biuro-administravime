interface CardProps {
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  year: number;
  name: String;
}

const EvolutionCard: React.FC<CardProps> = ({ img: Img, year, name }) => {
  return (
    <div className="flex flex-col text-center p-5 rounded-xl gap-2 bg-fourth">
      <Img className={"w-full h-12 fill-current text-[#2BD47A]"} />
      <div className="flex flex-col">
        <p className="font-[600] text-xl text-[#2BD47A]">{year}</p>
        <p className="text-[#2BD47A]">{name}</p>
      </div>
    </div>
  );
};

export default EvolutionCard;
