import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { printProducts } from "../ContainerProducts/index.js";
import { dataProducts } from "../../dataProducts/index.js";

importCSS("./src/components/searchBar/searchBar.css");

export const SearchBar = () => {
  const $input = createElement({
    tagName: "input",
    className: ["input-search"],
    setAttribute: ["placeholder", "Digite o produto"],
  });

  $input.addEventListener("input", () => {
    searchProduct($input.value);
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

const searchProduct = (searchValue) => {
  const $ul = document.querySelector(".list-products");
  const data = dataProducts().products;

  const products = data.filter((item) => {
    return item.description.includes(searchValue);
  });

  printProducts($ul, products);
};
