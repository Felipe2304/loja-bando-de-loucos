import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/CardItemCart/cardItemCart.css");

export const CardItemCart = (products) => {
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
      console.log("excluir card");
    },
  });

  const $wrapperTopCard = createElement({
    tagName: "div",
    className: ["wrapper-top-card"],
    children: [$descriptionProductCard, $trashButton],
  });

  const $selectQuantity = createElement({
    tagName: "select",
    className: ["select-quantity"],
  });

  addQuantityProducts($selectQuantity);

  const $priceTextProduct = createElement({
    tagName: "strong",
    className: ["price-text-products"],
    textContent: `R$ ${products.price}`,
  });

  const $wrapperBottomCard = createElement({
    tagName: "div",
    className: ["wrapper-bottom-card"],
    children: [$selectQuantity, $priceTextProduct],
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

const addQuantityProducts = ($selectQuantity) => {
  for (let i = 1; i <= 10; i++) {
    const $option = createElement({
      tagName: "option",
      textContent: `${i}`,
    });

    $selectQuantity.appendChild($option);
  }
};
