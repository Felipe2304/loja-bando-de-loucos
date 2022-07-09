import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/searchBar/searchBar.css");

export const SearchBar = () => {
  const $input = createElement({
    tagName: "input",
    className: ["input-search"],
    setAttribute: ["placeholder", "Digite o produto"],
  });

  const $searchButtonIcon = createElement({
    tagName: "img",
    className: ["search-button-icon"],
    setAttribute: ["src", "./src/assets/lupa.png"],
  });

  const $searchButton = createElement({
    tagName: "button",
    className: ["search-button"],
    children: [$searchButtonIcon],
  });

  const $searchWrapper = createElement({
    tagName: "div",
    className: ["search-wrapper"],
    children: [$input, $searchButton],
  });

  return $searchWrapper;
};
