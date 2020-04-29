const cities = [];

fetch(enpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
        // Figure out if the city matches what was searched
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}
