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
    
            if(i === 8) {
                break;
            }
            
            let name = descriptions[i].name;
            let rating = descriptions[i].rating;
            let amountOfTags = descriptions[i].tags.length;
            let convertedAmountOfTags = amountOfTags.toString();

            descriptionsContainer.innerHTML += `<div class="description"><p>Name: ${name}</p> <p>Rating: ${rating}</p> <p> Amount of tags: ${convertedAmountOfTags}</p></div>`;
        }
    }
    catch(error) {
        descriptionsContainer.innerHTML = errorMessage("Unable to get descriptions from API call.");
    }
}

getGames();
