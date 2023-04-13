import { CartItem } from '../../types/types';
import minusBlack from './../assets/minus_black.svg';
import plusBlack from './../assets/plus_black.svg';

export const Cart = {
  key: 'assa_cart',
  items: [] as CartItem[],
  init(): void {
    try {
      let _items = localStorage.getItem(Cart.key);
      if (_items) {
        Cart.items = JSON.parse(_items);
      } else {
        Cart.items = [
          { id: 1, name: 'Milk', qty: 1 },
          { id: 2, name: 'Eggs', qty: 1 },
          { id: 3, name: 'Flour', qty: 1 },
          { id: 4, name: 'Sugar', qty: 1 },
          { id: 5, name: 'Chocolate Chips', qty: 1 },
        ];
        Cart.sync();
      }
    } catch (error) {
      console.error('Error initializing cart:', error);
    }
  },
  sync(): void {
    try {
      let _cart = JSON.stringify(Cart.items);
      localStorage.setItem(Cart.key, _cart);
    } catch (error) {
      console.error('Error syncing cart:', error);
    }
  },
  addItem(item: CartItem): void {
    Cart.items.push(item);
    Cart.sync();
  },
  removeItem(id: number): void {
    Cart.items = Cart.items.filter(item => item.id !== id);
    Cart.sync();
  },
  updateItem(id: number, qty: number): void {
    let item = Cart.items.find(item => item.id === id);
    if (item) {
      item.qty = qty;
      Cart.sync();
    }
  },
  clear(): void {
    Cart.items = [];
    Cart.sync();
  },
  sortName(): void {
    const isAscending: Boolean = Cart.items.every((item, index, array) => {
      if (index === 0) {
        return true;
      }
      return array[index - 1].name < item.name;
    });
    if (isAscending) {
      Cart.items.reverse();
    } else {
      Cart.items.sort((a, b) => (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)));
    }
    Cart.sync();
  },
  sortQty(): void {
    const isAscending: Boolean = Cart.items.every((item, index, array) => {
      if (index === 0) {
        return true;
      }
      return array[index - 1].qty <= item.qty;
    });
    if (isAscending) {
      Cart.items.sort((a, b) => b.qty - a.qty);
    } else {
      Cart.items.sort((a, b) => a.qty - b.qty);
    }
    Cart.sync();
  },
  showCart(): void {
    const cartSelection = document.querySelector('#cart') as HTMLDivElement;
    cartSelection.textContent = '';

    const fragment = document.createDocumentFragment();

    Cart.items.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      const itemName = document.createElement('h3');
      itemName.classList.add('cart-item-name');
      itemName.textContent = item.name;
      cartItem.append(itemName);

      const qtyContainer = document.createElement('div');
      qtyContainer.classList.add('cart-item-qty');

      const minusBtn = document.createElement('button');
      minusBtn.classList.add('cart-item-qty-minus');
      minusBtn.dataset.id = item.id.toString();
      minusBtn.dataset.qty = item.qty.toString();

      const minusImg = document.createElement('img');
      minusImg.src = minusBlack;
      minusImg.alt = 'decrease quantity';
      minusBtn.append(minusImg);
      qtyContainer.append(minusBtn);

      const itemQty = document.createElement('p');
      itemQty.textContent = item.qty.toString();
      qtyContainer.append(itemQty);

      const plusBtn = document.createElement('button');
      plusBtn.classList.add('cart-item-qty-plus');
      plusBtn.dataset.id = item.id.toString();
      plusBtn.dataset.qty = item.qty.toString();

      const plusImg = document.createElement('img');
      plusImg.src = plusBlack;
      plusImg.alt = 'increment quantity';
      plusBtn.append(plusImg);
      qtyContainer.append(plusBtn);

      cartItem.append(qtyContainer);
      fragment.append(cartItem);
    });

    cartSelection.append(fragment);
  }
};
