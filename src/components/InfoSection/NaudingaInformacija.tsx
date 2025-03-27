import Location from "../../assets/location.png";
import Parking from "../../assets/parking1.png";
import Planas from "../../assets/ogmios-plane.png";
import Restaurant from "../../assets/restoranai.png";
import TechinBrand5 from "../../assets/Techin-brand-X.png";

const NaudingaInformacija = () => {
  return (
    <div className="px-2 flex flex-col text-fourth">
      <section className="flex flex-col items-center justify-center py-8 gap-5">
        <img src={TechinBrand5} className="h-auto max-w-20" />

        {/* <h1 className="font-bold text-5xl tracking-wider">
          INFORMACIJA FORUMO DALYVIAMS
        </h1> */}
        <h1 className="font-bold text-5xl tracking-wider pb-2 pt-7">
          Informacija forumo dalyviams
        </h1>
      </section>
      <section className="py-8 flex flex-col gap-2">
        <h3 className="font-bold text-xl">Atvykimas </h3>
        <p className=" pb-4">
          Vilniaus technologijų ir inžinerijos mokymo centras, Aviacijos ir
          verslo administravimo mokymo skyrius, Lakūnų g. 3, Vilnius.
        </p>
        <div className="flex justify-center items-center">
          <a href="https://maps.app.goo.gl/UsHs72VNmHurJ17s5 " target="_blank">
            <img
              src={Location}
              alt="location img."
              className=" h-[10%] w-[100%] max-w-[60rem] rounded-2xl"
            />
          </a>
        </div>
      </section>
      <section className="py-8 flex flex-col gap-2 justify-center">
        <h3 className="font-bold text-xl">Parkavimas</h3>
        <div>
          <p>
            Automobilius galite parkuoti Lakūnų gatvėje esančiose parkavimo
            vietose arba prekybos centro „Ogmios miestas“ automobilių stovėjimo
            aikštelėse.
          </p>
          <p className=" pb-4">
            Lakūnų gatvė priklauso Vilniaus žaliajai parkavimo zonai. Už
            parkavimą galite sumokėti mobiliąja UNIPARK programėle,
            parkomatuose, SMS žinute arba kitomis programėlėmis.
          </p>
        </div>
        <section className=" self-center border-2 w-[15rem] flex flex-col justify-center bg-white border-white shadow-lg  rounded-2xl ">
          <img src={Parking} alt="parking info" className="self-center py-2" />
          <h1 className=" font-bold self-center">Žalioji zona</h1>
          <section className=" px-2 pb-2">
            <p>
              Stovėjimas mokamas nuo pirmadienio iki šeštadienio arba nuo
              pirmadienio iki penktadienio, priklausomai nuo zonos lokacijos.
            </p>
            <p>8:00- 18:00: 1 val .- 0.30 Eur</p>
            <p>18:00 - 8:00: nemokamal</p>
            <p>Tarifas skaičiuojamas 20 min. tikslumu.</p>
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
        <a
          href="https://maps.app.goo.gl/2D33ePoLNm9U2B5E7 "
          target="_blank"
          className=" self-center"
        >
          <img src={Planas} alt="planas" className=" rounded-2xl" />
        </a>
      </section>
      <section className="py-8 flex flex-col gap-2">
        <h3 className="font-bold text-xl">Maitinimas </h3>
        <p className=" pb-4">
          Nuo 13:00 iki 14:00 val. pietų pertrauka. Pertraukos metu forumo
          dalyvius kviesime pasivaišinti kava, arbata ir užkandžiais. Netoliese
          esančiame prekybos centre „Ogmios miestas“ rasite įvairias maitinimo
          įstaigas, kur galėsite pasirinkti pietus pagal savo skonį (apmokama
          savarankiškai).
        </p>
        <a
          href="https://maps.app.goo.gl/2D33ePoLNm9U2B5E7 "
          target="_blank"
          className=" self-center"
        >
          <img src={Restaurant} alt="restaurant img" className=" rounded-2xl" />
        </a>
      </section>
    </div>
  );
};

export default NaudingaInformacija;
