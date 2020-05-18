function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;

	setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		// Check if we should stop - when timer goes negative!
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
	}, 1000);
}
