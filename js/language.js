/* https://blog.nishikanta.in/data-i18n-for-small-web-projects-a-complete-guide-to-internationalization */

async function loadLanguage(lang) {
    console.log("loadLanguage" + lang)
    const response = await fetch(`./lang/${lang}.json`);

    const translation = await response.json();

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translation[key]) {
            element.textContent = translation[key];
        }
    })
    
}

/* 
This script does three things:

Loads the translation JSON file

Finds all elements with data-i18n

Replaces the text with the translated value


*/