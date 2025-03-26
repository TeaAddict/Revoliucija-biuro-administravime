import Location from "../../assets/location.png";
import Parking from "../../assets/parking1.png";
import Planas from "../../assets/ogmios-plane.png";
import Restaurant from "../../assets/restoranai.png";

const NaudingaInformacija = () => {
  return (
    <div className=" overflow-scroll px-2 flex flex-col">
      <section className=" flex justify-center py-8 ">
        <h1 className=" font-bold text-[2rem]">INFORMACIJA FORUMO DALYVIAMS </h1>
      </section>
      <section className="py-8">
        <h3 className=" font-bold">Atvykimas </h3>
        <p className=" pb-4">
          Vilniaus technologijų ir inžinerijos mokymo centras, Aviacijos ir
          verslo administravimo mokymo skyrius, Lakūnų g. 3, Vilnius.
        </p>
        <a href="https://maps.app.goo.gl/UsHs72VNmHurJ17s5 " target="_blank">
          <img
            src={Location}
            alt="location img."
            className=" h-[10%] w-[100%] rounded-2xl "
          />
        </a>
      </section>
      <section className="py-8 flex flex-col justify-center">
        <h3 className=" font-bold">Parkavimas</h3>
        <p>
          Automobilius galite parkuoti Lakūnų gatvėje esančiose parkavimo
          vietose arba prekybos centro „Ogmios miestas“ automobilių stovėjimo
          aikštelėse.
        </p>
        <p className=" pb-4">
          Lakūnų gatvė priklauso Vilniaus žaliajai parkavimo zonai. Už parkavimą
          galite sumokėti mobiliąja UNIPARK programėle, parkomatuose, SMS žinute
          arba kitomis programėlėmis.
        </p>
        <section className=" self-center border-2 w-[15rem] flex flex-col justify-center bg-white border-white shadow-lg  rounded-2xl ">
          <img src={Parking} alt="parking info" className="self-center py-2" />
          <h1 className=" font-bold self-center">Žalioji zona</h1>
          <section className=" px-2 pb-2">
            <p>
              Stovėļimas mokamas nuo pirmadienio iki Seštodlenio arba nuo
              pirmadienio ik penktadlenio, prikiausomal nuo zonos lokacijos.
            </p>
            <p>8:00- 18:00: 1 val .- 0.30 Eur</p>
            <p>18:00 - 8:00: nemokamal</p>
            <p>Tarifas skalčluojamas 20 min. tislumu.</p>
          </section>
        </section>
        <p className=" pt-4">
          Prekybos centro „Ogmios miestas“ parkavimo aikštelės yra suskirstytos
          į dvi zonas: ilgo laiko parkavimo zoną (žemėlapyje P1) ir trumpo laiko
          parkavimo zoną (žemėlapyje P2). Ilgojo laiko parkavimo zonoje galima
          nemokamai parkuotis iki 4 valandų, o trumpojo – iki 2 valandų.
        </p>
        <p className=" pb-4">
          Vėliau kiekviena papildoma valanda tiek ilgo (P1), tiek trumpo (P2)
          parkavimo zonose kainuos 1 eurą.
        </p>
        <a href="https://maps.app.goo.gl/2D33ePoLNm9U2B5E7 " target="_blank" className=" self-center">
          <img src={Planas} alt="planas" className=" rounded-2xl" />
        </a>
      </section>
      <section className="py-8 flex flex-col ">
        <h1 className=" font-bold">Maitinimas </h1>
        <p className=" pb-4">
          Nuo 13:00 iki 14:00 val. pietų pertrauka. Pertraukos metu forumo
          dalyvius kviesime pasivaišinti kava, arbata ir užkandžiais. Netoliese
          esančiame prekybos centre „Ogmios miestas“ rasite įvairias maitinimo
          įstaigas, kur galėsite pasirinkti pietus pagal savo skonį (apmokama
          savarankiškai).
        </p>
        <a href="https://maps.app.goo.gl/2D33ePoLNm9U2B5E7 " target="_blank" className=" self-center">
          <img src={Restaurant} alt="restaurant img" className=" rounded-2xl" />
        </a>
      </section>
    </div>
  );
};

export default NaudingaInformacija;
