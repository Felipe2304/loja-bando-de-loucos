import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { printProducts } from "../ContainerProducts/index.js";
import { dataProducts } from "../../dataProducts/index.js";

importCSS("./src/components/searchBar/searchBar.css");

export const SearchBar = () => {
  const $inputSearch = createElement({
    tagName: "input",
    className: ["input-search"],
    setAttribute: ["placeholder", "Digite o nome do  produto"],
  });

  $inputSearch.addEventListener("input", () => {
    searchProduct($inputSearch.value);
  });

  return $inputSearch;
};

const searchProduct = (searchValue) => {
  const $listProducts = document.querySelector(".list-products");

  const products = dataProducts().products.filter((item) => {
    return item.description.includes(searchValue);
  });

  printProducts($listProducts, products);
};
