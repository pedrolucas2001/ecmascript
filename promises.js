// Criação de promises
const primeiroPromise = new Promise((resolve,reject)=>{
    var nome ="Pedro";

    if(nome === "Alice"){
        resolve("O usuário foi encontrado!");
    }else {
        reject("O usuário não foi encontrado!");
    }
})

primeiroPromise.then((data)=>{
    console.log(data);
});








