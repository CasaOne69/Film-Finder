let innerdata = JSON.parse(localStorage.getItem("data"));

if (innerdata && innerdata.length > 0) {
    document.getElementById("holder").style.display = "none";
    for (let returnedwish of innerdata){
        const buttonId = "remove_" + returnedwish.Title.replace(/ /g, "_"); // Convert title to a safe ID
        document.getElementById("wishdatareturn1").innerHTML += `
            <div class="main-return">
                <div class="imghold">
                    <img class="fimg" src="${returnedwish.Poster}">  
                </div>
                <div class="allinfo">
                    <b><p class="info">${returnedwish.Title} (${returnedwish.Year}) <img src="/rate.png" alt="IMBD rating"> ${returnedwish.imdbRating}</p></b>
                    <p class="small"><b>Staring:</b> ${returnedwish.Actors} </p>
                    <p class="small"><b>Awards:</b> ${returnedwish.Awards}</p>
                    <p class="small"><b>Directed By:</b> ${returnedwish.Director} <b>Genre:</b> ${returnedwish.Genre}</p>
                    <p class="small"><b>Plot:</b> ${returnedwish.Plot}</p>
                    <button class="wtc" id="${buttonId}">Remove From Watch List</button>
                    <hr>
                </div>
            </div>`;
    }

    // Add a general click event listener for all buttons
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("wtc")) {  // If clicked element is a button
            const titleToRemove = e.target.id.replace("remove_", "").replace(/_/g, " ");  // Convert ID back to title
            innerdata = innerdata.filter(item => item.Title !== titleToRemove); // Remove the clicked item
            localStorage.setItem("data", JSON.stringify(innerdata)); // Update local storage
            e.target.closest(".main-return").remove(); // Remove the item from the page
        }
    });
}
