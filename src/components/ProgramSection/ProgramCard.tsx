interface ProgramCard {
  head?: string;
  cardRows: { time: string; description: string }[];
}

const ProgramCard: React.FC<ProgramCard> = ({ head, cardRows }) => {
  return (
    <div className="p-5 bg-fourth rounded-md flex flex-col gap-3 lg:min-w-[50rem]">
      {head && <h3 className="font-bold">{head}</h3>}

      <div className="w-full">
        {/* <div className="grid grid-cols-[auto_1fr] gap-y-5 divide-y-2">
          {cardRows.map((card, index) => (
            <p className={card.color} key={index}>
              {card.val}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProgramCard;
