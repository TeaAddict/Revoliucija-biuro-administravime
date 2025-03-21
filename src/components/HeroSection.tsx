const HeroSection = () => {
  return (
    <div className="h-screen relative font-first overflow-hidden">
      <div className="bg-linear-to-t from-second/90 h-full w-full absolute"></div>
      <div className="bg-linear-to-t from-second/90 h-full w-full absolute"></div>
      <img
        src="src/assets/sculpture1.webp"
        className="w-full h-full object-cover "
      />

      <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-5xl text-white font-first tracking-wider">
          Forumas
        </h2>
        <hr className="w-40 border-first mx-auto border-1" />
        <p className="text-2xl text-white font-first tracking-wider">
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
