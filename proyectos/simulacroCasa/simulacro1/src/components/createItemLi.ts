export function createBookItem(book: Book, onToggleFavorite: (id: number) => void, onDelete: (id: number) => void): HTMLLIElement {
  const item = document.createElement("li");
  const cover = document.createElement("img");
  const title = document.createElement("strong");
  const span = document.createElement("span");
  const btnFav = document.createElement("button");
  const btnDelete = document.createElement("button");

  cover.src = book.cover;
  cover.alt = `Portada de ${book.title}`;

  title.textContent = book.title;

  span.textContent = `${book.author} , ${book.year}`;

  btnFav.type = "button";
  btnFav.textContent = book.favorite ? "★ Favorito" : "☆ Favorito";
  btnFav.addEventListener("click", () => onToggleFavorite(book.id));

  btnDelete.type = "button";
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => onDelete(book.id));

  item.append(cover, title, span, btnFav, btnDelete);
  return item;
}
