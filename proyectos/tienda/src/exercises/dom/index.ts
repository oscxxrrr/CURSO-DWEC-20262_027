/*
  *
  * DOM --> arbol de objetos construidos con HTML
  *
  *
  <html>
  <body>
  <h1> Tienda </h1>
  <div id="category">
    <input id="search" type="search" /> // formulario
    <ul id="list"></ul> // lista desordenada
  </div>
  </body>
  </html>


  document
      body
          h1#
          div#category
              input#search
              ul#list
  *
  * Node --> todos los eleentos del DOM se denominon NODO (Node)
  *   Element --> cualquiero etiqueta
  *     HTMLElement --> textContent, classList, dataset, etc...
  *       HTMLInputElement --> -value, .cheked, etc
  *       HTMLButtonElement --> .disables...
  *
  *   etc ...............
  *
  *
  *
  *
  * ¿Como se seleccionan los elementos del DOM?
  *
  * document.querySelector("#category") <-- metodo para seleccionar por ID o class
  * mucho cuidado que ese query puede devolver null | Element
  *
  *
  * ¿Como se tipa en typescript?
  * de peor a mejor
  *
  * 
  1.
  const search = document.querySelector("#search")! as HTMLInputElement;
  ! <-- la exclamacion quita null de los posibles valores y te garantiza que existe el valor. 

  2.

  const search2 = document.querySelector<HTMLInputElement>("#search");
  Un poco mejor pero sigo sin comprobar en ningun momento si es null o HTMLInputElement.


  3.

  const searchInput = document.querySelector(#search)
  if(   !(searchInput instanceOf HTMLInputElement)  ){
    // te lanzo un error o te redirecciono a los errores
    throw new Error ("No se encuentra la etiqueta search o no es un input")
  }
  console.log(searchInput.value); // mostrar por pantalla lo que ha escrito en el input. 
  *
  */



console.log("Estoy en index.ts");


// ejercicio casa: crear variables que apunten a cada uno de los elementos del DOM diseñados en el index.html

const section = document.querySelector("#controls");
if (!(section instanceof )) 
