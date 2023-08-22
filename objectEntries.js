const cursos = {
    Html:30,
    Css:40,
    Js:35,
    Java:20,
    Bootstrap:30
}
// cursos =>  ARROW FUNCTION
// mesma coisa que
// function (cursos){
//
// }

// .map aplica uma função para cada elemento de um array ou objeto

//KEYS apresenta o nome dos atributos
const cursosKey = Object.keys(cursos);
document.querySelector("#keysDiv").innerHTML = `<ul>${cursosKey.map(cursos => `<li>${cursos}</li>`)}</ul>`;

//Entries apresenta o nome e os valores dos atributos
const cursosEntries = Object.entries(cursos);
document.querySelector("#entriesDiv").innerHTML = cursosEntries;

//MAP faz uma função para cada elemento de ARRAY ou OBJETO
const mapVar = ["Kiwi","Manga","Uva","Morango"];
const resultadoMap = mapVar.map((nomeFruta)=>`<li>Fruta: ${nomeFruta}</li>`);

document.querySelector("#map").innerHTML =`<ul>${resultadoMap}</ul>`;


