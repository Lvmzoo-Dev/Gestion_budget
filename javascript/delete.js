//RECUP DES DONNEES 
var depenseArray = JSON.parse(localStorage.getItem("tabDepense"));
var montantArray = JSON.parse(localStorage.getItem("tabMontant"));

//VARIABLES URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//BTN SUPPRESSION
var btnSupprimerDepense = document.getElementById("supprimerDepense");

//RECUP DE LA DEPENSE A SUPPRIMER
titreDepense = depenseArray[params.id];
montantDepense = montantArray[params.id];
document.getElementById("titreDepense").value = titreDepense;
document.getElementById("montantDepense").value = montantDepense;

//EVENEMENT
btnSupprimerDepense.onclick = function () {
    depenseArray.splice(params.id, 1);
    montantArray.splice(params.id, 1);
    localStorage.setItem("tabDepense", JSON.stringify(depenseArray));
    localStorage.setItem("tabMontant", JSON.stringify(montantArray));
}
