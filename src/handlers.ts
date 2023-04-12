import { ModalData } from "../types/types";
import { Cart } from "./shopping_cart/Cart";
import { shoppingCart } from './main.js'

export const handler = {
 handleNextButtonClick: (modalData: ModalData) => {
    if (modalData.checked) {
      modalData.step++;
    }
    shoppingCart.render();
  },

  handleBackButtonClick: (modalData: ModalData) => {
    const startModal = document.querySelector<HTMLDivElement>('#start_modal')!;
    const modal = document.querySelector<HTMLDivElement>('#modal_content')!;

    if (modalData.step === 0) {
      startModal.style.display = "flex";
      modal.style.display = "none";
    } else {
      modalData.checked = false;
      modalData.step--;
      shoppingCart.render();
    }
  },

  handleCheckboxChange:(modalData: ModalData) => {
    modalData.checked = !modalData.checked;
    shoppingCart.render();
  },

  handleQuantityAdjustButtonClick: (element: any) => {
    if (element.className.includes('minus')) {
      if(parseInt(element.dataset.qty!) === 1) {
        Cart.removeItem(parseInt(element.dataset.id!));
      }
      Cart.updateItem(parseInt(element.dataset.id!), parseInt(element.dataset.qty) - 1);
    } else {
      Cart.updateItem(parseInt(element.dataset.id!), parseInt(element.dataset.qty) + 1);
    }
    shoppingCart.render();
  },

  handleClearButtonClick: () => {
    Cart.clear();
    shoppingCart.render();
  },
  
  handleSortNameButtonClick: () => {
    Cart.sortName();
    shoppingCart.render();
  },

  handleSortQuantityButtonClick: () => {
    Cart.sortQty();
    shoppingCart.render();
  },

  handleAddToCartButtonClick: () => {
    const name = prompt('Enter the name of the item');
    if (!name) return;
    if (Cart.items.find(item => item.name === name)) {
      Cart.updateItem(Cart.items.find(item => item.name === name)!.id, Cart.items.find(item => item.name === name)!.qty + 1);
      shoppingCart.render();
      return;
    }
    Cart.addItem({id: Cart.items.length, name: name, qty: 1});
    shoppingCart.render();
  },
};
