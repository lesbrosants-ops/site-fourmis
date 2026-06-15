const especes = [

{
nom:"Lasius niger",
image:"image/lasius-niger.jpg",
taille:"3 à 5 mm",
reine:"8 à 9 mm",
difficulte:"Facile",
essaimage:"Juin à Septembre",
diapause:"Oui"
},

{
nom:"Lasius flavus",
image:"image/lasius-flavus.jpg",
taille:"2 à 4 mm",
reine:"7 à 9 mm",
difficulte:"Facile",
essaimage:"Juillet à Septembre",
diapause:"Oui"
},

{
nom:"Lasius emarginatus",
image:"image/lasius-emarginatus.jpg",
taille:"3 à 5 mm",
reine:"8 mm",
difficulte:"Facile",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Lasius brunneus",
image:"image/lasius-brunneus.jpg",
taille:"3 à 5 mm",
reine:"8 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Messor barbarus",
image:"image/messor-barbarus.jpg",
taille:"4 à 12 mm",
reine:"15 mm",
difficulte:"Facile",
essaimage:"Septembre",
diapause:"Faible"
},

{
nom:"Messor capitatus",
image:"image/messor-capitatus.jpg",
taille:"5 à 14 mm",
reine:"16 mm",
difficulte:"Moyen",
essaimage:"Automne",
diapause:"Faible"
},

{
nom:"Camponotus vagus",
image:"image/camponotus-vagus.jpg",
taille:"6 à 13 mm",
reine:"15 mm",
difficulte:"Facile",
essaimage:"Mai à Juillet",
diapause:"Oui"
},

{
nom:"Camponotus ligniperda",
image:"image/camponotus-ligniperda.jpg",
taille:"6 à 14 mm",
reine:"16 mm",
difficulte:"Moyen",
essaimage:"Printemps",
diapause:"Oui"
},

{
nom:"Camponotus cruentatus",
image:"image/camponotus-cruentatus.jpg",
taille:"6 à 12 mm",
reine:"14 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Camponotus lateralis",
image:"image/camponotus-lateralis.jpg",
taille:"3 à 6 mm",
reine:"8 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Formica fusca",
image:"image/formica-fusca.jpg",
taille:"4 à 7 mm",
reine:"10 mm",
difficulte:"Facile",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Formica rufa",
image:"image/formica-rufa.jpg",
taille:"5 à 9 mm",
reine:"11 mm",
difficulte:"Difficile",
essaimage:"Printemps",
diapause:"Oui"
},

{
nom:"Formica cunicularia",
image:"image/formica-cunicularia.jpg",
taille:"4 à 8 mm",
reine:"10 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Tetramorium caespitum",
image:"image/tetramorium-caespitum.jpg",
taille:"2 à 4 mm",
reine:"8 mm",
difficulte:"Facile",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Pheidole pallidula",
image:"image/pheidole-pallidula.jpg",
taille:"2 à 5 mm",
reine:"8 mm",
difficulte:"Facile",
essaimage:"Été",
diapause:"Faible"
},

{
nom:"Crematogaster scutellaris",
image:"image/crematogaster-scutellaris.jpg",
taille:"3 à 5 mm",
reine:"8 mm",
difficulte:"Moyen",
essaimage:"Automne",
diapause:"Oui"
},

{
nom:"Aphaenogaster senilis",
image:"image/aphaenogaster-senilis.jpg",
taille:"4 à 8 mm",
reine:"10 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Faible"
},

{
nom:"Temnothorax nylanderi",
image:"image/temnothorax-nylanderi.jpg",
taille:"2 à 3 mm",
reine:"5 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Myrmica rubra",
image:"image/myrmica-rubra.jpg",
taille:"4 à 6 mm",
reine:"7 mm",
difficulte:"Moyen",
essaimage:"Été",
diapause:"Oui"
},

{
nom:"Tapinoma nigerrimum",
image:"image/tapinoma-nigerrimum.jpg",
taille:"3 à 5 mm",
reine:"8 mm",
difficulte:"Facile",
essaimage:"Été",
diapause:"Faible"
}

];

const liste = document.getElementById("liste-especes");
const recherche = document.getElementById("search");

function afficher(filtre=""){

liste.innerHTML="";

especes
.filter(e =>
e.nom.toLowerCase().includes(filtre.toLowerCase())
)
.forEach(e => {

liste.innerHTML += `
<div class="carte">

<img src="${e.image}" alt="${e.nom}">

<h2>${e.nom}</h2>

<p><strong>Taille :</strong> ${e.taille}</p>
<p><strong>Reine :</strong> ${e.reine}</p>
<p><strong>Difficulté :</strong> ${e.difficulte}</p>
<p><strong>Essaimage :</strong> ${e.essaimage}</p>
<p><strong>Diapause :</strong> ${e.diapause}</p>

</div>
`;

});

}

recherche.addEventListener("input", () => {
afficher(recherche.value);
});

afficher();