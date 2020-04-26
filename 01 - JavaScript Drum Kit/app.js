function playSound(e) {
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); // Need quotation marks around a number to make it a string
	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	if (!audio) return; // Stop the function from running altogether
	audio.currentTime = 0; // rewind to the start
	audio.play();
	key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
	if (e.prepertyName !== "transform") return; // Skip it if it's not a transform
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
