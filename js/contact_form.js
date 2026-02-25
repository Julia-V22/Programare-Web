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


window.onload = afiseazaSalut;

function submitForm() {
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    console.log("--- Mesaj Nou ---");
    console.log("Nume:", nume);
    console.log("Email:", email);
    console.log("Mesaj:", mesaj);

    alert("Mesaj trimis cu succes, " + nume + "!");
}