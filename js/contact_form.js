function submitForm() {
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    console.log("--- Mesaj Nou ---");
    console.log("Nume:", nume);
    console.log("Email:", email);
    console.log("Mesaj:", mesaj);

    console.warn("Goodbye World!");
    alert("Mesaj trimis cu succes, " + nume + "!");
}