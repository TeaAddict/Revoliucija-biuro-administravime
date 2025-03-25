import Computer from "../../assets/computer.svg?react";
import InfoButton from "./InfoButton";
import Modal from "../Modal";
import ForumoPrograma from "./ForumoPrograma";
import NaudingaInformacija from "./NaudingaInformacija";
import ForumoDalyviai from "./ForumoDalyviai";
import ForumoMedziaga from "./ForumoMedziaga";

const InfoButtonList = () => {
  return (
    <div className="w-full">
      <Modal modalName="modal1" style="bg-second">
        <ForumoPrograma />
      </Modal>
      <Modal modalName="modal2" style="bg-second">
        <NaudingaInformacija />
      </Modal>
      <Modal modalName="modal3" style="bg-second">
        <ForumoDalyviai />
      </Modal>
      <Modal modalName="modal4" style="bg-second">
        <ForumoMedziaga />
      </Modal>
      <div className="grid lg:grid-cols-4 w-full gap-5 py-5 px-5">
        <button
          className="cursor-pointer"
          onClick={() =>
            (
              document.getElementById("modal1") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          <InfoButton img={Computer} name="Forumo programa" />
        </button>

        <button
          className="cursor-pointer"
          onClick={() =>
            (
              document.getElementById("modal2") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          <InfoButton img={Computer} name="Naudinga informacija" />
        </button>

        <button
          className="cursor-pointer"
          onClick={() =>
            (
              document.getElementById("modal3") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          <InfoButton img={Computer} name="Forumo dalyviai" />
        </button>

        <button
          className="cursor-pointer"
          onClick={() =>
            (
              document.getElementById("modal4") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          <InfoButton img={Computer} name="Forumo medžiaga" />
        </button>
      </div>
    </div>
  );
};

export default InfoButtonList;
