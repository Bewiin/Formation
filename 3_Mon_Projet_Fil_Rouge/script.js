/*const menu = document.getElementById("bt-menu");
menu.style.backgroundColor = "red";
menu.style.border = "red";*/

// Récupère l'élément dont vous souhaitez récupérer la propriété CSS


var theme1 =document.querySelector('#theme1');
let value1 = getComputedStyle(theme1);
const bgt1 = value1.backgroundImage;
console.log(bgt1);

theme1.addEventListener('click',()=>{
    let mainContent=document.getElementById("main-content");
    let origin = getComputedStyle(mainContent);
    let bg = origin.backgroundImage;
    mainContent.style.setProperty("background", bgt1);
})


var theme2 = document.querySelector('#theme2');
let valeur = getComputedStyle(theme2);
console.log(valeur);
const bgt2 = valeur.backgroundImage;
console.log(bgt2);



theme2.addEventListener('click',()=>{
    let mainContent = document.getElementById("main-content");
    let origin = getComputedStyle(mainContent);
    let bg = origin.backgroundImage;
    console.log(bg);
    mainContent.style.setProperty("background", bgt2);
})

var theme3 = document.querySelector("#theme3");
let value2 = getComputedStyle(theme3);
const bgt3 = value2.backgroundImage;

theme3.addEventListener("click", ()=>{
    let mainContent = document.getElementById("main-content");
    let origin = getComputedStyle(mainContent);
    let bg = origin.backgroundImage;
    mainContent.style.setProperty("background", bgt3);
})

let menu = document.getElementById('en-tete-main');
let nav = document.querySelector('nav');

 menu.addEventListener('click', ()=>{
    nav.style.transform = 'translateY(0)';
 })
 let croix = document.getElementById('croix');
 croix.addEventListener('click',()=>{
    nav.style.transform = 'translateY(-62vh)';
 })



/* Modifier les variables bootstrap
//récupérer la valeur d'une variable CSS
function getCssVariable(attribut){
    const rootAttr = getComputedStyle(root)
    return rootAttr.getPropertyValue(attribut);
}
//fonction pour modifier la valeur d'une variable
function setCssValue(attribut, value){
    root.style.setProperty(attribut, value);
}
setCssValue('--bg', 'yellow');*/