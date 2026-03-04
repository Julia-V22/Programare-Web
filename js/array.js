// 1. Extragerea listei de educație într-un array de string-uri
const listaEducatieHTML = document.querySelectorAll('.edu-list li');

const arrayEducatie = Array.from(listaEducatieHTML).map(li => li.innerText.trim());

console.log("Array Educație:", arrayEducatie);

// --- EXERCIȚIUL 2: FILTRARE ---
const educatie2024 = arrayEducatie.filter(item => item.includes("2024"));
console.log("Filtru 1 (conține '2024'):", educatie2024);

const doarUniversitate = arrayEducatie.filter(item => item.includes("Universitatea"));
console.log("Filtru 2 (conține 'Universitatea'):", doarUniversitate);

// --- EXERCIȚIUL 3: EXTRAGERE PRIMUL CUVÂNT ---
const primeleCuvinte = arrayEducatie.map(item => item.split(' ')[0]);
console.log("Array doar cu primele cuvinte:", primeleCuvinte);

// --- EXERCIȚIUL 4: CALCUL TOTAL ANI DE STUDIU (REDUCE) ---

const totalAniStudiu = arrayEducatie.reduce((acumulator, item) => {
    // Folosim o expresie regulată pentru a găsi toate grupurile de 4 cifre (anii)
    // match(/\d{4}/g) va returna un array de tipul ["2021", "2024"]
    const ani = item.match(/\d{4}/g);

    if (ani && ani.length >= 2) {
        const anInceput = parseInt(ani[0]);
        const anSfarsit = parseInt(ani[1]);
        
        // Calculăm durata pentru acest rând și o adunăm la acumulator
        const durata = anSfarsit - anInceput;
        return acumulator + durata;
    }
    
    return acumulator;
}, 0);

// Afișăm rezultatul final conform cerinței
console.log(`Total ani de studiu: ${totalAniStudiu}`);