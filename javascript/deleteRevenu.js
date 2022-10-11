//RECUP DES DONNEES 
var revenuArray = JSON.parse(localStorage.getItem("tabRevenu"));
var montantRevenuArray = JSON.parse(localStorage.getItem("tabMontantRevenu"));

//VARIABLES URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//BTN SUPPRESSION
var btnSupprimerRevenu = document.getElementById("supprimerRevenu");

//RECUP DE LA DEPENSE A SUPPRIMER
titreRevenu = revenuArray[params.id];
montantRevenu = montantRevenuArray[params.id];
document.getElementById("titreRevenu").value = titreRevenu;
document.getElementById("montantRevenu").value = montantRevenu;

//EVENEMENT
btnSupprimerRevenu.onclick = function () {
    revenuArray.splice(params.id, 1);
    montantRevenuArray.splice(params.id, 1);
    localStorage.setItem("tabRevenu", JSON.stringify(revenuArray));
    localStorage.setItem("tabMontantRevenu", JSON.stringify(montantRevenuArray));
    alert("SUPPRIME AVEC SUCCES !!");

}
