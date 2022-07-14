import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { SideBarItem } from "../shared/SideBarItem/index.js";
import { dataProducts } from "../../dataProducts/index.js";
import { ProductCard } from "../ProductCard/index.js";
import { printProducts } from "../ContainerProducts/index.js";

importCSS("./src/components/SideBar/sideBar.css");

export const SideBar = () => {
  const $sideBarTitle = createElement({
    tagName: ["h3"],
    className: ["side-bar-title"],
    textContent: "Filtrar produtos por:",
  });
  const $sideBarBoxTitle = createElement({
    tagName: "div",
    className: ["side-bar-box-title"],
    children: [$sideBarTitle],
  });

  const $sideBarFilterItemMasc = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Masculino",
  });

  const $sideBarFilterItemFem = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Feminino",
  });

  const $sideBarFilterItemKids = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Infantil",
  });

  const $sideBarFilterItemPet = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Pet",
  });
  const $sideBarFilterItemFreteFree = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Frete grátis",
  });
  const $sideBarFilterItemBestSellers = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Mais vendidos",
  });
  const $productsAll = SideBarItem({
    src: "./src/assets/seta-esquerda.png",
    filterType: "Todos os produtos",
  });

  getTypeProducts([
    $sideBarFilterItemMasc,
    $sideBarFilterItemFem,
    $sideBarFilterItemKids,
    $sideBarFilterItemPet,
    $sideBarFilterItemFreteFree,
    $sideBarFilterItemBestSellers,
    $productsAll,
  ]);

  const $sideBarFilterList = createElement({
    tagName: "ul",
    className: ["side-bar-Filter-list"],
    children: [
      $sideBarFilterItemMasc,
      $sideBarFilterItemFem,
      $sideBarFilterItemKids,
      $sideBarFilterItemPet,
      $sideBarFilterItemFreteFree,
      $sideBarFilterItemBestSellers,
      $productsAll,
    ],
  });

  const $sideBar = createElement({
    tagName: "div",
    className: ["side-bar"],
    children: [$sideBarBoxTitle, $sideBarFilterList],
  });

  return $sideBar;
};

const getTypeProducts = (listTypeFilter) => {
  listTypeFilter.forEach((productsType) => {
    productsType.addEventListener("click", () => {
      filterProducts(productsType.textContent);
    });
  });
};

const filterProducts = (type) => {
  const $ul = document.querySelector(".list-products");
  const products = dataProducts().products.filter((item) => {
    if (type === "Frete grátis") return item.freteFree;
    if (type === "Mais vendidos") return item.bestSellers;
    if (type === "Todos os produtos") return item;
    return item.modelType === type;
  });

  printProducts($ul, products);
};
