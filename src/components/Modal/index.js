import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { removeHeaderCart } from "../HeaderCart/index.js";
import { printHeaderHome } from "../Header/index.js";
import { removeContainerCart } from "../ContainerCart/index.js";
import { printHome } from "../../home/index.js";

importCSS("./src/components/Modal/modal.css");

export const Modal = () => {
  const $iconClose = createElement({
    tagName: "img",
    className: ["icon-close"],
    setAttribute: ["src", "./src/assets/close.png"],
    onclick: () => {
      removeContainerModal();
    },
  });

  const $boxModalMessage = createElement({
    tagName: "p",
    className: ["box-modal-message"],
    textContent:
      "Aperte no botão abaixo para confirmar a compra e voltar para a página de vendas",
  });

  const $headerModal = createElement({
    tagName: "div",
    className: ["header-modal"],
    children: [$iconClose],
  });

  const $modalButton = createElement({
    tagName: "button",
    className: ["modal-button"],
    textContent: "Confirmar Compra",
    onclick: () => {
      const $root = document.querySelector("#root");
      removeContainerModal();
      removeHeaderCart();
      printHeaderHome($root);
      removeContainerCart();
      printHome($root);
    },
  });

  const $boxModalInfo = createElement({
    tagName: "div",
    className: ["box-modal-info"],
    children: [$boxModalMessage, $modalButton],
  });

  const $boxModal = createElement({
    tagName: "div",
    className: ["box-modal"],
    children: [$headerModal, $boxModalInfo],
  });
  const $containerModal = createElement({
    tagName: "div",
    className: ["container-modal"],
    children: [$boxModal],
  });

  return $containerModal;
};

const removeContainerModal = () => {
  const $containerModal = document.querySelector(".container-modal");
  $containerModal.remove();
};
