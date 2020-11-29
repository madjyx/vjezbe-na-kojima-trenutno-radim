// Definišemo novi niz
var asSP = new Array();

// Napunimo niz nizova
asSP = [
    // prva godina
    ["Matematika;M1", "Uvod u računarstvo i informacione tehnologije;IS1", "Osnove programiranja;PR1",
        "Uvod u informacione sisteme;UIS1", "Strukture podataka i algoritmi;STR1",
        "Operativni sistemi;OS1", "Engleski jezik;EN1"
    ],
    // druga godina
    ["Programski jezici i programiranje;PR2", "Računarske mreže;RM2", "Razvoj i izgradnja informacionih sistema;RIIS2",
        "Baze podataka;BP2", "Elektronsko polsovanje;EP2",
        "Objektno programiranje;OP2"
    ],
    // treca godina
    ["(Kontrola i revizija informacionih sistema;KIS3", "Programiranje u Javi;PRJ3", "Društvene mreže;DR3", "Razvoj mobilnih aplikacija;RMA3",
        "Sigurnost elektronskog poslovanja;SEP3", "Menadžment informatičkih projekata; MIS3"
    ],
    // četvrta godina
    ["Elektronska trgovina;ET4", "Elektronsko bankarstvo;EB4", "Tehnologije i sistemi za podršku korisnicima;TISZP4",
        "Završni rad;ZS4"
    ]
];


// Funkcija koja puni oderedjeni select element
// Argumenti:
//      oMenu:     objekt kojega punimo
//      asStavke:  niz iz kojega se puni
//      iStavka:    iz kojeg podniza se puni
function puniSelect(oMenu, asStavke, iStavka) {
    var iSeparator, iBrojac, sStavkaTekst, sStavkaVrijednost;

    // Postavimo duljinu niza na 0
    oMenu.options.length = 0;
    for (iBrojac = 0; iBrojac < asStavke[iStavka].length; iBrojac++) {
        // Provjerimo gdje je separator
        iSeparator = asStavke[iStavka][iBrojac].indexOf(';');
        if (iSeparator === -1) { // Nema ga            
            sStavkaTekst = asStavke[iStavka][iBrojac];
            sStavkaVrijednost = sStavkaTekst;
        } else { // Separator postoji            
            sStavkaTekst = asStavke[iStavka][iBrojac].substr(0, iSeparator);
            sStavkaVrijednost = asStavke[iStavka][iBrojac].substr(iSeparator + 1);
        }
        oMenu.options[iBrojac] = new Option(sStavkaTekst, sStavkaVrijednost);
    }
    oMenu.selectedIndex = oMenu.options.length - 1;
}


function provjeri() {
    var sIme = '',
        sPrezime = '',
        sPogreska = '',
        sPoruka = '',
        sStudent = '',
        sStatus,
        iStavka,
        iSPStavka,
        iBrojac;

    sIme = document.getElementById('ime').value;
    sPrezime = document.getElementById('prezime').value;
    if (sIme === '') {
        sPogreska += 'Ime je prazno!';
    } else {
        sPoruka += 'Ime je: ' + sIme;
    }
    if (sPrezime === '') {
        sPogreska += '\nPrezime je prazno!';
    } else {
        sPoruka += '\nPrezime je: ' + sPrezime;
    }
    sStatus = document.getElementsByName('status');
    for (iBrojac = 0; iBrojac < sStatus.length; iBrojac++) {
        if (sStatus[iBrojac].checked) {
            sStudent = sStatus[iBrojac].value;
        }
    }
    if (sStudent === '') {
        sPogreska += '\nNiste izabrali status studenta!';
    } else {
        sPoruka += '\Status studenta je: ' + sStudent;
    }

    sPoruka += '\nPrijava na ';
    sPoruka += document.getElementById('prijava').checked ?
            'redovni ispitni rok!' :
            'vanredni ispitni rok!';

    iStavka = document.getElementById('sk').selectedIndex;
    sPoruka += '\nŠkolska godina: ';
    sPoruka += document.getElementById('sk').options[iStavka].text;
    sPoruka += ' (';
    sPoruka += document.getElementById('sk').options[iStavka].value;
    sPoruka += ')!';

    iSPStavka = document.getElementById('predmeti').selectedIndex;
    sPoruka += '\nPredmeti: ';
    sPoruka += document.getElementById('predmeti').options[iSPStavka].text;
    sPoruka += ' (';
    sPoruka += document.getElementById('predmeti').options[iSPStavka].value;
    sPoruka += ')!';

    if (sPogreska === '') {
        window.alert(sPoruka);
        return true;
    } else {
        window.alert(sPogreska);
        return false;
    }
}