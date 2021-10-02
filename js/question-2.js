// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=969d394c9a3f4fe2b95c2ebf4ec52d64";

const descriptionsContainer = document.querySelector(".descriptions");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const descriptions = results.results;

    // console.log(descriptions);

    // descriptionsContainer.innerHTML = "";

    for(let i = 0; i < descriptions.length; i++) {

        console.log(`Name: ${descriptions[i].name}`);
        console.log(`Rating: ${descriptions[i].rating}`);
        console.log(`Amount of tags: ${descriptions[i].tags.length}`);

        if(i === 7) {
            break;
        }

        // descriptionsContainer.innerHTML += "";
    }

}

getGames();
