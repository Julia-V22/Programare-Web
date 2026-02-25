// EXERCIȚIUL 1: Salut personalizat bazat pe ora zilei
function afiseazaSalut() {
    // Folosim new Date() și getHours() pentru a obține ora curentă
    const ora = new Date().getHours(); 
    const pHeader = document.querySelector('header p'); 
    let mesaj = "";

    // Logica pentru alegerea mesajului în funcție de intervalul orar
    if (ora >= 6 && ora < 12) {
        mesaj = "Bună dimineața! Bine ai venit pe pagina mea.";
    } else if (ora >= 12 && ora < 18) {
        mesaj = "Bună ziua! Bine ai venit pe pagina mea.";
    } else {
        mesaj = "Bună seara! Bine ai venit pe pagina mea.";
    }

    if (pHeader) {
        pHeader.textContent = mesaj; 
    }
}

// Apelăm funcția de salut la încărcarea paginii
window.onload = afiseazaSalut;

// EXERCIȚIUL 2: Validare reală a formularului de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form'); 
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Oprim comportamentul implicit de reîncărcare a paginii
            event.preventDefault(); 

            // Preluăm valorile și eliminăm spațiile inutile cu .trim()
            const nume = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mesaj = document.getElementById("message").value.trim();

            let mesajEroare = "";

            // Validările cerute în laborator
            if (nume.length < 2) {
                mesajEroare = "Nume prea scurt!";
            } else if (!email.includes('@')) {
                mesajEroare = "Email invalid (lipsește @)!";
            } else if (mesaj.length < 10) {
                mesajEroare = "Mesajul trebuie să aibă cel puțin 10 caractere!";
            }

            // Afișarea feedback-ului vizual în pagină
            if (mesajEroare !== "") {
                feedback.textContent = mesajEroare;
                feedback.className = "error-message"; 
                feedback.style.color = "red";        
            } else {
                // Mesaj de succes personalizat cu numele utilizatorului
                feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
                feedback.className = "success-message"; 
                feedback.style.color = "green";        
                form.reset(); // Golește câmpurile după trimitere succesivă
            }
        });
    }
});