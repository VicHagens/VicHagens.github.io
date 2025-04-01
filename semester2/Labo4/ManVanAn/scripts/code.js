const setup = () => {
    let txtTekst=document.getElementById("txtTekst");
    let tekst=txtTekst.value;
    let txtZoekTekst=document.getElementById("txtZoekTekst");
    let zoekTekst=txtZoekTekst.value;
    let txtAantal=document.getElementById("txtAantal");

    let aantal=telVoorkomens(tekst, zoekTekst);
    txtAantal.textContent=aantal;
};

const telVoorkomens = (tekst, zoekTekst) => {
    let result=0;
    let idx=tekst.indexOf(zoekTekst);
    while (idx!=-1) {
        result++;
        idx=tekst.indexOf(zoekTekst, idx+zoekTekst.length);
    }
    return result;
};




window.addEventListener("load", setup);