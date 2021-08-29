// let a = prompt("enter");
// console.log(a);
let btnTranslate = document.querySelector("#btn-translate");

let text = document.querySelector("#text");

console.log(text)
btnTranslate.addEventListener("click", () => {

    console.log("clicked");
    console.log(text.value);


})
