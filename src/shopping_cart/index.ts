import { ModalData } from "../../types/types";
import { addEventListeners, removeEventListeners } from "./event_listeners";
import { renderTermsModal } from "./steps/termsStep";
import { renderCartModal } from "./steps/cartStep";

interface ShoppingCart {
  init: () => void;
  render: () => void;
}

export const ShoppingCart = (modalElement: HTMLElement): ShoppingCart => {
  const modalData: ModalData = { step: 0, checked: false };

  const render = () => {
    const modalContent: HTMLDivElement | null = modalElement.querySelector<HTMLDivElement>('#modal_content')!;
    if (modalContent) {
      switch (modalData.step) {
        case 0:
          renderTermsModal(modalData);
          break;
        case 1:
          renderCartModal(modalContent);
          break;
        default:
          break;
      }
      removeEventListeners(modalElement);
      addEventListeners(modalElement, modalData);
    }
  };

  const init: () => void = () => {
    render();
  };

  return { init, render };
};
