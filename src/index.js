import React from "react";
import ReactDOM from "react-dom";
import Container from "./layout/container/container";

import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

library.add(faUser);

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);
