import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  modalName: string;
};

const Modal = ({ children, modalName }: ModalProps) => {
  return (
    <div className="bg-red-500">
      <dialog id={modalName} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="bg-red-500">{children}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
