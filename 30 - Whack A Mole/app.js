const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

function randTime(min, max) {
	return Math.random() * (max - min) + min;
}
