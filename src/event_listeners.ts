import { handler } from "./handlers";

export const addEventListeners = (modalElement: any) => {
    const nextButton = modalElement.querySelector('.modal-next');
    if (nextButton) {
      nextButton.addEventListener('click', handler.handleNextButtonClick);
    }

    const backButton = modalElement.querySelector('.modal-back');
    if (backButton) {
      backButton.addEventListener('click', handler.handleBackButtonClick);
    }

    const checkbox = modalElement.querySelector('.modal-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', handler.handleCheckboxChange);
    }

    const incrementButton = modalElement.querySelectorAll('.cart-item-qty-plus, .cart-item-qty-minus');
    if (incrementButton) {
      incrementButton.forEach((button: any) => {
        button.addEventListener('click', handler.handleQuantityAdjustButtonClick);
      });
    }

    const clearButton = document.querySelector('#cart_clear');
    if (clearButton) {
      clearButton.addEventListener('click', handler.handleClearButtonClick);
    }

    const sortNameButton = document.querySelector('#name_sort');
    if (sortNameButton) {
      sortNameButton.addEventListener('click', handler.handleSortNameButtonClick);
    }

    const sortQuantityButton = document.querySelector('#qty_sort');
    if (sortQuantityButton) {
      sortQuantityButton.addEventListener('click', handler.handleSortQuantityButtonClick);
    }

    const addToCartButton = document.querySelector('#cart_add');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', handler.handleAddToCartButtonClick);
    }
  };

  // For legacy browsers 👴
  export const removeEventListeners = (modalElement: any) => {
    const nextButton = modalElement.querySelector('.modal-next');
    if (nextButton) {
      nextButton.removeEventListener('click', handler.handleNextButtonClick);
    }

    const backButton = modalElement.querySelector('.modal-back');
    if (backButton) {
      backButton.removeEventListener('click', handler.handleBackButtonClick);
    }

    const checkbox = modalElement.querySelector('.modal-checkbox');
    if (checkbox) {
      checkbox.removeEventListener('change', handler.handleCheckboxChange);
    }

    const clearButton = document.querySelector('#cart_clear');
    if (clearButton) {
      clearButton.removeEventListener('click', handler.handleClearButtonClick);
    }

    const incrementButton = modalElement.querySelectorAll('.cart-item-qty-plus, .cart-item-qty-minus');
    if (incrementButton) {
      incrementButton.forEach((button: any) => {
        button.removeEventListener('click', handler.handleQuantityAdjustButtonClick); 
      });
    }

    const sortNameButton = document.querySelector('#name_sort');
    if (sortNameButton) {
      sortNameButton.removeEventListener('click', handler.handleSortNameButtonClick);
    }

    const sortQuantityButton = document.querySelector('#qty_sort');
    if (sortQuantityButton) {
      sortQuantityButton.removeEventListener('click', handler.handleSortQuantityButtonClick);
    }

    const addToCartButton = document.querySelector('#cart_add');
    if (addToCartButton) {
      addToCartButton.removeEventListener('click', handler.handleAddToCartButtonClick);
    }
  };
