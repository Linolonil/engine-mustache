"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));

let name = 'Lino';
if (validator_1.default.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula.`);
}
else {
    console.log(`A string ${name} NÃO é toda minúscula.`);
}
