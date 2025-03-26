const KvietimoSection = () => {
  return (
    <div className="flex justify-center py-20 text-white relative">
      <div className="flex flex-col bg-first p-10 lg:rounded-md">
        
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
          <p className="flex justify-end pb-4 sm:pb-0">
              2025 m. balandžio 16 diena, 10:00
            </p>
        </div>
        
        <div className="flex items-end w-full">
  
  <div className="flex" style={{ width: '40%' }}>
    <div className="h-20 md:h-32 bg-chevron-reverse w-1/2"></div>
    <div className="h-20 md:h-32 bg-chevron w-1/2"></div>
  </div>

  
  <div className="flex items-end" style={{ width: '60%' }}>
    <div className="h-12 md:h-20 bg-chevron-reverse w-1/5"></div>
    <div className="h-12 md:h-20 bg-chevron w-2/5"></div>
    <div className="h-8 md:h-14 bg-chevron-reverse w-2/5"></div>
  </div>
</div>


      </div>
    </div>
  );
};

export default KvietimoSection;
