import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/Toast/toast.css");

export const Toast = () => {
  const $iconSusses = createElement({
    tagName: "img",
    className: ["icon-susses"],
    setAttribute: ["src", "./src/assets/sucesso.png"],
  });

  const $toastText = createElement({
    tagName: "strong",
    className: ["toast-text"],
    textContent: "Item adicionado ao carrinho ",
  });

  const $iconCart = createElement({
    tagName: "img",
    className: ["icon-cart-toast"],
    setAttribute: ["src", "./src/assets/carrinho-carrinho.png"],
  });
  const $toast = createElement({
    tagName: "div",
    className: ["toast"],
    children: [$iconSusses, $toastText, $iconCart],
  });

  return $toast;
};

export const printToast = () => {
  const $toast = Toast();
  const $home = document.querySelector(".home");
  $home.appendChild($toast);

  setTimeout(() => {
    $toast.remove();
  }, 3000);
};
