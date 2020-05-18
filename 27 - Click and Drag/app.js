const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
	isDown = true;
});
slider.addEventListener('mouseleave', () => {
	idDown = false;
});
slider.addEventListener('mouseup', () => {
	idDown = false;
});
slider.addEventListener('mousemove', () => {
	console.log(isDown);
});
