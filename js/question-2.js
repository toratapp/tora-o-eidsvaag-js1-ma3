// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=969d394c9a3f4fe2b95c2ebf4ec52d64";

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const descriptions = results.results;

    for(let i = 0; i < descriptions.length; i++) {
        console.log(descriptions[i].name);
    }

}

getGames();