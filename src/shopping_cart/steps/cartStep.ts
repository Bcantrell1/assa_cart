import whiteLogo from "./../../assets/logo_white.svg";
import closeIcon from "./../../assets/arrow.svg";
import sortIcon from "./../../assets/sorting.svg";
import pinkPlusIcon from "./../../assets/plus_pink.svg"; 
import { Cart } from "../Cart";

export const renderCartModal = (modalContent: HTMLDivElement) => {
  modalContent.innerHTML = '';
  Cart.init();

  const fragment = document.createDocumentFragment();

  const header = document.createElement('div');
  header.classList.add('modal-header');

  const logoImg = document.createElement('img');
  logoImg.src = whiteLogo;
  logoImg.alt = 'White Logo';

  const title = document.createElement('div');
  title.classList.add('title');

  const modalBack = document.createElement('img');
  modalBack.classList.add('modal-back');
  modalBack.src = closeIcon;
  modalBack.alt = 'Close Icon';

  const h1 = document.createElement('h1');
  h1.textContent = 'Shopping Cart';

  title.append(modalBack, h1);
  header.append(logoImg, title);

  const body = document.createElement('div');
  body.classList.add('modal-body');

  const cartHeader = document.createElement('div');
  cartHeader.classList.add('cart-header');

  const nameSortButton = document.createElement('button');
  nameSortButton.id = 'name_sort';
  nameSortButton.classList.add('cart-header-item');
  nameSortButton.textContent = 'ITEM NAME';

  const nameSortIcon = document.createElement('img');
  nameSortIcon.src = sortIcon;
  nameSortIcon.alt = '';

  nameSortButton.append(nameSortIcon);

  const qtySortButton = document.createElement('button');
  qtySortButton.id = 'qty_sort';
  qtySortButton.classList.add('cart-header-item');
  qtySortButton.textContent = 'QTY';

  const qtySortIcon = document.createElement('img');
  qtySortIcon.src = sortIcon;
  qtySortIcon.alt = '';

  qtySortButton.append(qtySortIcon);

  cartHeader.append(nameSortButton, qtySortButton);

  const cartDiv = document.createElement('div');
  cartDiv.id = 'cart';

  const cartAddButton = document.createElement('button');
  cartAddButton.id = 'cart_add';

  const pinkPlusIconImg = document.createElement('img');
  pinkPlusIconImg.src = pinkPlusIcon;
  pinkPlusIconImg.alt = '';

  cartAddButton.append(pinkPlusIconImg, 'Add Item');

  const cartClearButton = document.createElement('button');
  cartClearButton.id = 'cart_clear';
  cartClearButton.textContent = 'Clear All';

  body.append(cartHeader, cartDiv, cartAddButton, cartClearButton);

  fragment.append(header, body);
  modalContent.appendChild(fragment);

  Cart.showCart();
};
