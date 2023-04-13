import { ModalData } from "../../../types/types";
import whiteLogo from "./../../assets/logo_white.svg";
import closeIcon from "./../../assets/arrow.svg";
import TERMS from "./../../assets/terms.json";

export const renderTermsModal = (modalData: ModalData) => {
  const modalContent = document.querySelector('#modal_content')!;
  modalContent.textContent = '';
  const fragment: DocumentFragment = new DocumentFragment();

  const modalHeader: HTMLDivElement = document.createElement('div');
  modalHeader.className = 'modal-header terms';

  const logo: HTMLImageElement = document.createElement('img');
  logo.src = whiteLogo;
  logo.alt = 'White Logo';

  const title: HTMLDivElement = document.createElement('div');
  title.className = 'title';

  const closeIconImg: HTMLImageElement = document.createElement('img');
  closeIconImg.src = closeIcon;
  closeIconImg.alt = 'Close Icon';
  closeIconImg.className = 'modal-back';

  const headerText: HTMLHeadingElement = document.createElement('h1'); 
  headerText.textContent = 'Terms & Conditions';

  title.append(closeIconImg, headerText);

  modalHeader.append(logo, title);

  const modalBody: HTMLDivElement = document.createElement('div');
  modalBody.className = 'modal-body';

  const hgroup: HTMLElement= document.createElement('hgroup');
  hgroup.innerHTML = TERMS.info;

  const modalAccept: HTMLDivElement = document.createElement('div');
  modalAccept.className = 'modal-accept';

  const label: HTMLLabelElement = document.createElement('label');

  const checkbox: HTMLInputElement = document.createElement('input');
  checkbox.className = 'modal-checkbox';
  checkbox.type = 'checkbox';
  if (modalData.checked) {
    checkbox.checked = true;
  }

  const span: HTMLSpanElement = document.createElement('span');

  label.append(checkbox, span);
  modalAccept.append(label, document.createTextNode('I Agree'));

  const buttonDiv: HTMLDivElement = document.createElement('div');

  const nextButton: HTMLButtonElement = document.createElement('button');
  nextButton.className = `modal-next btn ${modalData.checked ? '' : 'disabled'}`;
  nextButton.textContent = 'Next';
  if (!modalData.checked) {
    nextButton.disabled = true;
  }

  buttonDiv.append(nextButton);
  modalBody.append(hgroup, modalAccept, buttonDiv);
  fragment.append(modalHeader, modalBody);

  modalContent.innerHTML = '';
  modalContent.append(fragment);
};
