import { createElement } from "../createElement/index.js";

export const importCSS = (link) => {
  const $head = document.querySelector("head");
  const $link = createElement({ tagName: "link" });
  $link.setAttribute("rel", "stylesheet");
  $link.setAttribute("href", link);

  $head.appendChild($link);
};
