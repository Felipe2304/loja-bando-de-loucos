import { createElement } from "../../../utils/createElement/index.js";

export const BoxIconsFooter = (info) => {
  const $icon = createElement({
    tagName: "img",
    className: ["icon-footer"],
    setAttribute: ["src", info.src],
  });

  const $text = createElement({
    tagName: "p",
    className: ["box-text"],
    textContent: info.infoText,
  });
  const $boxIconsFooter = createElement({
    tagName: "div",
    className: ["box-icons-footer"],
    children: [$icon, $text],
  });

  return $boxIconsFooter;
};
