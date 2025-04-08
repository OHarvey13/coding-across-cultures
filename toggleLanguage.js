function toggleLanguage() {
    const en = document.getElementById('fact-en') // Get the English element by ID
    const jp = document.getElementById('fact-jp') // Get the Japanese element by ID
    if (en.style.display ==='none') { // checks if English is hidden
        // If English is hidden, show it
        en.style.display = 'block';
        jp.style.display = 'none';
    } else {
        // If English is visible, hide it
        en.style.display = 'none';
        jp.style.display = 'block';
    }
}