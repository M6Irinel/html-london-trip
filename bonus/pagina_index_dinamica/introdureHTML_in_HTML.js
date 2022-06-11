
// link file json
const json = 'ordinare_index_con_pezzi.json';

// chiamo il file json e lo transformo in leggibile
fetch(json).
    then(risposta => risposta.json()).
    then(fileJson => {

        this.fileJsonV = fileJson;

        // uso una funzione update per transmettere il file json leggibile
        update();

    });

function update(json = fileJsonV) {
    this.j = json;

    // chiamo funzione preparoFileIndex 
    preparoFileIndex();

    // chiamata Function HEADER
    HEADER();

    // chiamata Function NAV
    NAV();
    
    // chiamata Function MAIN
    MAIN();

    // chiamata Function FOOTER
    FOOTER();
}

// sistemo nella index.html i tag: header, nav, main, footer
function preparoFileIndex(json = j) {
    for (let i = 0; i < json.tags.length; i++) {
        document.body.innerHTML += json.tags[i];
    }
}


// prende dei file HTML, e li metto nelle tag specifico
function pezzoHTML(indexFile, nome = nerd, tager = tag, json = j) {

    // eseguo il fetch per i link che si trovano al interno del json
    fetch(json[nome][indexFile]).
        then(risposta => risposta.text()).
        then(fileHTML => {

            // inseriamo dentro ai tag i file HTML
            document.querySelector(json.tag[tager]).innerHTML += fileHTML;
        });
}


// inserimento di tutti i link del header nel json
function HEADER(json = j) {
    this.nerd = "header";
    this.tag = 'h';

    for (let i = 0; i < json[this.nerd].length; i++) {
        // pezzoHTML(i);
        if(pezzoHTML(i)){
            continue;
        }
    }
}

// inserimento di tutti i link del nav nel json
function NAV(json = j) {
    this.nerd = "nav";
    this.tag = 'n';
    
    for (let i = 0; i < json[this.nerd].length; i++) {
        // pezzoHTML(i);
        if(pezzoHTML(i)){
            continue;
        }
    }
}

// inserimento di tutti i link del main nel json
function MAIN(json = j) {
    this.nerd = "main";
    this.tag = 'm';
    
    for (let i = 0; i < json[this.nerd].length; i++) {
        // pezzoHTML(i);
        if(pezzoHTML(i)){
            continue;
        }
    }
}

// inserimento di tutti i link del footer nel json
function FOOTER(json = j) {
    this.nerd = "footer";
    this.tag = 'f';
    
    for (let i = 0; i < json[this.nerd].length; i++) {
        // pezzoHTML(i);
        if(pezzoHTML(i)){
            continue;
        }
    }
}