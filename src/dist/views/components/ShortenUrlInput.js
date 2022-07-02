"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/shortenUrlInput.css");
const ShortenUrlInput = () => {
    const shortenUrlHandler = () => {
        // Validate the form input...
        const myInput = document.querySelector("input");
        const myInputVal = myInput.value;
        if (myInputVal === "") {
            console.log(`The Error is`);
        }
        // Invoke the spi call via state change...
        return;
    };
    return (react_1.default.createElement("div", { className: 'shorten-url-input-container' },
        react_1.default.createElement("input", { type: "text", placeholder: "Shorten a link here" }),
        react_1.default.createElement("button", { onClick: () => shortenUrlHandler() }, "Shorten It!")));
};
exports.default = ShortenUrlInput;
