import { Cart } from "./Cart";
import  whiteLogo  from "../../public/logo_white.svg";
import closeIcon from "../../public/arrow.svg";
import sortIcon from "../../public/sorting.svg";
import pinkPlusIcon from "../../public/plus_pink.svg";
import { ModalData } from "../../types/types";
import { addEventListeners, removeEventListeners } from "../event_listeners";
import TERMS from '../../public/terms.json';

export const ShoppingCart = (modalElement: any) => {
  let modalData: ModalData = { step: 0, checked: false };

  const render = () => {
    const modalContent = modalElement.querySelector('#modal_content');
    if (modalContent) {
      switch (modalData.step) {
        case 0:
          modalContent.innerHTML = `
            <div class="modal-header terms">
              <img src="${whiteLogo}" alt="White Logo" />
              <div class="title">
                <img class="modal-back" src="${closeIcon}" alt="Close Icon" />
                <h1>Terms & Conditions</h1>
              </div>
            </div>
            <div class="modal-body">
              <hgroup>${TERMS.info}</hgroup>
              <div class="modal-accept">
                <label>
                  <input class="modal-checkbox" type="checkbox" ${
                    modalData.checked ? 'checked' : ''
                  }><span></span>
                </label>
                <span>I Agree</span>
              </div>
              <div>
                <button ${
                  modalData.checked ? '' : 'disabled'
                } class="modal-next btn ${modalData.checked ? '' : 'disabled'}">Next</button>
              </div>
            </div>
          `;
          break;
        case 1:
          Cart.init();
          modalContent.innerHTML = `
            <div class="modal-header">
              <img src="${whiteLogo}" alt="White Logo" />
              <div class="title">
                <img class="modal-back" src="${closeIcon}" alt="Close Icon" />
                <h1>Shopping Cart</h1>
              </div>
            </div>
            <div class="modal-body">
              <div class="cart-header">
                <button id="name_sort" class="cart-header-item">ITEM NAME<img src="${sortIcon}" alt=""/></button>
                <button id="qty_sort" class="cart-header-item">QTY<img src="${sortIcon}" alt=""/></button>
              </div>
              <div id="cart"></div>
              <button id="cart_add"><img src="${pinkPlusIcon}" alt=""/>Add Item</button>
              <button id="cart_clear">Clear All</button>
            </div>
          `;
          Cart.showCart();
          break;
        default:
          break;
      }

      removeEventListeners(modalElement, modalData);
      addEventListeners(modalElement, modalData);
    }
  };

  const init = () => {
    render();
    addEventListeners(modalElement, modalData);
  };

  return { init, render };
};
