import './style.css'
import mainLogo from '/logo_color.svg'
import shopButton from '/button_shopping.svg'
import { ShoppingCart } from './shopping_cart';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main id="assa_test">
    <section id="start_modal">
      <img src="${mainLogo}" class="logo" alt="Shopping Bag logo" />
      <button id="start_shopping" type="button"><img src="${shopButton}" alt=""/></button>
    </section>
    <article id="modal_content"></article>
  </main>
`
const modalElement = document.querySelector('#assa_test') as HTMLElement;
export const shoppingCart = ShoppingCart(modalElement);

const startShopping = (button: HTMLButtonElement) => {
  const startModal = document.querySelector<HTMLDivElement>('#start_modal')!;
  const modalContent = document.querySelector('#modal_content') as HTMLPreElement;

  button.addEventListener("click", () => {
    modalContent.style.display = "flex";
    startModal.style.display = "none";
    shoppingCart.init();
  });
}
startShopping(document.querySelector<HTMLButtonElement>('#start_shopping')!);
