// Gets the button element and the current language from the body attribute
const button = document.getElementById('toggle-lang');

// Adds an event listener to the button to toggle the language
button.addEventListener('click', () => {
    const currLang = document.body.getAttribute('data-lang'); // Gets the current language from the body attribute
    const newLang = currLang === 'en' ? 'ja' : 'en'; // Checks the current language and flips to the other one
    document.body.setAttribute('data-lang', newLang); // returns a string of the new language
});