const pressed = [];
const secretCode = "something";

window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // Trim from right to left
    if (pressed.join("").includes(secretCode)) {
        cornify_add();
    }
});
