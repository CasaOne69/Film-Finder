// DOM Elements
const searchButton = document.getElementById("searchbtn");
const searchInput = document.getElementById("seachin");
const filmBlock = document.getElementById("filmreturn");

// Data
let watchList = [];

/**
 * Fetch film data from OMDb API.
 * @param {string} query - The search query.
 * @returns {object} The film data.
 */
async function fetchFilmData(query) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=8aa19afc&t=${query}&plot=full`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
}

/**
 * Render film data to the DOM.
 * @param {object} filmData - The film data.
 */
function renderFilm(filmData) {
    filmBlock.innerHTML = `
        <div class="main-return">
            <div class="imghold">
                <img class="fimg" src="${filmData.Poster}">  
            </div>
            <div class="allinfo">
                <b><p class="info">${filmData.Title} (${filmData.Year}) <img src="/rate.png" alt="IMBD rating"> ${filmData.imdbRating}</p></b>
                <p class="small"><b>Staring:</b> ${filmData.Actors} </p>
                <p class="small"><b>Awards:</b> ${filmData.Awards}</p>
                <p class="small"><b>Directed By:</b> ${filmData.Director} <b>Genre:</b> ${filmData.Genre}</p>
                <p class="small"><b>Plot:</b> ${filmData.Plot}</p>
                <button class="wtc" id="wtc">Add to Watch List</button>
                <hr>
            </div>
        </div>
    `;

    document.getElementById("wtc").addEventListener("click", function() {
        addToWatchList(filmData);
    });
}

/**
 * Add film to the watch list and update local storage.
 * @param {object} filmData - The film data.
 */
function addToWatchList(filmData) {
    watchList.push(filmData);
    localStorage.setItem("data", JSON.stringify(watchList));
}

// Event Listener for the Search Button
searchButton.addEventListener("click", async function() {
    const filmData = await fetchFilmData(searchInput.value);
    if (filmData) {
        renderFilm(filmData);
    }
});
