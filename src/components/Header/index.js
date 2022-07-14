import { createElement } from "../../utils/createElement/index.js";
import { importCSS } from "../../utils/importCSS/index.js";
import { SearchBar } from "../searchBar/index.js";
import { WrapperIconsHeader } from "../WrapperIconsHeader/index.js";
import { LogoTitle } from "../shared/LogoTitle/index.js";
importCSS("./src/components/Header/header.css");

export const Header = () => {
  const $logoTitle = LogoTitle();
  const $searchBar = SearchBar();
  const $wrapperIconsHeader = WrapperIconsHeader();

  const $header = createElement({
    tagName: "header",
    className: ["header-home"],
    children: [$logoTitle, $searchBar, $wrapperIconsHeader],
  });

  return $header;
};

export const removeHeaderHome = () => {
  const $headerHome = document.querySelector(".header-home");

  $headerHome.remove();
};

export const printHeaderHome = () => {
  const $root = document.querySelector("#root");
  const $headerHome = Header();

  $root.appendChild($headerHome);
};
