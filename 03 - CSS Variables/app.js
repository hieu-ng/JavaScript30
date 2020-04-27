const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    // Dataset is available through data-something in HTML
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
