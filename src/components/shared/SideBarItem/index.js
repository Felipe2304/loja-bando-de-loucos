import { createElement } from "../../../utils/createElement/index.js";
import { importCSS } from "../../../utils/importCSS/index.js";

importCSS("./src/components/shared/SideBarItem/sideBarItem.css");

export const SideBarItem = (propsItem) => {
  const $arrowIcon = createElement({
    tagName: "img",
    className: ["arrow-icon"],
    setAttribute: ["src", propsItem.src],
  });

  const $textType = createElement({
    tagName: "span",
    className: ["text-type"],
    textContent: `${propsItem.filterType}`,
  });

  const $sideBarItem = createElement({
    tagName: "li",
    className: ["side-bar-item"],
    children: [$arrowIcon, $textType],
  });

  return $sideBarItem;
};
