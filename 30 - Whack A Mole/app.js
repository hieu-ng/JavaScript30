const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

function randTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomeHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if (hole === lastHole) {
		return randomeHole(holes);
	}

	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if (!timeUp) peep();
	}, time);
}

function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	peep();
	setTimeout(() => {
		timeUp = true;
	}, 10000);
}
