{
  /* <div class="row">
  <input type="checkbox" name="selectinfo" id="selectinfo">
  <label for="extrainfo">More property name</label>
  <input type="text" id="extraname" required />
  <label for="extravalue">More property value</label>
  <input type="text" id="extravalue" required />
</div> */
}

const addInfo = document.getElementById("btn-addinfo");
const removeInfo = document.getElementById("btn-removeinfo");
const addMovie = document.getElementById("btn-addmovie");
const clearInfo = document.getElementById("btn-clearinfo");
const searchMovie = document.getElementById("btn-search");

let ALL_INFO = [];
let FILTERED_MOVIES = [];

addInfo.addEventListener("click", () => {
  const row = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    // checkbox.parentElement.remove();
    ALL_INFO.push(checkbox.parentElement);
    console.log(ALL_INFO);
  };
  const labelkey = document.createElement("label");
  labelkey.textContent = "More property name";
  const labelvalue = document.createElement("label");
  labelvalue.textContent = "More property value";

  const inputkey = document.createElement("input");
  inputkey.type = "text";
  inputkey.id = "extrakey";
  const inputvalue = document.createElement("input");
  inputvalue.type = "text";
  inputvalue.id = "extravalue";

  row.append(checkbox, labelkey, inputkey, labelvalue, inputvalue);
  row.className = "row";
  document.getElementById("more-info").append(row);
});

removeInfo.onclick = () => {
  for (node of ALL_INFO) {
    node.remove();
  }
};

{
  /* <li>
    <h4>Movie title</h4>
    <div class="rowlist">
        <span>key</span>
        <span>value</span>
    </div>
    <div class="row">
        <span>key</span>
        <span>value</span>
    </div>
</li> */
}
showFilteredMovies = () => {
  // clear search result first
  var filteredMovies = document.getElementById("filtered-movies");
  var child = filteredMovies.lastElementChild;
  while (child) {
    filteredMovies.removeChild(child);
    child = filteredMovies.lastElementChild;
  }
  console.log(filteredMovies);
  FILTERED_MOVIES.forEach((movie) => {
    filteredMovies.append(movie);
  });
};
searchMovie.addEventListener("click", () => {
  FILTERED_MOVIES = [];
  const searchTxt = document.getElementById("search-box").value;
  const allMovies = document.getElementById("all-movies").cloneNode(true);
  const movies = allMovies.querySelectorAll("li");
  for (movie of movies) {
    movie.querySelector("h4").textContent === searchTxt
      ? FILTERED_MOVIES.push(movie)
      : false;
  }
  showFilteredMovies();
});

clearInfo.onclick = function () {
  document.getElementById("movie_title").value == "";
  const infos = document.getElementById("more-info");
  var child = infos.lastElementChild;
  while (child) {
    infos.removeChild(child);
    child = infos.lastElementChild;
  }
};
addMovie.addEventListener("click", () => {
  const allMovies = document.getElementById("all-movies");
  const title = document.getElementById("movie_title").value;
  const rows = document.getElementsByClassName("row");
  const li = document.createElement("li");
  const h4 = document.createElement("h4");
  li.append(h4);
  h4.textContent = title;
  for (const row of rows) {
    const div = document.createElement("div");
    div.className = "rowlist";
    const spankey = document.createElement("span");
    spankey.textContent = row.children[2].value;
    const spanvalue = document.createElement("span");
    spanvalue.textContent = row.children[4].value;

    div.append(spankey, spanvalue);
    li.append(div);

    allMovies.append(li);
  }
});
