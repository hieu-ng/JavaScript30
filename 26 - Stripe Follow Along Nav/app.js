const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelectorAll('dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(params) {
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.add('trigger-enter-active'), 150);
	background.classList.add('open');

	const dropdown = this.querySelector('.dropdown');
	const drowpdownCoords = dropdown.getBoundingClientRect();
	const navCoords = nav.getBoundingClientRect();

	const coords = {
		height: drowpdownCoords.height,
		width: drowpdownCoords.width,
	};
}

function handleLeave(params) {
	this.classList.add('trigger-enter', 'trigger-enter-active');
	background.classList.remove('open');
}

triggers.forEach((trigger) =>
	trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
	trigger.addEventListener('mouseleave', handleLeave)
);
