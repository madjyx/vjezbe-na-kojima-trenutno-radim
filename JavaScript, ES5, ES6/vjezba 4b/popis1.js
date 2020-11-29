/*jslint sloppy: true, browser: true*/
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