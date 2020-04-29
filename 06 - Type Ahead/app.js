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

function numberwithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
        .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(
                regex,
                `<span class='hl'>${this.value}</span>`
            );
            const stateName = place.city.replace(
                regex,
                `<span class='hl'>${this.value}</span>`
            );
            return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
        })
        .join("");
    suggestions.innerHTML = html;
}
