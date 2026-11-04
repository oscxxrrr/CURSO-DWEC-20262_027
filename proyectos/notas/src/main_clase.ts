import "./style.css";
import { createCard, getElement } from "./components/dom";
import { products } from "./services/products";
import { mountClickCounter } from "./utils/counter";

const app = getElement("#products", HTMLDivElement);

const ulProducts = document.createElement("ul");

// recorrer products - manera facil
// for (const p of products) {
//    ulProducts.append(createCard(p))
// }

ulProducts.append(...products.map(createCard));

const liTotal = document.createElement("li");
liTotal.classList.add("card", "total");

const totalStrongText = document.createElement("strong");
totalStrongText.textContent = "Total : ";

const totalStrong = document.createElement("strong");
totalStrong.textContent = String(products.reduce((acc, p) => acc + p.price, 0));
totalStrong.classList.add("card-price");
// A¤adimos ambos elementos (el texto "Total :" y el valor num‚rico) al `liTotal`
liTotal.append(totalStrongText, totalStrong);

// a¤adir elementos a la lista
ulProducts.append(liTotal);

app.append(ulProducts);



/*
  * .append             --> al final
  * .prepend            --> al principio
  * .before             --> justo antes de
  * .after              --> justo despues de
  * .replaceWith(nuevo) --> en lugar de
*/


// crear una funcion que genere etiquetas con el texto que le paso como parametro y con un array de clases


// crear un contador de clics usando button y etiqueta







// BOTONES
const section = document.createElement("section");
const buttonClicks = document.createElement("button");
const btnReset = document.createElement("button");

buttonClicks.textContent = `Clicks: 0`;
btnReset.textContent = `Reset`;

mountClickCounter(buttonClicks, btnReset);

const hr = document.createElement("hr");
section.append(buttonClicks, btnReset);
app.append(hr, section);





