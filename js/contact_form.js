// EXERCIȚIUL 1: Salut personalizat bazat pe ora zilei
function afiseazaSalut() {
    const ora = new Date().getHours(); 
    const pHeader = document.querySelector('header p'); 
    let mesaj = "";

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

document.addEventListener('DOMContentLoaded', function() {
    afiseazaSalut();

    // EXERCIȚIUL 2: Validare formular de contact 
    const form = document.getElementById('contact-form'); 
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nume = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mesajText = document.getElementById("message").value.trim();

            let mesajEroare = "";

            if (nume.length < 2) {
                mesajEroare = "Nume prea scurt!";
            } else if (!email.includes('@')) {
                mesajEroare = "Email invalid (lipsește @)!";
            } else if (mesajText.length < 10) {
                mesajEroare = "Mesajul trebuie să aibă cel puțin 10 caractere!";
            }

            if (mesajEroare !== "") {
                feedback.textContent = mesajEroare;
                feedback.style.color = "red"; 
                feedback.className = "error-message";
            } else {
                feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
                feedback.style.color = "green"; 
                feedback.className = "success-message";
                form.reset(); 
            }
        });
    }

    // EXERCIȚIUL 3: Buton Dark Mode / Light Mode 
    const btnTema = document.getElementById('theme-toggle');

    if (btnTema) {
        btnTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                btnTema.textContent = "☀️ Light Mode";
            } else {
                btnTema.textContent = "🌙 Dark Mode";
            }
        });
    }

    //  EXERCIȚIUL 4: Toggle Vizibilitate Secțiuni (Accordion)
    const titluriSectiuni = document.querySelectorAll('main h2');

    titluriSectiuni.forEach(function(h2) {
        h2.style.cursor = "pointer";
        h2.innerHTML = "▼ " + h2.innerHTML;

        h2.addEventListener('click', function() {
            const continut = this.nextElementSibling;

            if (continut) {
                continut.classList.toggle('hidden');

                if (continut.classList.contains('hidden')) {
                    this.innerHTML = this.innerHTML.replace("▼", "▶");
                } else {
                    this.innerHTML = this.innerHTML.replace("▶", "▼");
                }
            }
        });
    });
});