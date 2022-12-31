/************GESTION ICONE ************/
var icone = document.getElementById("icone");
icone.setAttribute('src', 'ressources/rouge.png');
/************CRUD DEPENSE ************/

var depenseArray = JSON.parse(localStorage.getItem("tabDepense"));
var montantArray = JSON.parse(localStorage.getItem("tabMontant"));
var idArray = JSON.parse(localStorage.getItem("tabId"));

if (depenseArray == null || montantArray == null || idArray == null) {
    var depenseArray = [];
    var montantArray = [];
    var idArray = [];

    localStorage.setItem("tabDepense", JSON.stringify(depenseArray));
    localStorage.setItem("tabMontant", JSON.stringify(montantArray));
    localStorage.setItem("tabId", JSON.stringify(idArray));
}

var tabDepense = document.getElementById("tabDepense");

var depenseArray = JSON.parse(localStorage.getItem("tabDepense"));
var montantArray = JSON.parse(localStorage.getItem("tabMontant"));

var idCell = 0;
var j = 0;
if (depenseArray != null && montantArray != null) {
    for (var i = 0; i < depenseArray.length; i++) {//Pour créer autant de ligne que nécessaire
        var row = document.createElement("tr");//Creation Line
        var cell1 = document.createElement("td");// 3 Cells
        var cell2 = document.createElement("td");//Price
        cell2.id = "cellMontant";
        var cell3 = document.createElement("td");
        cell3.id = "buttons"

        cell1.innerHTML = depenseArray[i];
        cell2.innerHTML = montantArray[j];

        cell3.innerHTML = "<a id=\"btnModifierDepense\" type=\"button\" href=\"updateDepense.html?id=" + idCell +
            "\">MODIFIER &nbsp;<i class=\"fa-solid fa-pen-to-square\"></i></a>"
            + " <a id=\"btnSupprimerDepense\" type=\"button\" href=\"delete.html?id=" + idCell +
            "&classD=" + idCell + "\">SUPPRIMER &nbsp;<i class=\"fa-solid fa-trash\"></i></a > ";
        cell3.className = idCell++;
        //ADD 3 CELLS
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        //ADD LINE
        tabDepense.appendChild(row);
        j++;
    }
}
/**/
var totalMontantDepense = document.querySelectorAll("#cellMontant");
var depenseLabel = document.getElementById("depenseLabel");
var montantTotal = 0;
for (var i = 0; i < totalMontantDepense.length; i++) {
    //alert(typeof (totalMontantDepense[i].textContent));
    montantTotal += Number(totalMontantDepense[i].textContent);
}
depenseLabel.value = montantTotal;


/************ CRUD REVENU ************/
var revenuArray = JSON.parse(localStorage.getItem("tabRevenu"));
var montantRevenuArray = JSON.parse(localStorage.getItem("tabMontantRevenu"));



if (revenuArray == null || montantRevenuArray == null) {
    var revenuArray = [];
    var montantRevenuArray = [];

    localStorage.setItem("tabRevenu", JSON.stringify(revenuArray));
    localStorage.setItem("tabMontantRevenu", JSON.stringify(montantRevenuArray));
}

var tabRevenu = document.getElementById("tabRevenu");

var revenuArray = JSON.parse(localStorage.getItem("tabRevenu"));
var montantRevenuArray = JSON.parse(localStorage.getItem("tabMontantRevenu"));

var idCellRevenu = 0;
var k = 0;
if (revenuArray != null && montantRevenuArray != null) {
    for (var i = 0; i < revenuArray.length; i++) {//Pour créer autant de ligne que nécessaire
        var rowRevenu = document.createElement("tr");//Creation Line
        var cellR1 = document.createElement("td");// 3 Cells
        var cellR2 = document.createElement("td");//Price
        cellR2.id = "cellRevenu";
        var cellR3 = document.createElement("td");
        cellR3.id = "buttonsRevenu"

        cellR1.innerHTML = revenuArray[i];
        cellR2.innerHTML = montantRevenuArray[k];
        cellR2.align = "center";

        cellR3.innerHTML = "<a id=\"btnModifierRevenu\" type=\"button\" href=\"updateRevenu.html?id=" + idCellRevenu +
            "\">MODIFIER &nbsp;<i class=\"fa-solid fa-pen-to-square\"></i></a>"
            + " <a id=\"btnSupprimerRevenu\" type=\"button\" href=\"deleteRevenu.html?id=" + idCellRevenu +
            "&classD=" + idCell + "\">SUPPRIMER &nbsp;<i class=\"fa-solid fa-trash\"></i></a > ";
        cellR3.className = idCellRevenu++;
        //ADD 3 CELLS
        rowRevenu.appendChild(cellR1);
        rowRevenu.appendChild(cellR2);
        rowRevenu.appendChild(cellR3);
        //ADD LINE
        tabRevenu.appendChild(rowRevenu);
        k++;
    }
}

var totalMontantRevenu = document.querySelectorAll("#cellRevenu");
var budgetLabel = document.getElementById("budgetLabel");
var montantTotalRevenu = 0;
for (var i = 0; i < totalMontantRevenu.length; i++) {
    //alert(typeof (totalMontantDepense[i].textContent));
    montantTotalRevenu += Number(totalMontantRevenu[i].textContent);
}
budgetLabel.value = montantTotalRevenu;
var soldeLabel = document.getElementById("soldeLabel");
soldeLabel.value = Number(budgetLabel.value) - Number(depenseLabel.value);

/******* SOLDE ******/

var soldeColor = document.getElementById("soldeLabel");
// soldeColor.style.opacity = .9;
var icone = document.getElementById("icone");
if (soldeColor.value > 0) {
    icone.setAttribute('src', 'ressources/up.png');
}
else {
    icone.setAttribute('src', 'ressources/down.png');
}


