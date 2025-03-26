import TechinBrand5 from "../../assets/Techin-brand-X.png";
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
      <div className="flex flex-col p-5 lg:p-10 gap-5 bg-first rounded-md">
        <p className="font-bold text-xl text-second">Dalyviai</p>
        <a href="https://www.aprc.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Alytaus profesinio rengimo centras </a>
        <a href="https://www.kaupa.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Karaliaus Mindaugo profesinio mokymo centras </a>
        <a href="https://mpcentras.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Kauno maisto pramonės ir prekybos mokymo centras </a>
        <a href="https://www.mprc.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Marijampolės profesinio rengimo centras </a>
        <a href="https://www.paneveziomc.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Panevėžio mokymo centras </a>
        <a href="https://www.stvm.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Smalininkų technologijų ir verslo mokykla </a>
        <a href="https://www.stmc.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Šiaulių technologijų mokymo centras </a>
        <a href="https://www.tauragesprc.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Tauragės profesinio rengimo centro </a>
        <a href="https://techin.lt/" className="underline text-second font-bold pl-5 lg:pl-10">Vilniaus technologijų ir inžinerijos mokymo centras (TECHIN) </a>
      </div>
    </section>
  );
};
export default ParticipantsSection;
