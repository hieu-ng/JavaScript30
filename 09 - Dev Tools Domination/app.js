const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular

// Interpolated
console.log("Some arguments", "will be concatenated with this syntax"); // Backticks will also do the jobß∏
// Styled
console.log("%c I am some text", "font-size:50px"); // Adding inline style
// warning!
console.warn("Fucking lol");
// Error :|
console.error("Fuck!");
// Info
console.info(`Fun fact something something`);
// Testing
console.assert(1 === 1, "That is wrong"); // Only active when something is wrong
// clearing
console.clear();
// Viewing DOM Elements
console.dir();
// Grouping together
console.group();
console.groupCollapsed();
console.groupEnd();
// counting
console.count();
// timing
