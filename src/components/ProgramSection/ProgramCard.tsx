interface ProgramCard {
  head: string;
  cardRows: { val: string; color: string }[];
}

const ProgramCard: React.FC<ProgramCard> = ({ head, cardRows }) => {
  return (
    <div className="p-5 bg-fourth rounded-md flex flex-col gap-3 lg:min-w-[60vw]">
      <h3 className="font-bold">{head}</h3>

      <div className="w-full">
        <div className="grid grid-cols-[0.2fr_1fr] gap-y-1">
          {cardRows.map((card) => (
            <p className={card.color}>{card.val}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
