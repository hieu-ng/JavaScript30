const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];
function stripArticle(bandName) {
    return bandName.replace(/^(a|the |an ) /i, '').trim();
}

const sortedBands = bands.sort(function (a, b) {
    if (stripArticle(a) > stripArticle(b)) {
        return 1;
    } else {
        return -1;
    }
    // Ternary operator with arrow function:
    // bands.sort((a,b) => stripArticle(a) > stripArticle(n) ? 1; -1)
});

document.querySelector('#bands').innerHTML = sortedBands
    .map((band) => `<li>${band}</li>`)
    .join('');
