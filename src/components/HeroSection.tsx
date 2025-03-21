const HeroSection = () => {
  return (
    <div className="h-[50vh] relative">
      <div className="bg-linear-to-t from-orange-950/90 h-full w-full absolute"></div>
      <div className="bg-linear-to-t from-orange-950/90 h-full w-full absolute"></div>
      <img src="src/assets/sculpture1.webp" className="w-full h-full object-cover " />
      
      <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-5xl text-white font-first tracking-wider">Forumas</h2>
        <p className="text-2xl text-white font-first tracking-wider">
          "(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
          iššūkiai"
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
