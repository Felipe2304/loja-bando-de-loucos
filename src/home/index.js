import { createElement } from "../utils/createElement/index.js";
import { importCSS } from "../utils/importCSS/index.js";
import { Header } from "../components/Header/index.js";
import { Footer } from "../components/Footer/index.js";
import { ContainerProducts } from "../components/ContainerProducts/index.js";
import { SideBar } from "../components/Sidebar/index.js";

importCSS("./src/home/home.css");

export const Home = () => {
  const $header = Header();
  const $containerProducts = ContainerProducts();
  const $footerContainer = Footer();
  const $sideBar = SideBar();

  const $home = createElement({
    tagName: "section",
    className: ["home"],
    children: [$header, $sideBar, $containerProducts, $footerContainer],
  });

  return $home;
};
