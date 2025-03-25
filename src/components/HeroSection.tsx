// import TechinBrand1 from "../assets/TechinBrand.svg?react";
// import TechinBrand2 from "../assets/Techin-brand-H.PNG";
// import TechinBrand3 from "../assets/Techin-brand-V.PNG";
// import TechinBrand4 from "../assets/Techin-brandmark.PNG";
import TechinBrand5 from "../assets/Techin-brand-X.png";
import HeroImg from "../assets/sculpture1.webp";

const HeroSection = () => {
  return (
    <div className="h-[100vh] sm:h-[80vh] relative font-first overflow-hidden">
      <div className="bg-linear-to-t from-second/90 to-sixth/40 h-full w-full absolute"></div>
      <div className="bg-linear-to-t from-second/90 to-sixth/40 h-full w-full absolute"></div>
      <img src={HeroImg} className="w-full h-full object-cover " />

      <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center">
        {/* <TechinBrand1 className=" h-[8rem] fill-[#2BD47A]" /> */}
        {/* <img src={TechinBrand2} /> */}
        {/* <img src={TechinBrand3} /> */}
        {/* <img src={TechinBrand4} /> */}
        <div className="w-full flex justify-center">
          <img src={TechinBrand5} className="h-auto max-w-20" />
        </div>

        <h2 className="text-5xl text-first font-first tracking-wider">
          Forumas
        </h2>
        <hr className="w-40 border-first mx-auto border-1" />
        <p className="text-2xl text-first font-first tracking-wider">
          "(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
          iššūkiai"
        </p>
        <div className="flex gap-4 justify-center mt-4 ">
          <div className="border-2 border-first text-first px-6 py-2 rounded-md">
            2025 m. balandžio 16 d.
          </div>
          <div className="border-2 border-first text-first px-6 py-2 rounded-md flex items-center">
            Vilnius
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
