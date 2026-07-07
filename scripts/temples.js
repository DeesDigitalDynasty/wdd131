const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");

    menuButton.textContent =
        nav.classList.contains("hide") ? "☰" : "✕";
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;