const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click", () => {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("love").classList.remove("hidden");
});

const btnNo = document.getElementById('no');
let messages = [
    "QUOI ??????",
    "Bein non mdr ?",
	"Je crois t'a pas compris ",
    "T'es génante",
    "Appuie sur oui ORRHHH",
    "Et puis t'oses continuer quoi",
	"T'es grv méchante 😒",
	"Mais wsh t'es sérieuse ??",
	"Bah alors on arrive pas ? 🤣 ",
	"Behhhhhhh 🤪🤪🤪🤪",
	"NAN.",
	"Tu me fatigues hein",
	"C'est ton dernier mot ?",
	"Adieu.",
	"Bonne continuation ? ",
	"vzy je vais voir autre part si tu continues",
	"Je rigole t'as craqué ou quoi",
	"Je t'aimerais quoi qu'il arrive Camille",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",
	"NON",

];
let clickCount = 0;
let scale = 2; // Taille initiale (100%)

btnNo.addEventListener('mouseover', () => {
    // 1. On change le texte (en boucle sur la liste des messages)
    btnNo.innerText = messages[clickCount % messages.length];

    // 2. On réduit la taille (on enlève 10% à chaque fois)
    scale -= 0.08;
    if (scale < 0.3) scale = 0.3; // On garde une taille minimum pour qu'il reste visible
    btnNo.style.transform = `scale(${scale})`;

    // 3. Ton code existant pour faire bouger le bouton (exemple) :
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;

    clickCount++;
});