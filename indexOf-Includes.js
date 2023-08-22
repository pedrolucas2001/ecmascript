var filmes = ["Matrix","Jogos mortais","Rio","Jogos vorazes","Poderoso chefão","Gi Joe"]


//indexOf - Percorre o ARRAY e se tiver algo relacionado a "Matrix" ele retorna o indíce do ARRAY encontrado, senão retorna -1
//RETORNA INDÍCE
var pesquisaNome = filmes.indexOf("Matrix");
if(pesquisaNome === -1){
    console.log("Filme não encontrado");
}else{
    console.log("Filme encontrado. indíce: "+pesquisaNome);
}

//Includes - Percorre o ARRAY e se tiver algo relacionado a "Matrix" ele retorna TRUE, senão retorna FALSE
//RETORNA BOOLEANO
var pesquisaNome = filmes.includes("Jogos mortais");
if(pesquisaNome === false){
    console.log("Filme não encontrado");
}else{
    console.log("Filme encontrado. " + pesquisaNome);
}







