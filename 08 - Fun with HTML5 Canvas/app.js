const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokestyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
