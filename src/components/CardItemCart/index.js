import { dataListProducts } from "../../crudCart/index.js";
import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { getQuantityOfItens } from "../WrapperIconsHeader/index.js";

import {
  ShowMessageNotProducts,
  printCardList,
  getTotalProducts,
  subTotalProducts,
} from "../ContainerCart/index.js";

importCSS("./src/components/CardItemCart/cardItemCart.css");

export const CardItemCart = (products, index) => {
  const $productImg = createElement({
    tagName: "img",
    className: ["product-img"],
    setAttribute: ["src", products.photo],
  });

  const $boxProductImg = createElement({
    tagName: "div",
    className: ["box-product-img"],
    children: [$productImg],
  });

  const $descriptionProductCard = createElement({
    tagName: "h4",
    className: ["description-product-card"],
    textContent: `${products.description}`,
  });

  const $trashButton = createElement({
    tagName: "img",
    className: ["trash-button"],
    setAttribute: ["src", "./src/assets/trash.png"],
    onclick: () => {
      dataListProducts.delete(index);
      printCardList();
      ShowMessageNotProducts();
      getTotalProducts();
      subTotalProducts();
      getQuantityOfItens();
    },
  });

  const $wrapperTopCard = createElement({
    tagName: "div",
    className: ["wrapper-top-card"],
    children: [$descriptionProductCard, $trashButton],
  });

  let quantitySelect = 0;

  const $buttonSelectDecrease = createElement({
    tagName: "button",
    className: ["button-select", "button-select-decrease"],
    textContent: "-",
    onclick: () => {
      if ($infoSelectedText.textContent > 1) {
        quantitySelect += -1;
        dataListProducts.upload(index, quantitySelect);
        printQuantitySelected();
        subTotalProducts();
        $infoSelectedText.textContent = quantitySelect;
      }
    },
  });

  const $infoSelectedText = createElement({
    tagName: "div",
    className: ["info-selected-text"],
  });
  const $buttonSelectAdd = createElement({
    tagName: "button",
    className: ["button-select", "button-select-add"],
    textContent: "+",
    onclick: () => {
      quantitySelect += 1;
      dataListProducts.upload(index, quantitySelect);
      printQuantitySelected();
      subTotalProducts();
      $infoSelectedText.textContent = quantitySelect;
    },
  });

  const $selectQuantityWrapper = createElement({
    tagName: "div",
    className: ["select-quantity-wrapper"],
    children: [$buttonSelectDecrease, $infoSelectedText, $buttonSelectAdd],
  });

  const $priceTextProduct = createElement({
    tagName: "strong",
    className: ["price-text-products"],
    textContent: `R$ ${products.price}`,
  });

  const $wrapperBottomCard = createElement({
    tagName: "div",
    className: ["wrapper-bottom-card"],
    children: [$selectQuantityWrapper, $priceTextProduct],
  });

  const $boxInfoCard = createElement({
    tagName: "div",
    className: ["box-info-card"],
    children: [$wrapperTopCard, $wrapperBottomCard],
  });

  const $infoWrapperProductsCart = createElement({
    tagName: "div",
    className: ["info-wrapper-products-cart"],
    children: [$boxProductImg, $boxInfoCard],
  });

  const $card = createElement({
    tagName: "li",
    className: ["card-item-cart"],
    children: [$infoWrapperProductsCart],
  });

  return $card;
};

export const printQuantitySelected = () => {
  const $infoSelectedText = document.querySelector(".info-selected-text");
  dataListProducts.read().forEach((item) => {
    console.log(item, item.quantity);
    $infoSelectedText.textContent = `${item.quantity}`;
  });
};
