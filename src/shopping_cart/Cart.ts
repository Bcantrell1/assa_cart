import { CartItem } from '../../types/types';
import minusBlack from '../../public/minus_black.svg';
import plusBlack from '../../public/plus_black.svg';

export const Cart = {
  key: 'assa_cart',
  items: [] as CartItem[],
  init() {
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
  sync() {
    try {
      let _cart = JSON.stringify(Cart.items);
      localStorage.setItem(Cart.key, _cart);
    } catch (error) {
      console.error('Error syncing cart:', error);
    }
  },
  addItem(item: CartItem) {
    Cart.items.push(item);
    Cart.sync();
  },
  removeItem(id: number) {
    Cart.items = Cart.items.filter(item => item.id !== id);
    Cart.sync();
  },
  updateItem(id: number, qty: number) {
    let item = Cart.items.find(item => item.id === id);
    if (item) {
      item.qty = qty;
      Cart.sync();
    }
  },
  clear() {
    Cart.items = [];
    Cart.sync();
  },
  sortName() {
    const isAscending = Cart.items.every((item, index, array) => {
      if (index === 0) {
        return true;
      }
      return array[index - 1].name <= item.name;
    });
    if (isAscending) {
      Cart.items.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      Cart.items.sort((a, b) => a.name.localeCompare(b.name));
    }
    Cart.sync();
  },
  sortQty() {
    const isAscending = Cart.items.every((item, index, array) => {
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
  showCart() {
    let cartSelection = document.querySelector('#cart') as HTMLDivElement;
    cartSelection.innerHTML = '';
    Cart.items.forEach(item => {
      let cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <div class="cart-item">
          <h3 class="cart-item-name">${item.name}</h3>
          <div class="cart-item-qty">
            <button class="cart-item-qty-minus" data-id="${item.id}" data-qty="${item.qty}"><img src="${minusBlack}" alt="" /></button>
            <p>${item.qty}</p>
            <button class="cart-item-qty-plus" data-id="${item.id}" data-qty="${item.qty}"><img src="${plusBlack}" alt="" /></button>
          </div>
        </div>
      `;
      cartSelection.appendChild(cartItem);
    });
  },
};
