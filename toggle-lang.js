const toggleButton = document.getElementById("toggle-lang");

toggleButton.addEventListener("click", () => {
    document.querySelectorAll(".lang-en").forEach(el => 
        el.style.display = el.style.display === "none" ? "inline" : "none");
    document.querySelectorAll(".lang-ja").forEach(el =>
        el.style.display = el.style.display === "none" ? "inline" : "none");


    if (toggleButton.dataset.lang === "en") {
        toggleButton.innerHTML = "🌏 日本語 / EN"
        toggleButton.dataset.lang = "ja";
    } else {
        toggleButton.innerHTML = "🌏 EN / 日本語"
        toggleButton.dataset.lang = "en";
    }
});