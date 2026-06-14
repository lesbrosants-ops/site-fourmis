const especes = [
{
    nom: "Lasius niger",
    difficulte: "Facile",
    taille: "8-9 mm",
    essaimage: "Juin à Septembre"
},
{
    nom: "Messor barbarus",
    difficulte: "Facile",
    taille: "14-16 mm",
    essaimage: "Septembre à Octobre"
},
{
    nom: "Camponotus vagus",
    difficulte: "Moyenne",
    taille: "15-18 mm",
    essaimage: "Mai à Juillet"
}
];

const liste = document.getElementById("listeEspeces");

especes.forEach((e, index) => {
    liste.innerHTML += `
        <li>
            <a href="#" onclick="afficherFiche(${index})">
                ${e.nom}
            </a>
        </li>
    `;
});

function afficherFiche(index) {

    const e = especes[index];

    document.getElementById("fiche").innerHTML = `
        <h2>${e.nom}</h2>
        <p><strong>Difficulté :</strong> ${e.difficulte}</p>
        <p><strong>Taille :</strong> ${e.taille}</p>
        <p><strong>Essaimage :</strong> ${e.essaimage}</p>
    `;
}