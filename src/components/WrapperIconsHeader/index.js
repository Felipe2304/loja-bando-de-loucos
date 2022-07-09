import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/WrapperIconsHeader/wrapperIconsHeader.css");

export const WrapperIconsHeader = () => {
  const $shoppingCartIcon = createElement({
    tagName: "img",
    className: ["icon-header", "shopping-cart"],
    setAttribute: ["src", "./src/assets/carrinho-carrinho.png"],
  });
  const $iconBallCart = createElement({
    tagName: "div",
    className: ["icon-ball", "icon-ball-cart"],
    children: [$shoppingCartIcon],
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
  });

  const openSidebar = () => {
    const $sideBar = document.querySelector(".side-bar");
    $sideBar.classList.toggle("side-bar-open");
  };

  $iconBallFilter.addEventListener("click", openSidebar);

  const $wrapperIconsHeader = createElement({
    tagName: "div",
    className: ["wrapper-icons-header"],
    children: [$iconBallCart, $iconBallFilter],
  });

  return $wrapperIconsHeader;
};
