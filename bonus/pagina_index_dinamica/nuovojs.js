// sistemato bug di file html che si posizionano in alcuni posti strani
// contenuto del codice accorciato


// url del nuovo json
let json = 'nuovo.json';

// risposta del json in lettura
fetch(json).then(riposta => riposta.json()).then(fileJson => {
    // prendiamo json che contiene indirizzi .html
    update(fileJson);
});

// lettura controlata dei indirizzi con contenuto .html
// funzione assincrona
async function pezzoHTML(dove, j = fileJson) {

    // loop per ogni contenuto .html
    for (let i = 0; i < j[dove].length; i++) {
        // fetchare ogni indirizzo .html
        let risp = await fetch(j[dove][i]);

        // transformato in file lettura tipo .text()
        let cont = await risp.text();


        // inserimento nel body i file .html transformati in lettura
        document.body.innerHTML += cont;
    }
}


// attivare le funzioni
// file .json diviso in parti html con shortcut
function update(fileJson) {
    this.fileJson = fileJson;

    pezzoHTML('h'); //h = header
    pezzoHTML('n'); //n = nav
    pezzoHTML('m'); //m = main
    pezzoHTML('f'); //f = footer
}
