import { ModalData } from "../../types/types";
import { Cart } from "../shopping_cart/Cart";
import { shoppingCart } from '../main.js'

export const handler = {
 handleNextButtonClick: (modalData: ModalData): void => {
    if (modalData.checked) {
      modalData.step++;
    }
    shoppingCart.render();
  },

  handleBackButtonClick: (modalData: ModalData): void => {
    const startModal: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#start_modal')!;
    const modal: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#modal_content')!;

    if (modalData.step === 0) {
      startModal.style.display = "flex";
      modal.style.display = "none";
      shoppingCart.render();
    } else {
      modalData.checked = !modalData.checked;
      modalData.step--;
      shoppingCart.render();
    }
  },

  handleCheckboxChange:(modalData: ModalData): void => {
    modalData.checked = !modalData.checked;
    shoppingCart.render();
  },

  handleQuantityAdjustButtonClick: (button: HTMLButtonElement): void => {
    if (button.className.includes('minus')) {
      if(parseInt(button.dataset.qty!) === 1) {
        Cart.removeItem(parseInt(button.dataset.id!));
      }
      Cart.updateItem(parseInt(button.dataset.id!), parseInt(button.dataset.qty!) - 1);
    } else {
      Cart.updateItem(parseInt(button.dataset.id!), parseInt(button.dataset.qty!) + 1);
    }
    shoppingCart.render();
  },

  handleClearButtonClick: (): void => {
    Cart.clear();
    shoppingCart.render();
  },
  
  handleSortNameButtonClick: (): void => {
    Cart.sortName();
    shoppingCart.render();
  },

  handleSortQuantityButtonClick: (): void => {
    Cart.sortQty();
    shoppingCart.render();
  },

  handleAddToCartButtonClick: (): void => {
    const name = prompt('Enter the name of the item');
    if (!name) return;
    if (Cart.items.find(item => item.name === name)) {
      Cart.updateItem(Cart.items.find(item => item.name === name)!.id, Cart.items.find(item => item.name === name)!.qty + 1);
      shoppingCart.render();
      return;
    }
    Cart.addItem({id: generateUniqueID(), name: name, qty: 1});
    shoppingCart.render();
  },
};

// Function to create uid without a library
const generateUniqueID = (): number => {
  return Math.floor(Math.random() * 1000000000);
}
