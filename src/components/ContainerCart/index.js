import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { printHome } from "../../home/index.js";
import { removeHeaderCart } from "../HeaderCart/index.js";
import { printHeaderHome } from "../Header/index.js";
import { CardItemCart } from "../CardItemCart/index.js";

importCSS("./src/components/ContainerCart/containerCart.css");

const CartContent = () => {
  const $iconHome = createElement({
    tagName: "img",
    className: ["icon-home"],
    setAttribute: ["src", "./src/assets/home.png"],
  });

  const $iconHomeWrapperTitle = createElement({
    tagName: "span",
    className: ["icon-home-wrapper-title"],
    textContent: "Voltar para home",
  });

  const $iconHomeWrapper = createElement({
    tagName: "div",
    className: ["icon-home-wrapper"],
    children: [$iconHome, $iconHomeWrapperTitle],
    onclick: () => {
      removeHeaderCart();
      printHeaderHome();
      removeContainerCart();
      printHome();
    },
  });

  const $cartContentTitle = createElement({
    tagName: "h2",
    className: ["cart-content-title"],
    textContent: "Seu carrinho",
  });

  const $totalProductsText = createElement({
    tagName: "span",
    className: ["total-products-text"],
    textContent: `Total(3 produtos)`,
  });

  const $priceText = createElement({
    tagName: "strong",
    className: ["price-text"],
    textContent: `R$ 160,00`,
  });

  const $totalProducts = createElement({
    tagName: "div",
    className: ["total-products"],
    children: [$totalProductsText, $priceText],
  });

  const $cardItemCart = CardItemCart();

  const $listCardCart = createElement({
    tagName: "ul",
    className: ["list-card-cart"],
    children: [$cardItemCart],
  });

  const $cartContent = createElement({
    tagName: "div",
    className: ["cart-content"],
    children: [
      $iconHomeWrapper,
      $cartContentTitle,
      $totalProducts,
      $listCardCart,
    ],
  });

  return $cartContent;
};

const BuyContent = () => {
  const $title = createElement({
    tagName: "h3",
    className: ["buy-title"],
    textContent: "Resumo do pedido",
  });
  const $buyContent = createElement({
    tagName: "div",
    className: ["buy-content"],
    children: [$title],
  });

  return $buyContent;
};

export const ContainerCart = () => {
  const $cartContent = CartContent();
  const $buyContent = BuyContent();

  const $containerCart = createElement({
    tagName: "section",
    className: ["container-cart"],
    children: [$cartContent, $buyContent],
  });

  return $containerCart;
};

export const printContainerCart = () => {
  const $containerCart = ContainerCart();
  const $root = document.querySelector("#root");

  $root.appendChild($containerCart);
};

const removeContainerCart = () => {
  const $containerCart = document.querySelector(".container-cart");

  $containerCart.remove();
};
