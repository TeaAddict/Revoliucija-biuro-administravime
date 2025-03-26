import ProgramCard from "./ProgramCard";
import TechinBrand from "../../assets/TechinBrand.svg?react";

// const cardRows1 = [
//   { val: "9.30-10.00", color: "text-second font-bold" },
//   { val: "Registracija", color: "text-second" },
//   { val: "10.00-10.30", color: "text-second font-bold" },
//   { val: "Forumo atidarymas/sveikinimas/ susipažinimas", color: "text-second" },
//   { val: "10:30-10.45", color: "text-second font-bold" },
//   {
//     val: "Intro „Evoliucija biuro administravime“",
//     color: "text-second",
//   },
// ];

const data1 = [
  {
    time: "9.30-10.00",
    description: "Registracija",
  },
  {
    time: "10.00-10.30",
    description: "Forumo atidarymas/sveikinimas/ susipažinimas",
  },
  {
    time: "10.30-10.45",
    description: "Intro „Evoliucija biuro administravime“",
  },
];

const data2 = [
  {
    time: "10.45-11.05",
    description:
      "„Darbas su klientais. Tinklaveika - abipusis santykių kūrimas“ UAB „Litcargus“. Personalo direktorė A. Jurėnaitė",
  },
  {
    time: "11.05-11.25",
    description:
      "„Dokumentų valdymas: iššūkiai ir ateities perspektyvos“ Lietuvos valstybės naujasis archyvas. Direktorė D. Kontrimavičienė",
  },
  {
    time: "11.25-11.45",
    description:
      "„Kibernetinio saugumo sąmoningumo ugdymas ir socialinės inžinerijos testavimai“ UAB „Vilniaus vandenys“. Kibernetinio saugumo vadovas J. Lisauskas",
  },
  {
    time: "11.45-11.55",
    description: "Pertrauka",
  },
  {
    time: "11.55-12.15",
    description:
      "„Asmens duomenų apsauga įstaigoje“ Žemės ūkio duomenų centras. Asmens duomenų apsaugos pareigūnė I. Mitkevičienė",
  },
  {
    time: "12.15-12.35",
    description:
      "„Dirbtinis intelektas biure: partneris ar konkurentas“ Mokymo(-si) patirčių konsultantas, lektorius Ą. Balčius",
  },
  {
    time: "12.35-12.55",
    description:
      "„Darbo rinkos tendencijos“ Darbo rinkos ekspertė R. Karavaitienė",
  },
  {
    time: "12.55-14.00",
    description: "Pietų pertrauka",
  },
];

const data3 = [
  {
    time: "14.00-15.30",
    description: "Darbas sekcijose. Mokytojų diskusijos/ Mokinių diskusijos",
  },
  {
    time: "15.30-15.50",
    description: "Diskusijų apibendrinimas",
  },
  {
    time: "15.50-16.00",
    description: "Forumo pabaiga",
  },
];

const ProgramSection = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-second text-sixth py-10 lg:py-0">
      <div className="flex flex-col items-center gap-5">
        <TechinBrand className="text-sixth stroke-sixth" />
        <h4 className="text-head font-bold">
          Vilniaus technologijų ir inžinerijos mokymo centras (TECHIN)
        </h4>
        <h3 className="text-head font-bold">FORUMAS</h3>
        <h2 className="text-head font-bold">
          „(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
          iššūkiai“
        </h2>
        <h2 className="text-head font-bold">PROGRAMA</h2>
        <p>
          Balandžio 16 d., Aviacijos ir verslo administravimo mokymo skyrius,
          Lakūnų g. 3, Vilnius
        </p>
        <div className="max-w-[40rem] flex flex-col gap-1">
          <ProgramCard cardRows={data1} />
          <ProgramCard head={"I DALIS"} cardRows={data2} />
          <ProgramCard head={"II DALIS"} cardRows={data3} />
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
