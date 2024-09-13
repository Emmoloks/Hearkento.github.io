const key = config.API_KEY;
const searchMovie =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  key +
  "&language=en-US&query=Thriller";

console.log("Hello from thriller");

async function getthriller(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.results);

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];

    // Fetch variables data

    let thrillerid = obj.id;
    let thrillerTitle = obj.original_title;
    let thrillerPoster = obj.poster_path;
    let thrillerReleaseDate = obj.release_date;
    let thrillerVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + thrillerPoster;
    let errorImg = "../images/placeholder.jpg";

    if (thrillerPoster == null) {
      imgUrl = errorImg;
    }

    const main = document.querySelector("main");
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-4", "mb-3");

    movieElement.innerHTML = `
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${thrillerTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${thrillerid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
        
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${thrillerReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${thrillerVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

getthriller(searchMovie);
