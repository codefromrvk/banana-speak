// let a = prompt("enter");
// console.log(a);
let btnTranslate = document.querySelector("#btn-translate");

let text = document.querySelector("#text");

let divOutput = document.querySelector("#divOutput")

let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";



function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}
btnTranslate.addEventListener("click", () => {

    // console.log("clicked");
    // console.log(text.value);

    let inputText = text.value;

    fetch(getTranslationURL(inputText))
        .then(res => res.json())
        .then(json => console.log(json.contents.translated))
    divOutput.innerText = inputText;

})

