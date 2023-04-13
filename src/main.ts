import './style.css'
import mainLogo from './assets/logo_color.svg'
import shopButton from './assets/button_shopping.svg'
import { ShoppingCart } from './shopping_cart/index';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main id="assa_test">
    <section id="start_modal">
      <img src="${mainLogo}" class="logo" alt="Shopping Bag logo" />
      <button id="start_shopping" type="button"><img src="${shopButton}" alt=""/></button>
    </section>
    <article id="modal_content"></article>
  </main>
`;

const modalElement = document.querySelector<HTMLElement>('#assa_test')!;
const modalContent = document.querySelector<HTMLPreElement>('#modal_content')!;
const startModal = document.querySelector<HTMLDivElement>('#start_modal')!;

export const shoppingCart = ShoppingCart(modalElement);

document.querySelector('#start_shopping')!.addEventListener("click", () => {
  modalContent.style.display = "flex";
  startModal.style.display = "none";
  shoppingCart.init();
});
