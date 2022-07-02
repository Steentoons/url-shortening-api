"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const axios = require('axios');
const ShortenUrlData = () => {
    (0, react_2.useEffect)(() => {
        // Read this to get the best and clean folder structure...
        // https://reactjs.org/docs/thinking-in-react.html
        axios.get("https://api.shrtco.de/v2/shorten?url=")
            .then((response) => {
            console.log(response);
        })
            .catch((error) => {
            console.log(error);
        })
            .then(() => {
            console.log("This was called...");
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = ShortenUrlData;
