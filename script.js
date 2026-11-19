
console.log("Welcome to Parth Surani's Portfolio!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to:", this.textContent);
    });
});
