import { Cart } from "./shopping_cart/Cart";
import  whiteLogo  from "../public/logo_white.svg";
import closeIcon from "../public/arrow.svg";
import sortIcon from "../public/sorting.svg";
import pinkPlusIcon from "../public/plus_pink.svg";
import { ModalData } from "../types/types";
import Terms from '../public/terms.json';

export const ShoppingCart = (modalElement: any) => {
  let modalData: ModalData = { step: 0, checked: false };

  const handleNextButtonClick = () => {
    if (modalData.checked) {
      modalData.step++;
    }
    render();
  };

  const handleBackButtonClick = () => {
    const startModal = document.querySelector<HTMLDivElement>('#start_modal')!;
    const modal = document.querySelector<HTMLDivElement>('#modal_content')!;

    if (modalData.step === 0) {
      startModal.style.display = "flex";
      modal.style.display = "none";
    } else {
      modalData.checked = false;
      modalData.step--;
      render();
    }
  };

  const handleCheckboxChange = () => {
    modalData.checked = !modalData.checked;
    render();
  };

  const handleQuantityAdjustButtonClick = (element: any) => {
    const button = element.target;
    // check to see if the button has a class name that includes minus
    if (button.className.includes('minus')) {
      if(parseInt(button.dataset.qty!) === 1) {
        Cart.removeItem(parseInt(button.dataset.id!));
      }
      Cart.updateItem(parseInt(button.dataset.id!), parseInt(button.dataset.qty) - 1);
    } else {
      Cart.updateItem(parseInt(button.dataset.id!), parseInt(button.dataset.qty) + 1);
    }
    render();
  };

  const handleClearButtonClick = () => {
    Cart.clear();
    render();
  };
  
  const handleSortNameButtonClick = () => {
    Cart.sortName();
    render();
  };

  const handleSortQuantityButtonClick = () => {
    Cart.sortQty();
    render();
  };

  const handleAddToCartButtonClick = () => {
    const name = prompt('Enter the name of the item');
    if (!name) return;
    if (Cart.items.find(item => item.name === name)) {
      Cart.updateItem(Cart.items.find(item => item.name === name)!.id, Cart.items.find(item => item.name === name)!.qty + 1);
      render();
      return;
    }
    // instead of using the id from the prompt, we'll use the length of the items array
    Cart.addItem({id: Cart.items.length, name: name, qty: 1});
    render();
  };

  const addEventListeners = () => {
    const nextButton = modalElement.querySelector('.modal-next');
    if (nextButton) {
      nextButton.addEventListener('click', handleNextButtonClick);
    }

    const backButton = modalElement.querySelector('.modal-back');
    if (backButton) {
      backButton.addEventListener('click', handleBackButtonClick);
    }

    const checkbox = modalElement.querySelector('.modal-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', handleCheckboxChange);
    }

    const incrementButton = modalElement.querySelectorAll('.cart-item-qty-plus, .cart-item-qty-minus');
    if (incrementButton) {
      incrementButton.forEach((button: Element) => {
        button.addEventListener('click', handleQuantityAdjustButtonClick);
      });
    }

    const clearButton = document.querySelector('#cart_clear');
    if (clearButton) {
      clearButton.addEventListener('click', handleClearButtonClick);
    }

    const sortNameButton = document.querySelector('#name_sort');
    if (sortNameButton) {
      sortNameButton.addEventListener('click', handleSortNameButtonClick);
    }

    const sortQuantityButton = document.querySelector('#qty_sort');
    if (sortQuantityButton) {
      sortQuantityButton.addEventListener('click', handleSortQuantityButtonClick);
    }

    const addToCartButton = document.querySelector('#cart_add');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', handleAddToCartButtonClick);
    }
  };

  // For legacy browsers 👴
  const removeEventListeners = () => {
    const nextButton = modalElement.querySelector('.modal-next');
    if (nextButton) {
      nextButton.removeEventListener('click', handleNextButtonClick);
    }

    const backButton = modalElement.querySelector('.modal-back');
    if (backButton) {
      backButton.removeEventListener('click', handleBackButtonClick);
    }

    const checkbox = modalElement.querySelector('.modal-checkbox');
    if (checkbox) {
      checkbox.removeEventListener('change', handleCheckboxChange);
    }

    const clearButton = document.querySelector('#cart_clear');
    if (clearButton) {
      clearButton.removeEventListener('click', handleClearButtonClick);
    }

    const incrementButton = modalElement.querySelectorAll('.cart-item-qty-plus, .cart-item-qty-minus');
    if (incrementButton) {
      incrementButton.forEach((button: Element) => {
        button.removeEventListener('click', handleQuantityAdjustButtonClick);
      });
    }

    const sortNameButton = document.querySelector('#name_sort');
    if (sortNameButton) {
      sortNameButton.removeEventListener('click', handleSortNameButtonClick);
    }

    const sortQuantityButton = document.querySelector('#qty_sort');
    if (sortQuantityButton) {
      sortQuantityButton.removeEventListener('click', handleSortQuantityButtonClick);
    }

    const addToCartButton = document.querySelector('#cart_add');
    if (addToCartButton) {
      addToCartButton.removeEventListener('click', handleAddToCartButtonClick);
    }
  };

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
              <hgroup>${Terms.info}</hgroup>
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

      removeEventListeners();
      addEventListeners();
    }
  };

  const init = () => {
    render();
    addEventListeners();
  };

  return { init };
};

