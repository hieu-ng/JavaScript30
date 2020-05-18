const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelectorAll('dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(params) {
	this.classList.add('trigger-enter');
	setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}

function handleLeave(params) {
	this.classList.add('trigger-enter', 'trigger-enter-active');
}

triggers.forEach((trigger) =>
	trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
	trigger.addEventListener('mouseleave', handleLeave)
);
