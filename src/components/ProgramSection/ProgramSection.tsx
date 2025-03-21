import ProgramCard from "./ProgramCard";

const cardRows = [
  "10:30-11:30",
  "Registration",
  "10:30-11:30",
  "Opening Ceremony",
  "10:30-11:30",
  "Introduction to Office Administration Evolution",
  "10:30-11:30",
  "Description long and interesting",
];

const cardRows2 = [
  "10:30-11:30",
  "Registration",
  "10:30-11:30",
  "Opening Ceremony",
  "10:30-11:30",
  "Introduction to Office Administration Evolution",
  "10:30-11:30",
  "Description long and interesting",
];

const ProgramSection = () => {
  return (
    <div className="flex flex-col justify-center w-full p-12 bg-red-500">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-head">Program Schedule</h2>
        <ProgramCard head={"Morning Session"} cardRows={cardRows} />
        <ProgramCard head={"Afternoon Session"} cardRows={cardRows2} />
      </div>
    </div>
  );
};

export default ProgramSection;
