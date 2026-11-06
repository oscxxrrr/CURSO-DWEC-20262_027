import { createBtnSearch } from "./components/buttonController";
import { createTextSpan, getElement } from "./components/dom";
import { createInput } from "./components/inputController";
import { createTableProducts, createTableStudents } from "./components/tableController";
import { products } from "./services/products";
import { students } from "./services/students";
import { searchNameBtn, searchProductBtn } from "./utils/botonSearch";
import { searchInputProduct, searchInputStudent } from "./utils/inputSearch";

// datos


// creacion
const app = getElement("#products", HTMLDivElement);

const t1 = createTextSpan("Usuarios: ", ["t1"]);
const inputName = createInput("Nombre usuario... ", ["in1"]);
let tableName = createTableStudents(students, ["table1"]);
let btnSearchName = createBtnSearch("Buscar", ["btn1"]);

const t2 = createTextSpan("Productos: ", ["t1", "t2"]);
const inputProduct = createInput("Nombre producto... ", ["in1", "in2"]);
let tableProduct = createTableProducts(products, ["table1", "table2"]);
let btnSearchProduct = createBtnSearch("Buscar producto", ["btn1", "btn2"]);




// estilo t1
t1.style.fontSize = "24px";
t1.style.fontWeight = "bold";

// estilo t2
t2.style.fontSize = "24px";
t2.style.fontWeight = "bold";


// manejo input buscar estudiante
searchInputStudent(inputName, tableName);

// manejo boton buscar estudiante
searchNameBtn(btnSearchName, tableName, inputName);

// manejo input buscar producto
searchInputProduct(inputProduct, tableProduct);

// manejo boton buscar producto
searchProductBtn(btnSearchProduct, tableProduct, inputProduct)

app.append(t1, inputName, btnSearchName, tableName, t2, inputProduct, btnSearchProduct, tableProduct);
