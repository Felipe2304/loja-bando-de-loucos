import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/LogoTitle/logoTitle.css");

export const LogoTitle = () => {
  const $logo = createElement({
    tagName: "img",
    className: ["logo-header"],
    setAttribute: ["src", "./src/assets/logo.png"],
  });

  const $title = createElement({
    tagName: "h1",
    className: ["header-title"],
    textContent: "Bando de loucos",
  });

  const $logoTitle = createElement({
    tagName: "div",
    className: ["logo-title"],
    children: [$logo, $title],
  });

  return $logoTitle;
};
