"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ShortenUrlInput_1 = __importDefault(require("./dist/ShortenUrlInput"));
const App = () => {
    return react_1.default.createElement("div", { className: 'shorten-url-app-container' },
        react_1.default.createElement(ShortenUrlInput_1.default, null));
};
exports.default = App;
