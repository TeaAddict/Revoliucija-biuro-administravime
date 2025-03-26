import temos from "../../assets/temos.png";
import React from "react";
import TechinBrand5 from "../../assets/Techin-brand-X.png";


const discussionThemes = [
    {
      number: 1,
      title: "Mokymasis per patirtį: simuliacijos ir praktinės užduotys biuro administravimo mokyme",
      theses: [
        "Ar tikrai galima pasidalinti savo darbine patirtimi viešojo sektoriaus ir verslo biuro administratoriams.",
        "Praktinės užduotys: ar vien tik mokytojas privalo jas rengti. Gal yra koks nors informacijos šaltinis, kur galima būtų bent šiek tiek jų rasti.",
        "Naujos mokymo literatūros trūkumas.",
        "Įvairios simuliacijos BA mokyme.",
        "Sudėtinga mokiniams parodyti realų darbą DVS, mokymo procese norėtųsi daugiau integruoti personalo valdymą, bet tai tik pasirenkamasis modulis.",
        "Mokinių motyvavimas, profesijos patrauklumo didinimas.",
        "Domina kitų kolegų gerosios praktikos.",
        "Kaip technologijų pažanga keičia biuro administratoriaus funkcijas. Kokie yra didžiausi iššūkiai, su kuriais susiduria biuro administratoriai šiandien.",
        "Neturime teorijos vadovėlio ir neturime vieningų praktinių užduočių pavyzdžių.",
      ],
    },
    {
      number: 2,
      title: "Biuro administratoriaus vaidmuo moderniame darbo pasaulyje: iššūkiai ir ateities tendencijos",
      theses: [
        "Dirbtinis intelektas (DI) ir debesijos technologijos keičia tradicinius administracinius darbus, reikalauja naujų įgūdžių ir keičia administratoriaus vaidmenį organizacijoje. Naujos kompetencijos būtinos šiuolaikiniam biuro administratoriui.",
        "Ar tikrai galima pasidalinti savo darbine patirtimi viešojo sektoriaus ir verslo biuro administratoriams.",
        "Biuro administratoriaus atsakomybių gausa dirbant mažoje įmonėje, kai viską daro vienas asmuo.",
        "Domina kitų kolegų gerosios praktikos.",
        "Biuro administratorius privalo nuolat sekti technologines naujoves ir prisitaikyti prie naujų įrankių. Ateityje biuro administratorių užduotys bus vis labiau automatizuotos.",
      ],
    },
    {
      number: 3,
      title: "Skaitmeniniai dokumentai ir informacijos valdymas",
      theses: [
        "Mokomosios informacinės dokumentų valdymo sistemos būtinybė rengiant biuro administratorius.",
        "Ar tikslinga/būtina skaitmenizuoti ilgai ir nuolat saugomus dokumentus.",
        "Naujos mokymo literatūros trūkumas.",
        "Kaip sklandžiai valdyti informaciją.",
        "Domina kitų kolegų gerosios praktikos.",
        "Skirtingose įstaigose naudojamos skirtingos Dokumentų valdymo sistemos.",
        "Mokymui nėra galimybių dirbti su Dokumentų valdymo sistemomis.",
        "Nėra mokomosios dokumentų valdymo sistemos.",
      ],
    },
  ];

const DiscussionSection = () => {
    return (
        <section className="text-first px-8 py-10 flex flex-col items-center gap-4 bg-second">
        <div className="w-full flex justify-center">
          <img src={TechinBrand5} className="h-auto max-w-20" />
        </div>
        
           <h2 className="text-5xl font-bold text-first tracking-wider pt-7">
          Forumas
        </h2>
        
        <p className="text-2xl font-[600] text-first tracking-wider">
          "(r)Evoliucija biuro administravime: patirtys, nauji įgūdžiai ir
          iššūkiai"
        </p>
          <h2 className="text-xl pt-7">Forumo diskusijų temų diagrama  </h2>
    
          <img src={temos} alt="temos" className="xl:max-w-5xl"/>
    
          <div className="pt-7 text-xl">Diskusijų temos</div>
          <div className="w-full max-w-5xl grid grid-cols-[30%_70%] border border-first text-left font-semibold">
            
            <div className="border border-first p-2">Aktualiausios temos</div>
            <div className="border border-first p-2">Tezės</div>
          </div>
    
          
          {discussionThemes.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-5xl grid grid-cols-[30%_70%] border-x border-b border-first text-left"
            >
              <div className="border border-first p-2 font-medium flex items-center">
                {item.number}. „{item.title}“.
              </div>
              
              <div className="border border-first p-2">
                <ol className="list-decimal list-inside space-y-1">
                  {item.theses.map((thesis, i) => (
                    <li key={i}>{thesis}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </section>
      );
    };
    

export default DiscussionSection;

