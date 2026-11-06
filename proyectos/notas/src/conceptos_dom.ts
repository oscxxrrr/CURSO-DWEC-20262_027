// import { products } from "./services/products";
//
// // A. - El dato
// state = { products: [{ id: 1, name: "raton", favorite: false }] }
//
// // b. - EL DOM
// < ul id="lista-productos">
//   <li>
//     <span>Raton 19.40 </span>
//     < button data-action="favorito" data-id="1"> Favorito </button> // data- es un dataset con un valor q yo quiera
//     < button data-action="delete" data-id="1"> Borrar </button>
//     < li >
//  <li>
//     <span>Teclado 59.40 </span>
//     < button data-action="favorito" data-id="2"> Favorito </button> // data- es un dataset con un valor q yo quiera
//     < button data-action="delete" data-id="2"> Borrar </button>
//   < li >
//     etc...
// </ul>
//
// // para añadir un data-set a un nodo u objeto del dom usamos objeto.dataset.nombre_del_dataset = "valor_del_dataset"
// button.dataset.action = "favorito"
// button.dataset.id = "1"
//
// // C. - Listener escucha y colocamos casi siempre en un nodo padre q engolbe todos los hijos q quiero escuchar
// const list = document.getElementById("lista-productos");
// list.addEventListener("click", (event) => {
//   // esto se ejecutara solo cuando se produzca el eveneto...
// })
//
// // closest <-- muy importante y simboliza el evento mas proximo... q tenga (X) cosa --> (lo de dentro es lo que busca)
// const button = xxxx.target.closest('button[data-action]') --> este seria boton pulsado.
// // como ya tengo el boton ya puedo sacar su id
// const id = Number(button.dataset.id) // lee data-id="id del boton que he pulsado" y lo convertimos a number 
//
//
// if(button.dataset.action ===="favorito"){ // leo data-action = "favorito"
//   // llamo a una funcion que cambia el valor que tenga ese boton. A la funcion la llamare con el nombre Dispatch
//   dispatch({ type="favorito", id     }) // hacer el cambio
// }
//
// // la funcion dispach coge el parametro, lo busca en mi data y le cambia el valor
//
// export function dispatch(action: Action): void{
//   // cambia el estado
//   state = reducer(state, action) // <-- cambia el dato en la DATA principal
//   render() // <-- renderizar todo con la nueva data (repintamos el nodo por pantalla)
// }
