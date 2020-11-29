/*jslint sloppy: true, browser: true, plusplus: true*/
var iZamBroj;

function init() {
    iZamBroj = Math.round(Math.random() * 100);
    document.getElementById('pokusaji').value = '';
    document.getElementById('pokusaji').size = 1;
    document.getElementById('broj').value = '';
    document.getElementById('pokusaj').value = 1;
}

function pogodi() {
    var iPokusaj = document.getElementById('pokusaj').value,
        iBroj = document.getElementById('broj').value,
        sPokusaji = document.getElementById('pokusaji').value;

    if (iBroj !== '') {
        window.alert('Pokušaj broj: ' + iPokusaj + '\nPokušaj: ' + iBroj);

        iPokusaj++;
        document.getElementById('pokusaj').value = iPokusaj;
        document.getElementById('pokusaji').value += ' ' + iBroj;
        document.getElementById('pokusaji').size += 3;
        document.getElementById('broj').value = '';
        
    }

}