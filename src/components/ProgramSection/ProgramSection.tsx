import ProgramCard from "./ProgramCard";

const cardRows = [
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Registration", color: "text-second" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Opening Ceremony", color: "text-second" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  {
    val: "Introduction to Office Administration Evolution",
    color: "text-second",
  },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Description long and interesting", color: "text-second" },
];

const cardRows2 = [
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Registration", color: "text-second" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Opening Ceremony", color: "text-second" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  {
    val: "Introduction to Office Administration Evolution",
    color: "text-second",
  },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Description long and interesting", color: "text-second" },
];

const ProgramSection = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-second text-sixth py-10 lg:py-0">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-head font-bold">Program Schedule</h2>
        <ProgramCard head={"Morning Session"} cardRows={cardRows} />
        <ProgramCard head={"Afternoon Session"} cardRows={cardRows2} />
      </div>
    </div>
  );
};

export default ProgramSection;
