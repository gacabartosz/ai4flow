const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        welcome: "Welcome to AI4Flow",
        description: "Innovative AI solutions for a smarter future.",
        cta: "Try AI Now!"
    },
    pl: {
        home: "Strona główna",
        about: "O nas",
        services: "Usługi",
        contact: "Kontakt",
        welcome: "Witaj w AI4Flow",
        description: "Innowacyjne rozwiązania AI dla inteligentnej przyszłości.",
        cta: "Wypróbuj AI teraz!"
    }
};

document.getElementById("language-selector").addEventListener("change", function() {
    document.querySelectorAll("[data-lang]").forEach((el) => {
        el.innerText = translations[this.value][el.dataset.lang];
    });
});
