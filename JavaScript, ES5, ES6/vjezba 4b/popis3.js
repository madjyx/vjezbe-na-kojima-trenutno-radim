/*jslint sloppy: true, browser: true, plusplus: true*/
function dodaj(oSelectIz, oSelectU) {
    var sTekst,
        sVrijednost,
        iDuljinaIz,
        iDuljinaU,
        iOdabran;

    iDuljinaU = oSelectU.options.length;
    iDuljinaIz = oSelectIz.options.length;

    if (iDuljinaIz > 0) {
        iOdabran = oSelectIz.selectedIndex;
        if (iOdabran > -1) {
            sTekst = oSelectIz.options[iOdabran].text;
            sVrijednost = oSelectIz.options[iOdabran].value;

            if (sTekst !== '') {
                oSelectU.options[iDuljinaU] = new Option(sTekst, sVrijednost);
            }
        } else {
            window.alert('U izvorišnoj listi nije odabrana nijedna stavka!');
        }
    }
}

function brisi(oSelect) {
    var iDuljina,
        iOdabran,
        iBrojac;

    iOdabran = oSelect.selectedIndex;
    iDuljina = oSelect.options.length - 1;

    if (iOdabran > -1) {
        for (iBrojac = iOdabran; iBrojac < iDuljina; iBrojac++) {
            oSelect.options[iBrojac].text = oSelect.options[iBrojac + 1].text;
            oSelect.options[iBrojac].value = oSelect.options[iBrojac + 1].value;
        }
        oSelect.selectedIndex = -1;
        if (iDuljina > -1) {
            oSelect.options.length--;
        }
    }
}

function lijevo() {
    dodaj(document.getElementById('d_popis'), document.getElementById('l_popis'));
    brisi(document.getElementById('d_popis'));
}

function desno() {
    dodaj(document.getElementById('l_popis'), document.getElementById('d_popis'));
    brisi(document.getElementById('l_popis'));
}