export function createForm(): HTMLFormElement {
  const form = document.createElement("form");
  const inputTitle = document.createElement("input");
  const inputAuthor = document.createElement("input");
  const inputYear = document.createElement("input");
  const btnAñadir = document.createElement("button");

  inputTitle.placeholder = "Titulo libro...";
  inputTitle.name = "title";
  inputTitle.required = true;

  inputAuthor.placeholder = "Nombre autor...";
  inputAuthor.name = "author";
  inputAuthor.required = true;

  inputYear.placeholder = "Año...";
  inputYear.type = "number";
  inputYear.name = "year";

  btnAñadir.textContent = "Añadir";
  btnAñadir.type = "submit";

  form.append(inputTitle, inputAuthor, inputYear, btnAñadir);
  return form;
}
