import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { ProductCard } from "../ProductCard/index.js";
import { dataProducts } from "../../dataProducts/index.js";
import { dataListProducts } from "../../crudCart/index.js";
import { printToast } from "../Toast/index.js";
import { getQuantityOfItens } from "../WrapperIconsHeader/index.js";
import { printCardList } from "../ContainerCart/index.js";

import { getTotalProducts, subTotalProducts } from "../ContainerCart/index.js";
importCSS("./src/components/ContainerProducts/containerProducts.css");

export const ContainerProducts = () => {
  const $productsTitleFiltered = createElement({
    tagName: "div",
    className: ["products-title-filtered"],
  });

  const $listProducts = createElement({
    tagName: "ul",
    className: ["list-products"],
  });
  const data = dataProducts();

  printProducts($listProducts, data.products);

  const $containerProducts = createElement({
    tagName: "section",
    className: ["container-products"],
    children: [$productsTitleFiltered, $listProducts],
  });

  return $containerProducts;
};

export const printProducts = ($listProducts, products) => {
  $listProducts.innerHTML = "";
  products.forEach((infoProducts) => {
    const $products = ProductCard(infoProducts);
    const $buttonCard = $products.querySelector(".button-card");
    $listProducts.appendChild($products);
    getInfoProducts($buttonCard, infoProducts);
  });
};

const getInfoProducts = ($buttonCard, infoProducts) => {
  $buttonCard.addEventListener("click", () => {
    dataListProducts.create(infoProducts);
    getQuantityOfItens();
    printToast();
    printCardList();
    getTotalProducts();
    subTotalProducts();
  });
};
