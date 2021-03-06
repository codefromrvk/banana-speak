// let a = prompt("enter");
// console.log(a);
let btnTranslate = document.querySelector("#btn-translate");

let text = document.querySelector("#text");

let divOutput = document.querySelector("#divOutput")

let serverURL = "https://api.funtranslations.com/translate/minion.json";

// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json


function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server ,try again after sometime")
}
btnTranslate.addEventListener("click", () => {

    // console.log("clicked");
    // console.log(text.value);

    let inputText = text.value;

    fetch(getTranslationURL(inputText))
        .then(res => res.json())
        .then(json => {

            console.log(json.contents.translated)
            divOutput.innerText = json.contents.translated;
        })

        .catch(errorHandler)


})

