import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { printHome } from "../../home/index.js";
import { removeHeaderCart } from "../HeaderCart/index.js";
import { printHeaderHome } from "../Header/index.js";
import { CardItemCart } from "../CardItemCart/index.js";

importCSS("./src/components/ContainerCart/containerCart.css");

const CartContent = () => {
  const $iconHome = createElement({
    tagName: "img",
    className: ["icon-home"],
    setAttribute: ["src", "./src/assets/home.png"],
  });

  const $iconHomeWrapperTitle = createElement({
    tagName: "span",
    className: ["icon-home-wrapper-title"],
    textContent: "Voltar para home",
  });

  const $iconHomeWrapper = createElement({
    tagName: "div",
    className: ["icon-home-wrapper"],
    children: [$iconHome, $iconHomeWrapperTitle],
    onclick: () => {
      removeHeaderCart();
      printHeaderHome();
      removeContainerCart();
      printHome();
    },
  });

  const $cartContentTitle = createElement({
    tagName: "h2",
    className: ["cart-content-title"],
    textContent: "Seu carrinho",
  });

  const $totalProductsText = createElement({
    tagName: "span",
    className: ["total-products-text"],
    textContent: `Total(3 produtos)`,
  });

  const $priceText = createElement({
    tagName: "strong",
    className: ["price-text"],
    textContent: `R$ 160,00`,
  });

  const $totalProducts = createElement({
    tagName: "div",
    className: ["total-products"],
    children: [$totalProductsText, $priceText],
  });

  const $cardItemCart = CardItemCart();

  const $listCardCart = createElement({
    tagName: "ul",
    className: ["list-card-cart"],
    children: [$cardItemCart],
  });

  const $cartContent = createElement({
    tagName: "div",
    className: ["cart-content"],
    children: [
      $iconHomeWrapper,
      $cartContentTitle,
      $totalProducts,
      $listCardCart,
    ],
  });

  return $cartContent;
};

const BuyContent = () => {
  const $title = createElement({
    tagName: "h3",
    className: ["buy-title"],
    textContent: "Resumo do pedido",
  });

  const $subTotalOfProductsText = createElement({
    tagName: "span",
    className: ["sub-total-of-products-text", "text-buy"],
    textContent: "Subtotal de produtos",
  });

  const $subTotalOfProductsPrice = createElement({
    tagName: "strong",
    className: ["sub-total-of-products-price", "text-buy"],
    textContent: `R$ ${"160,00"}`,
  });

  const $subTotalOfProducts = createElement({
    tagName: "div",
    className: ["sub-total-of-products", "space-elements"],
    children: [$subTotalOfProductsText, $subTotalOfProductsPrice],
  });

  const $deliveryFeeText = createElement({
    tagName: "span",
    className: ["delivery-fee-text", "text-buy"],
    textContent: "Entrega",
  });
  const $deliveryFeePrice = createElement({
    tagName: "span",
    className: ["delivery-fee-price", "text-buy"],
    textContent: `${"R$ 40,00"}`,
  });

  const $deliveryFee = createElement({
    tagName: "div",
    className: ["delivery-fee", "space-elements"],
    children: [$deliveryFeeText, $deliveryFeePrice],
  });

  const $division = createElement({
    tagName: "div",
    className: ["division"],
  });

  const $boxTotalText = createElement({
    tagName: "span",
    className: ["box-total-text"],
    textContent: "Total",
  });

  const $boxTotalPrice = createElement({
    tagName: "span",
    className: ["box-total-price"],
    textContent: `R$ ${"200,00"}`,
  });

  const $boxTotal = createElement({
    tagName: "div",
    className: ["box-total", "space-elements"],
    children: [$boxTotalText, $boxTotalPrice],
  });

  const $buttonBuy = createElement({
    tagName: "button",
    className: ["button-buy"],
    textContent: "Finalizar a compra",
  });

  const $buyContentWrapper = createElement({
    tagName: "div",
    className: ["buy-content-wrapper"],
    children: [
      $title,
      $subTotalOfProducts,
      $deliveryFee,
      $division,
      $boxTotal,
      $buttonBuy,
    ],
  });

  const $consumeAttentionItemHelp = PrintConsumeAttentionItemList({
    consumerText: "Ajuda",
  });
  const $consumeAttentionItemRefunds = PrintConsumeAttentionItemList({
    consumerText: "Reembolsos",
  });
  const $consumeAttentionItemDeliveryAndFrete = PrintConsumeAttentionItemList({
    consumerText: "Entregas e fretes",
  });
  const $consumeAttentionItemSwapAndDevolution = PrintConsumeAttentionItemList({
    consumerText: "Trocas e devoluções",
  });

  const $consumeAttentionList = createElement({
    tagName: "ul",
    className: ["consume-attention-list"],
    children: [
      $consumeAttentionItemHelp,
      $consumeAttentionItemRefunds,
      $consumeAttentionItemDeliveryAndFrete,
      $consumeAttentionItemSwapAndDevolution,
    ],
  });

  const $consumeAttention = createElement({
    tagName: "nav",
    className: ["consume-attention"],
    children: [$consumeAttentionList],
  });
  const $buyContent = createElement({
    tagName: "div",
    className: ["buy-content"],
    children: [$buyContentWrapper, $consumeAttention],
  });

  return $buyContent;
};

export const ContainerCart = () => {
  const $cartContent = CartContent();
  const $buyContent = BuyContent();

  const $containerCart = createElement({
    tagName: "section",
    className: ["container-cart"],
    children: [$cartContent, $buyContent],
  });

  return $containerCart;
};

const PrintConsumeAttentionItemList = (text) => {
  const $linkConsumer = createElement({
    tagName: "a",
    className: ["link-consumer"],
    textContent: text.consumerText,
    setAttribute: ["href", "#"],
  });
  const $consumeAttentionItem = createElement({
    tagName: "li",
    className: ["consume-attention-item"],
    children: [$linkConsumer],
  });

  return $consumeAttentionItem;
};

export const printContainerCart = () => {
  const $containerCart = ContainerCart();
  const $root = document.querySelector("#root");

  $root.appendChild($containerCart);
};

const removeContainerCart = () => {
  const $containerCart = document.querySelector(".container-cart");

  $containerCart.remove();
};
