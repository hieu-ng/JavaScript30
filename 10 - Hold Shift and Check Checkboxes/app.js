const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    lastChecked = this;
    //Check if they have the Shift key down
    //Check if they are checking a box
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
        });
    }
}

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
);
