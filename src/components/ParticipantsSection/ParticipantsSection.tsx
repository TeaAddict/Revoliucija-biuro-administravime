import TechinBrand5 from "../../assets/Techin-brand-X.png";

const participants = [
  { name: "Alytaus profesinio rengimo centras", url: "https://www.aprc.lt/" },
  {
    name: "Karaliaus Mindaugo profesinio mokymo centras",
    url: "https://www.kaupa.lt/",
  },
  {
    name: "Kauno maisto pramonės ir prekybos mokymo centras",
    url: "https://mpcentras.lt/",
  },
  {
    name: "Marijampolės profesinio rengimo centras",
    url: "https://www.mprc.lt/",
  },
  { name: "Panevėžio mokymo centras", url: "https://www.paneveziomc.lt/" },
  {
    name: "Smalininkų technologijų ir verslo mokykla",
    url: "https://www.stvm.lt/",
  },
  { name: "Šiaulių technologijų mokymo centras", url: "https://www.stmc.lt/" },
  {
    name: "Tauragės profesinio rengimo centro",
    url: "https://www.tauragesprc.lt/",
  },
  {
    name: "Vilniaus technologijų ir inžinerijos mokymo centras (TECHIN)",
    url: "https://techin.lt/",
  },
];

const ParticipantsSection = () => {
  return (
    <section className="p-2 lg:p-8">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={TechinBrand5} className="h-auto max-w-20" />

        <h2 className="text-5xl pb-4 font-bold text-first tracking-wider pt-7">
          Forumas
        </h2>

        <p className="text-2xl font-[600] text-first tracking-wider pb-10">
          "(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
          iššūkiai"
        </p>
      </div>

      <div className="flex flex-col p-5 lg:p-10 gap-5 text-sixth bg-first rounded-md">
        <p className="font-bold text-xl">Dalyviai</p>
        {participants.map((p, index) => (
          <a
            key={index}
            href={p.url}
            className="underline text-second font-bold pl-5 lg:pl-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ParticipantsSection;
