import { createElement } from "./utils/createElement/index.js";
import { importCSS } from "./utils/importCSS/index.js";
import { Home } from "./home/index.js";

importCSS("./src/index.js");

const $home = Home();

const $root = document.querySelector("#root");
$root.appendChild($home);
