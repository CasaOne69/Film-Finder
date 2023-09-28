
const searchBtn = document.getElementById("searchbtn")
const seachIp = document.getElementById("seachin")
const filmBlock = document.getElementById("filmreturn")

searchBtn.addEventListener("click", async function(){
const res = await fetch(`http://www.omdbapi.com/?apikey=8aa19afc&t=${seachIp.value}&plot=full`)
const data = await res.json()
console.log(data)
filmBlock.innerHTML = `
<div class="main-return">
    <div class="imghold">
        <img class="fimg" src="${data.Poster}">  
    </div>
<div class="allinfo">
    <b><p class="info">${data.Title} (${data.Year}) <img src="/rate.png" alt="IMBD rating"> ${data.imdbRating}</p></b>
    <p class="small"><b>Staring:</b> ${data.Actors} </p>
    <p class="small"><b>Awards:</b> ${data.Awards}</p>
    <p class="small"><b>Directed By:</b> ${data.Director} <b>Genre:</b> ${data.Genre}</p>
    <p class="small"><b>Plot:</b> ${data.Plot}</p>
    <button class="wtc">Add to Watch List</button>
   <hr>
    </div>
</div>

`
})