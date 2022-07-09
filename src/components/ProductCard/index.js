import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";

importCSS("./src/components/ProductCard/productCard.css");

export const ProductCard = (infoProducts) => {
  const $productImage = createElement({
    tagName: "img",
    className: ["product-image"],
    setAttribute: ["src", infoProducts.photo],
  });

  const $descriptionProduct = createElement({
    tagName: "span",
    className: ["description-product"],
    textContent: `${infoProducts.description}`,
  });

  const $priceProduct = createElement({
    tagName: "span",
    className: ["price-product"],
    textContent: `R$ ${infoProducts.price}`,
  });

  const $buttonCard = createElement({
    tagName: "button",
    className: ["button-card"],
    textContent: "Adicionar ao carrinho",
  });

  const $infoBoxCard = createElement({
    tagName: "div",
    className: ["info-box-card"],
    children: [$descriptionProduct, $priceProduct],
  });

  freteFreeText($infoBoxCard, infoProducts);

  const $card = createElement({
    tagName: "li",
    className: ["card-products"],
    children: [$productImage, $infoBoxCard, $buttonCard],
  });

  return $card;
};

const freteFreeText = ($infoBoxCard, infoProducts) => {
  if (infoProducts.price >= 100) {
    const $freteFreeText = createElement({
      tagName: "strong",
      className: ["frete-free-text"],
      textContent: "Frete Grátis",
    });

    $infoBoxCard.appendChild($freteFreeText);
  }
};
