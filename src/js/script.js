document.addEventListener("DOMContentLoaded", function() {
    console.log("Strona AI4Flow gotowa!");

    // Obsługa CTA z płynnym przewijaniem do sekcji
    document.querySelector(".cta-button").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#offer").scrollIntoView({ behavior: "smooth" });
    });
});
