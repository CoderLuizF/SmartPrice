const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = event.target[0].value;
});
