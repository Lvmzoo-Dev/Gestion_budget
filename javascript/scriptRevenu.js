var revenuArray = JSON.parse(localStorage.getItem("tabRevenu"));
var montantRevenuArray = JSON.parse(localStorage.getItem("tabMontantRevenu"));

var btnValiderRevenu = document.getElementById("validerRevenu");
btnValiderRevenu.onclick = function () {

    var depense = document.getElementById("titreRevenu").value;
    var montant = document.getElementById("montantRevenu").value;
    if (revenuArray[0] == null) {

        revenuArray[0] = depense;
        montantRevenuArray[0] = montant;
    }
    else {
        revenuArray.push(depense);
        montantRevenuArray.push(montant);
    }

    localStorage.setItem("tabRevenu", JSON.stringify(revenuArray));
    localStorage.setItem("tabMontantRevenu", JSON.stringify(montantRevenuArray));

}
