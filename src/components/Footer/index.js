import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { BoxIconsFooter } from "../BoxIconsFooter/index.js";

importCSS("./src/components/Footer/footer.css");

export const Footer = () => {
  const $boxIconDelivery = BoxIconsFooter({
    src: "./src/assets/caminhao-de-entrega.png",
    infoText: "Nas compras acima de R$ 100 o frete é grátis",
  });

  const $boxIconCard = BoxIconsFooter({
    src: "./src/assets/cartao-de-credito.png",
    infoText: "Parcelamos em até 24X sem juros no cartão de crédito",
  });

  const $boxIconTime = BoxIconsFooter({
    src: "./src/assets/relogio.png",
    infoText: "Entrega até 48 horas",
  });

  const $wrapperIconsFooter = createElement({
    tagName: "div",
    className: ["wrapper-icons-footer"],
    children: [$boxIconDelivery, $boxIconCard, $boxIconTime],
  });
  const $footerContainer = createElement({
    tagName: "section",
    className: ["footer-container"],
    children: [$wrapperIconsFooter],
  });

  return $footerContainer;
};
