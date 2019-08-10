const __svg__           = { path: "./assets/icons/*.svg", name: "assets/icons/[hash].logos.svg" };
require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);
import React from "react";
import ReactDOM from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";
import "./assets/styles/base.less";

import App from "./app/App";

ReactDOM.render(<App />, document.getElementById("root"));
