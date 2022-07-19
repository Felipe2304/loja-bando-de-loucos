import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { removeHome } from "../../home/index.js";
import { printContainerCart } from "../ContainerCart/index.js";
import { printHeaderCart } from "../HeaderCart/index.js";
import { removeHeaderHome } from "../Header/index.js";

importCSS("./src/components/WrapperIconsHeader/wrapperIconsHeader.css");

export const WrapperIconsHeader = () => {
  const $shoppingCartIcon = createElement({
    tagName: "img",
    className: ["icon-header", "shopping-cart"],
    setAttribute: ["src", "./src/assets/carrinho-carrinho.png"],
  });

  const $infoQuantityItensCart = createElement({
    tagName: "div",
    className: ["info-quantity-itens-cart"],
    textContent: "0",
  });
  const $iconBallCart = createElement({
    tagName: "div",
    className: ["icon-ball", "icon-ball-cart"],
    children: [$shoppingCartIcon, $infoQuantityItensCart],
    onclick: () => {
      const $root = document.querySelector("#root");
      removeHeaderHome();
      removeHome();
      printHeaderCart($root);
      printContainerCart($root);
    },
  });

  const $filterIcon = createElement({
    tagName: "img",
    className: ["icon-header"],
    setAttribute: ["src", "./src/assets/filtro.png"],
  });

  const $iconBallFilter = createElement({
    tagName: "div",
    className: ["icon-ball", "icon-ball-filter"],
    children: [$filterIcon],
    onclick: () => {
      const $sideBar = document.querySelector(".side-bar");
      $sideBar.classList.toggle("side-bar-open");
    },
  });

  const $wrapperIconsHeader = createElement({
    tagName: "div",
    className: ["wrapper-icons-header"],
    children: [$iconBallCart, $iconBallFilter],
  });

  return $wrapperIconsHeader;
};

export const getQuantityOfItens = (quantity) => {
  const $infoQuantityItensCart = document.querySelector(
    ".info-quantity-itens-cart"
  );
  $infoQuantityItensCart.textContent = quantity;
};
