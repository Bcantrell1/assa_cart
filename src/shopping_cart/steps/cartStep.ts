import whiteLogo from "./../../assets/logo_white.svg";
import closeIcon from "./../../assets/arrow.svg";
import sortIcon from "./../../assets/sorting.svg";
import pinkPlusIcon from "./../../assets/plus_pink.svg"; 
import { Cart } from "../Cart";

export const renderCartModal = (modalContent: HTMLDivElement) => {
  modalContent.textContent = '';
  Cart.init();

  const fragment: DocumentFragment = document.createDocumentFragment();

  const header: HTMLDivElement = document.createElement('div');
  header.classList.add('modal-header');

  const logoImg: HTMLImageElement = document.createElement('img');
  logoImg.src = whiteLogo;
  logoImg.alt = 'White Logo';

  const title: HTMLDivElement = document.createElement('div');
  title.classList.add('title');

  const modalBack: HTMLImageElement = document.createElement('img');
  modalBack.classList.add('modal-back');
  modalBack.src = closeIcon;
  modalBack.alt = 'Close Icon';

  const h1: HTMLHeadingElement = document.createElement('h1');
  h1.textContent = 'Shopping Cart';

  title.append(modalBack, h1);
  header.append(logoImg, title);

  const body: HTMLDivElement = document.createElement('div');
  body.classList.add('modal-body');

  const cartHeader: HTMLDivElement = document.createElement('div');
  cartHeader.classList.add('cart-header');

  const nameSortButton: HTMLButtonElement = document.createElement('button');
  nameSortButton.id = 'name_sort';
  nameSortButton.classList.add('cart-header-item');
  nameSortButton.textContent = 'ITEM NAME';

  const nameSortIcon: HTMLImageElement = document.createElement('img');
  nameSortIcon.src = sortIcon;
  nameSortIcon.alt = '';

  nameSortButton.append(nameSortIcon);

  const qtySortButton: HTMLButtonElement = document.createElement('button');
  qtySortButton.id = 'qty_sort';
  qtySortButton.classList.add('cart-header-item');
  qtySortButton.textContent = 'QTY';

  const qtySortIcon: HTMLImageElement = document.createElement('img');
  qtySortIcon.src = sortIcon;
  qtySortIcon.alt = '';

  qtySortButton.append(qtySortIcon);

  cartHeader.append(nameSortButton, qtySortButton);

  const cartDiv: HTMLDivElement = document.createElement('div');
  cartDiv.id = 'cart';

  const cartAddButton: HTMLButtonElement = document.createElement('button');
  cartAddButton.id = 'cart_add';

  const pinkPlusIconImg: HTMLImageElement = document.createElement('img');
  pinkPlusIconImg.src = pinkPlusIcon;
  pinkPlusIconImg.alt = '';

  cartAddButton.append(pinkPlusIconImg, 'Add Item');

  const cartClearButton: HTMLButtonElement = document.createElement('button');
  cartClearButton.id = 'cart_clear';
  cartClearButton.textContent = 'Clear All';

  body.append(cartHeader, cartDiv, cartAddButton, cartClearButton);

  fragment.append(header, body);
  modalContent.appendChild(fragment);

  Cart.showCart();
};
