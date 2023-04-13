import { handler } from "./handlers";

export const addEventListeners = (modalElement: any, modalData: any) => {
  const handleNextButtonClick = () => handler.handleNextButtonClick(modalData);
  const handleBackButtonClick = () => handler.handleBackButtonClick(modalData);
  const handleCheckboxChange = () => handler.handleCheckboxChange(modalData);
  const handleQuantityAdjustButtonClick = (button: any) => handler.handleQuantityAdjustButtonClick(button);

  const handleClearButtonClick = handler.handleClearButtonClick;
  const handleSortNameButtonClick = handler.handleSortNameButtonClick;
  const handleSortQuantityButtonClick = handler.handleSortQuantityButtonClick;
  const handleAddToCartButtonClick = handler.handleAddToCartButtonClick;

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
    incrementButton.forEach((button: any) => {
      button.addEventListener('click', () => handleQuantityAdjustButtonClick(button));
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
