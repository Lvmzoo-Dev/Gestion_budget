var depenseArray = JSON.parse(localStorage.getItem("tabDepense"));
var montantArray = JSON.parse(localStorage.getItem("tabMontant"));
var idArray = JSON.parse(localStorage.getItem("tabId"));

var btnValider = document.getElementById("validerDepense");
btnValider.onclick = function () {

    var depense = document.getElementById("titreDepense").value;
    var montant = document.getElementById("montantDepense").value;

    if (depenseArray[0] == 'null') {

        depenseArray[0] = depense;
        montantArray[0] = montant;

    }
    else {
        depenseArray.push(depense);
        montantArray.push(montant);


    }

    localStorage.setItem("tabDepense", JSON.stringify(depenseArray));
    localStorage.setItem("tabMontant", JSON.stringify(montantArray));
    localStorage.setItem("tabId", JSON.stringify(idArray));

}


/************ REVENU **************/
