// let a = prompt("enter");
// console.log(a);
let btnTranslate = document.querySelector("#btn-translate");

let text = document.querySelector("#text");

let divOutput = document.querySelector("#divOutput")

console.log(text.value)
btnTranslate.addEventListener("click", () => {

    // console.log("clicked");
    // console.log(text.value);
    divOutput.innerText = text.value;


})
