const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
);
