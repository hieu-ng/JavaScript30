const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokestyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDraw) return; // Stop the function from running when mousedown is false
    ctx.strokestyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = hue;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    //Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;
    if (hue > 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if direction {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
}
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
    isDrawing = true[(lastX, lastY)] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
