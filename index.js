function citySearchSubmit(event) {
  event.preventDefault();
  let searchInput = docuent.querySelector("#seach-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", citySearchSubmit);
