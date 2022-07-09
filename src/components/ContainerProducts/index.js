import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { ProductCard } from "../ProductCard/index.js";
import { dataProducts } from "../../dataProducts/index.js";

importCSS("./src/components/ContainerProducts/containerProducts.css");

export const ContainerProducts = () => {
  const $listProducts = createElement({
    tagName: "ul",
    className: ["list-products"],
  });
  const data = dataProducts();

  printProducts($listProducts, data.products);

  const $containerProducts = createElement({
    tagName: "section",
    className: ["container-products"],
    children: [$listProducts],
  });

  return $containerProducts;
};

export const printProducts = ($listProducts, products) => {
  $listProducts.innerHTML = "";
  products.forEach((itens) => {
    const products = ProductCard(itens);
    $listProducts.appendChild(products);
  });
};
