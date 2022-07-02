"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/shortenUrlInput.css");
const ShortenUrlInput = () => {
    return (react_1.default.createElement("div", { className: 'shorten-url-input-container' },
        react_1.default.createElement("input", { type: "text", placeholder: "Shorten a link here" }),
        react_1.default.createElement("button", null, "Shorten It!")));
};
exports.default = ShortenUrlInput;
