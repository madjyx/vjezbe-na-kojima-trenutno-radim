/////////////////////////////////
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

// Parks and trees - oba ova pojma imaju zajednicke osobine u imenu i godini izgradnje.
// Kreiracemo klasu koja ce biti super klasa i koja ce sadrzavati ime i godinu izgradnje.
// Nakon toga cemo za svaki park i ulicu imati po jednu podklasu (subclass) koja ce imati svoje specificne osobine i metode.
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


// Obzirom da je Park klasa podklasa klase Element koristimo kljcnu rijec "extends". 
// U konstruktoru moramo naznaciti parametre iz superklase Element, kao i parametre specificne za ovu klasu. 
class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        // Pozivom kljucne rijeci super povezujemo protorype chain izmedju ove dvije klase
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    // Gustoca stabala se racuna na nacina da se broj stabala podijeli sa povrsinom parka.
    treeDensity() {
        const density = this.numTrees / this.area;
        // Koristimo template string za prikaz u konzoli
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

// Klasa Street takodje nasljedjuje klasu Element te se stoga koristi kljucna rijec "extends"
class Street extends Element {
    // Dodatni parametri su duzina ulice i velicina ulice. Ovdje vidimo na koji nacin koritimo defaultne parametre
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    // Obzirom da treba da povezemo brojeve sa nekim kljucnim rijecima logican izbor je da koristimo HashMap ili Map u ES6
    classifyStreet () {
        // Kreiramo varijablu tipa prazne Mape za klasifikaciju ulica.
        const classification = new Map();
        // Putem metode set() unosimo elemente mape. 
        // Element size ce biti i defaultni parametar u konstruktoru. 3 = normal.
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        // Uradimo ispis na konzolu. Podatke iz Mape dobijemo koristenjem metode get().
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

// Kreiramo niz koji ce sadrzavati sve parkove. 
const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

// Kreiramo niz koji ce sadrzavati sve ulice.                  
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


// Sada treba da generisemo izvjestaj. Ideja ja sljedeca. 
// Napravicemo po jednu funkciju za svaki od izvjestaja i proslidicemo u funkciju niz kao parametar.

// Ovo je eksterna ili helper funkcija koju koristimo u metodi reporParks().
// Zadatak funkcije jeste da racuna prosjecne i ukupne godine za svaki niz koji joj proslijedimo. 
function calc(arr) {
    
    // reduce method - se koristi kako bi se niz umanjio/redukovao na jednu vrijednost.
    // reduce motoda spada u ES5 standard. Slicna je forEach petlji koji bi smo mogli takodje koristiti da saberemo sve elemente niza.
    // Unutra koristimo callback funkcije i imamo pristup prethodnom, trenutnom i index elementu, a vracamo prethoni + trenutni element (suma).
    // 0 znaci da sumiranje pocinjemo sa nulom, nula je u biti previous value na pocetku prolaska kroz niz.
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    // Koristimo koncept destructuringa, pri čemu vraćamo niz od dva elementa. 
    // A kasnije mozemo snimiti ove elemente u dvije odvojene varijable.  
    return [sum, sum / arr.length];
    
}

// Izracunati gustinu, prosjecnu godinu gradnje i koji park ima vise od 1000 stabala
function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density - for loopin koristimo forEach metodu i call back funkciju (arrow)
    p.forEach(el => el.treeDensity());
    
    // Average age -- prodjemo kroz sve Parkove i izracunamo koliko su stari
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    // Koristimo princip destructuring-a, a u funkciju calc proslijedimo niz godina od svih parkova
    // u osnovi nam ovdje samo treba avgAge, a ignorisat cemo totalAge
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    // Koristimo novu ES6 metodu findIndex() 
    // Prvo dohvatimo broj stabala u niz, a onda nad tim nizom izvrsimo metodu findIndex da pronadjemo park sa vise od 1000 stabala
    // Prvi dio vraca niz brojeva stabala, a onda findIndex pronalazi index veci od 1000
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}

// Izracunamo ukupnu i prosjecnu duzinu ulica i onda klasificiramo velicine
function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets -- REUSING funkcije calc()
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

// Pozivamo izvjestaje
reportParks(allParks);
reportStreets(allStreets);