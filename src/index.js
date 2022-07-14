import { Home } from "./home/index.js";
import { Header } from "../src/components/Header/index.js";

const $home = Home();
const $header = Header();

const $root = document.querySelector("#root");
$root.appendChild($header);
$root.appendChild($home);
