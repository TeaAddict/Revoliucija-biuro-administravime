const KvietimoSection = () => {
  return (
    <div className="flex justify-center py-20 text-white relative">
      <div className="flex flex-col bg-first p-10 rounded-md">
        
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-2xl text-sixth">FORUMAS</h1>
          <h2 className="font-bold text-2xl">
            „(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
            iššūkiai“
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div>
          <p className="font-bold pt-5 text-sixth">
            Maloniai kviečiame atvykti ir pasidalinti mintimis ir įžvalgomis.{" "}
          </p>
            
            <p className="flex justify-center pt-5">
              TECHIN Aviacijos ir verslo administravimo skyriuje (Lakūnų g. 3,
              Vilnius).
            </p>
          </div>
          <p className="flex justify-end">
              2025 m. balandžio 16 diena, 10:00
            </p>
        </div>
        
        <div className="flex items-end">
          {/* <div className="w-60 h-60 bg-chevron"></div> */}

          <div className="flex ">
            <div className="w-32 h-44 bg-chevron-reverse"></div>
            <div className="w-32 h-44 bg-chevron"></div>
          </div>
          <div className="flex items-end">
            <div className="w-32 h-24 bg-chevron-reverse"></div>
            <div className="w-60 h-24 bg-chevron"></div>
            <div className="w-60 h-16 bg-chevron-reverse"></div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default KvietimoSection;
