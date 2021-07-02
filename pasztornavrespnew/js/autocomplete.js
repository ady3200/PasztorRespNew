//not working on the tagsinput input yet
let badges = ["Szabadka", "Orban", "unnep", "korona", "iskola", "tanitas"];

const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

searchInput.addEventListener("keyup", () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = badges.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }

  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove("hide");
  }
  let content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");
  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
