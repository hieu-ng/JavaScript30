const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const degreeSeconds = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${degreeSeconds}deg)`;

    const minutes = now.getMinutes();
    const degreeMinutes = (minutes / 60) * 360 + 90;
    minHand.style.transform = `rotate(${degreeMinutes}deg)`;

    const hours = now.getHours();
    const degreeHours = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${degreeHours}deg)`;
}

setInterval(setDate, 1000);
