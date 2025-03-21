interface ProgramCard {
  head: String;
  cardRows: String[];
}

const ProgramCard: React.FC<ProgramCard> = ({ head, cardRows }) => {
  return (
    <div className="p-5 bg-second rounded-md flex flex-col gap-3 lg:min-w-[60vw]">
      <h3>{head}</h3>

      <div className="w-full">
        <div className="grid grid-cols-[0.2fr_1fr] gap-y-1">
          {cardRows.map((card: String) => (
            <p>{card}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
