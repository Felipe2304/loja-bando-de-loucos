import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { printHome } from "../../home/index.js";
import { removeHeaderCart } from "../HeaderCart/index.js";
import { printHeaderHome } from "../Header/index.js";
import { CardItemCart } from "../CardItemCart/index.js";
import { dataListProducts } from "../../crudCart/index.js";
import { Modal } from "../Modal/index.js";
import { printQuantitySelected } from "../CardItemCart/index.js";

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
      const $root = document.querySelector("#root");
      removeHeaderCart();
      printHeaderHome($root);
      removeContainerCart();
      printHome($root);
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
    textContent: `Total(0 produtos)`,
  });
  const $priceText = createElement({
    tagName: "strong",
    className: ["price-text"],
    textContent: `R$ 0`,
  });

  const $totalProducts = createElement({
    tagName: "div",
    className: ["total-products"],
    children: [$totalProductsText, $priceText],
  });

  const $listCardCart = createElement({
    tagName: "ul",
    className: ["list-card-cart"],
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

  if (dataListProducts.read().length === 0)
    $cartContent.appendChild(NotProducts());

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
    textContent: "R$ 0",
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
    textContent: "R$ 0",
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
    onclick: () => {
      const $root = document.querySelector("#root");
      const $modal = Modal();

      $root.appendChild($modal);
    },
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

export const ShowMessageNotProducts = () => {
  const $cartContent = document.querySelector(".cart-content");
  const $notProductsBox = NotProducts();
  if (dataListProducts.read().length === 0) {
    $cartContent.appendChild($notProductsBox);
  } else {
    $notProductsBox.remove();
  }
};

const NotProducts = () => {
  const $iconCart = createElement({
    tagName: "img",
    className: ["icon-cart-not"],
    setAttribute: ["src", "./src/assets/carrinho-vazio.png"],
  });

  const $notText = createElement({
    tagName: "p",
    className: ["not-text"],
    textContent: "Não há nenhum produto na lista de compras atualmente",
  });
  const $NotBox = createElement({
    tagName: "div",
    className: ["not-product-box"],
    children: [$iconCart, $notText],
  });

  return $NotBox;
};

export const subTotalProducts = () => {
  const totalPrice = dataListProducts.read().reduce((acc, itens) => {
    return (acc += itens.price * itens.quantity);
  }, 0);

  const $subTotalOfProducts = document.querySelector(
    ".sub-total-of-products-price"
  );
  $subTotalOfProducts.textContent = `R$ ${totalPrice.toFixed(2)}`;

  const $priceText = document.querySelector(".price-text");
  $priceText.textContent = `R$ ${totalPrice.toFixed(2)}`;
  calcFrete(totalPrice);
};

const calcFrete = (totalPrice) => {
  const $deliveryFeePrice = document.querySelector(".delivery-fee-price");
  const $totalPrice = document.querySelector(".box-total-price");

  let taxa = (totalPrice * 15) / 100;

  if (totalPrice < 100) {
    const totalValue = taxa + totalPrice;
    $deliveryFeePrice.textContent = `R$ ${taxa.toFixed(2)}`;
    $totalPrice.textContent = `R$ ${totalValue.toFixed(2)}`;
  } else if (totalPrice > 100) {
    taxa = 0;
    $deliveryFeePrice.textContent = `R$ ${taxa.toFixed(2)}`;
    $totalPrice.textContent = `R$ ${totalPrice.toFixed(2)}`;
  }
};

export const getTotalProducts = () => {
  const totalItensProducts = dataListProducts.read().length;
  const $totalProductsText = document.querySelector(".total-products-text");
  $totalProductsText.textContent = `Total(${totalItensProducts} produtos)`;
};

export const printContainerCart = ($root) => {
  const $containerCart = ContainerCart();

  $root.appendChild($containerCart);

  printCardList();
  printQuantitySelected();
  getTotalProducts();
};

export const removeContainerCart = () => {
  const $containerCart = document.querySelector(".container-cart");

  $containerCart.remove();
};

export const printCardList = () => {
  const $listCard = document.querySelector(".list-card-cart");

  $listCard.innerHTML = "";
  dataListProducts.read().forEach((products, index) => {
    const card = CardItemCart(products, index);
    $listCard.appendChild(card);
  });
};
