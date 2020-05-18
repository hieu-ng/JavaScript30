const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelectorAll('dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(params) {

}

function handleLeave(params) {

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter' handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave' handleLeave));
