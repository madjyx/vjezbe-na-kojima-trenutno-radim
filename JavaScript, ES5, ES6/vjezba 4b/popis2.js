/*jslint sloppy: true, browser: true, plusplus: true*/
function dodaj() {
    var sStavka,
        iDuljina,
        oSelect;

    oSelect = document.getElementById('popis');
    iDuljina = oSelect.options.length;
    sStavka = document.getElementById('novi').value;

    if (sStavka !== '') {
        oSelect.options[iDuljina] = new Option(sStavka, sStavka);
        document.getElementById('novi').value = '';
    }
}

function brisi() {
    var oSelect,
        iOdabrani,
        iDuljina,
        iBrojac;

    oSelect = document.getElementById('popis');
    iOdabrani = oSelect.selectedIndex;
    iDuljina = oSelect.options.length - 1;

    if (iOdabrani > -1) {
        for (iBrojac = iOdabrani; iBrojac < iDuljina; iBrojac++) {
            //alert('i: ' + i + '\nto: ' +  oSelect.options[i+1].text);
            oSelect.options[iBrojac].text = oSelect.options[iBrojac + 1].text;
            oSelect.options[iBrojac].value = oSelect.options[iBrojac + 1].value;
        }
        oSelect.options.length--;
    }
}