var depenseArray = JSON.parse(localStorage.getItem("tabDepense"));
var montantArray = JSON.parse(localStorage.getItem("tabMontant"));

//VARIABLES-URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

var titreDepense = depenseArray[params.id];
var montantDepense = montantArray[params.id];

document.getElementById("titreDepense").value = titreDepense;
document.getElementById("montantDepense").value = montantDepense;

var btnModifier = document.getElementById("modifierDepense");
btnModifier.onclick = function () {
    var depense = document.getElementById("titreDepense").value;
    var montant = document.getElementById("montantDepense").value;

    depenseArray[params.id] = depense;
    montantArray[params.id] = montant;

    localStorage.setItem("tabDepense", JSON.stringify(depenseArray));
    localStorage.setItem("tabMontant", JSON.stringify(montantArray));
}

