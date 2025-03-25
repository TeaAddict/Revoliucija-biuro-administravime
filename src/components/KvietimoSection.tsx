const KvietimoSection = () => {
  return (
    <div className="flex justify-center py-20 text-white">
      <div className="flex flex-col gap-32 bg-first p-10 lg:rounded-md">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-2xl text-sixth">FORUMAS</h1>
          <h2 className="font-bold text-2xl">
            „(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
            iššūkiai“
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="flex justify-end">
              2025 m. balandžio 16 diena, 10:00
            </p>
            <p>
              TECHIN Aviacijos ir verslo administravimo skyriuje (Lakūnų g. 3,
              Vilnius).
            </p>
          </div>
          <p className="font-bold text-center">
            Maloniai kviečiame atvykti ir pasidalinti mintimis ir įžvalgomis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KvietimoSection;
