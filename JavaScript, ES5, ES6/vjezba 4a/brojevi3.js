/*jslint sloppy: true, browser: true, plusplus: true*/
var iZamBroj;

function init() {
    iZamBroj = Math.round(Math.random() * 100);
    document.getElementById('pokusaji').value = '';
    document.getElementById('pokusaj').value = 1;
    document.getElementById('pokusaji').size = 1;
    document.getElementById('broj').value = '';
}

function pogodi() {
    var iPokusaj = parseInt(document.getElementById('pokusaj').value, 10),
        iBroj = parseInt(document.getElementById('broj').value, 10),
        sPokusaji = document.getElementById('pokusaji').value,
        sZnak;

    if (iBroj !== '') {
        if (!isNaN(iBroj)) {
            if (iPokusaj < 8) {
                if (iBroj === iZamBroj) {
                    sZnak = '=';
                    window.alert('Bravo, pogodili ste u ' + iPokusaj + '.-om pokušaju!');
                    init();
                } else {
                    if (iBroj < iZamBroj) {
                        window.alert('Vaš pokušaj (' + iBroj + ') je manji od zamišljenog broja!');
                        sZnak = '<';
                    } else {
                        window.alert('Vaš pokušaj (' + iBroj + ') je veći od zamišljenog broja!');
                        sZnak = '>';
                    }
                    document.getElementById('pokusaji').value += ' ' + sZnak + iBroj;
                    document.getElementById('pokusaji').size += 4;
                    document.getElementById('pokusaj').value++;
                    document.getElementById('broj').value = '';
                }
            } else {
                window.alert('Previše pokušaja! Broj je ' + iZamBroj);
                init();
            }
        } else {
            window.alert('Niste upisali broj!');
            document.getElementById('broj').value = '';
        }

    }
}