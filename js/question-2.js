// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=969d394c9a3f4fe2b95c2ebf4ec52d64";

const descriptionsContainer = document.querySelector(".descriptions");

async function getGames() {

    try {
        const response = await fetch(url);

        const results = await response.json();
    
        const descriptions = results.results;
    
        descriptionsContainer.innerHTML = "";
    
        for(let i = 0; i < descriptions.length; i++) {
    
            console.log(`Name: ${descriptions[i].name}`);
            console.log(`Rating: ${descriptions[i].rating}`);
            console.log(`Amount of tags: ${descriptions[i].tags.length}`);
    
            if(i === 8) {
                break;
            }
    
            descriptionsContainer.innerHTML += `<div class="description"><p>Name: ${descriptions[i].name}</p> <p>Rating: ${descriptions[i].rating}</p> <p> Amount of tags: ${descriptions[i].length}</p></div>`;
        }
    }
    catch(error) {
        descriptionsContainer.innerHTML = errorMessage("Unable to get descriptions from API call.");
    }
}

getGames();
