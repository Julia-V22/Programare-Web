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

    // --- LOGICA NOUĂ: ICONIȚE HOBBY ---
    const hobbyItems = document.querySelectorAll('.hobbies-list li');
    const icons = {
        "Drumeții": "⛰️ ",
        "Dans": "💃 ",
        "Citit": "📚 ",
        "Makeup": "💄 ",
        "Fotografia": "📸 "
    };

    hobbyItems.forEach(li => {
        const text = li.textContent.trim();
        if(icons[text]) {
            li.innerHTML = `<span>${icons[text]}</span> ${text}`;
        }
    });

    // --- EXERCIȚIUL 2: Validare formular ---
    const form = document.getElementById('contact-form'); 
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const nume = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mesajText = document.getElementById("message").value.trim();

            let mesajEroare = "";
            if (nume.length < 2) mesajEroare = "Nume prea scurt!";
            else if (!email.includes('@')) mesajEroare = "Email invalid!";
            else if (mesajText.length < 10) mesajEroare = "Mesaj prea scurt!";

            if (mesajEroare !== "") {
                feedback.textContent = mesajEroare;
                feedback.style.color = "red";
            } else {
                feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
                feedback.style.color = "green";
                form.reset(); 
            }
        });
    }

    // --- EXERCIȚIUL 3: Dark Mode ---
    const btnTema = document.getElementById('theme-toggle');
    if (btnTema) {
        btnTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            btnTema.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    // --- EXERCIȚIUL 4: Accordion ---
    const titluriSectiuni = document.querySelectorAll('main h2');
    titluriSectiuni.forEach(function(h2) {
        h2.style.cursor = "pointer";
        h2.innerHTML = "▼ " + h2.innerHTML;

        h2.addEventListener('click', function() {
            const continut = this.nextElementSibling;
            if (continut) {
                continut.classList.toggle('hidden');
                this.innerHTML = continut.classList.contains('hidden') ? 
                    this.innerHTML.replace("▼", "▶") : this.innerHTML.replace("▶", "▼");
            }
        });
    });
});