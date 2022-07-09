import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { SearchBar } from "../searchBar/index.js";
import { WrapperIconsHeader } from "../WrapperIconsHeader/index.js";
importCSS("./src/components/Header/header.css");

export const Header = () => {
  const $logo = createElement({
    tagName: "img",
    className: ["logo-header"],
    setAttribute: ["src", "./src/assets/logo.png"],
  });

  const $title = createElement({
    tagName: "h1",
    className: ["header-title"],
    textContent: "Bando de loucos",
  });

  const $logoTitle = createElement({
    tagName: "div",
    className: ["logo-title"],
    children: [$logo, $title],
  });
  const $searchBar = SearchBar();
  const $wrapperIconsHeader = WrapperIconsHeader();

  const $header = createElement({
    tagName: "header",
    className: ["header-home"],
    children: [$logoTitle, $searchBar, $wrapperIconsHeader],
  });

  return $header;
};
