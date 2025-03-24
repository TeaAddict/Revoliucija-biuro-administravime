import ProgramCard from "./ProgramCard";

const cardRows = [
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Registration", color: "text-black" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Opening Ceremony", color: "text-black" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  {
    val: "Introduction to Office Administration Evolution",
    color: "text-black",
  },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Description long and interesting", color: "text-black" },
];

const cardRows2 = [
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Registration", color: "text-black" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Opening Ceremony", color: "text-black" },
  { val: "10:30-11:30", color: "text-second font-bold" },
  {
    val: "Introduction to Office Administration Evolution",
    color: "text-black",
  },
  { val: "10:30-11:30", color: "text-second font-bold" },
  { val: "Description long and interesting", color: "text-black" },
];

const ProgramSection = () => {
  return (
    <div className="flex flex-col justify-center w-full p-12 bg-fifth text-second">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-head font-bold">Program Schedule</h2>
        <ProgramCard head={"Morning Session"} cardRows={cardRows} />
        <ProgramCard head={"Afternoon Session"} cardRows={cardRows2} />
      </div>
    </div>
  );
};

export default ProgramSection;
