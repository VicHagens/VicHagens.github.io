const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx = result.indexOf(oud);
    while (idx!==-1){
        let voor=result.slice(0, idx);
        let na = result.slice(idx+oud.length, result.length);
        result = voor+nieuw+na;
        idx = result.indexOf(oud, idx+nieuw.length);
    }
    return result;
}

const setup = () => {

    let inputTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst);


}
window.addEventListener("load", setup);