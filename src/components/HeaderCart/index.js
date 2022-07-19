import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { Header } from "../Header/index.js";
import { LogoTitle } from "../shared/LogoTitle/index.js";

importCSS("./src/components/HeaderCart/headerCart.css");

export const HeaderCart = () => {
  const $logoTitle = LogoTitle();
  const $headerCart = createElement({
    tagName: "header",
    className: ["header-cart"],
    children: [$logoTitle],
  });

  return $headerCart;
};

export const printHeaderCart = ($root) => {
  const $headerCart = HeaderCart();

  $root.appendChild($headerCart);
};

export const removeHeaderCart = () => {
  const $headerCart = document.querySelector(".header-cart");

  $headerCart.remove();
};
