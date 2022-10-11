var revenuArray = JSON.parse(localStorage.getItem("tabRevenu"));
var montantRevenuArray = JSON.parse(localStorage.getItem("tabMontantRevenu"));

//VARIABLES-URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

var titreRevenu = revenuArray[params.id];
var montantRevenu = montantRevenuArray[params.id];

document.getElementById("titreRevenu").value = titreRevenu;
document.getElementById("montantRevenu").value = montantRevenu;

var btnModifier = document.getElementById("modifierRevenu");
btnModifier.onclick = function () {
    var revenu = document.getElementById("titreRevenu").value;
    var montant = document.getElementById("montantRevenu").value;

    revenuArray[params.id] = revenu;
    montantRevenuArray[params.id] = montant;

    localStorage.setItem("tabRevenu", JSON.stringify(revenuArray));
    localStorage.setItem("tabMontantRevenu", JSON.stringify(montantRevenuArray));
}

