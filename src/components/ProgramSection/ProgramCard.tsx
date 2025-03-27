interface ProgramCard {
  head?: string;
  cardRows: { time: string; description: string }[];
}

const ProgramCard: React.FC<ProgramCard> = ({ head, cardRows }) => {
  return (
    // <div className="p-5 bg-fourth rounded-md flex flex-col gap-3 lg:min-w-[50rem]">
    <div className="p-3 lg:p-5 bg-fourth rounded-md flex flex-col gap-3">
      {head && (
        <h3 className="font-bold text-xl text-second self-center">{head}</h3>
      )}

      <table className="w-full">
        <tbody>
          {cardRows.map((item, index) => (
            // <tr key={index} className="border border-gray-300">
            <tr key={index} className="border-b border-second last:border-b-0">
              <td className="py-1 lg:p-2 w-[7rem] lg:text-center text-second font-semibold">
                {item.time}
              </td>
              <td className="py-1 lg:p-2 text-sixth whitespace-pre-line">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramCard;
