//1) Fazer um array de filmes e listar cada elemento com a formatação = "Filme 1 : {elemento}"
class Filme{
    constructor(nomeFilme,anoLancamento,diretor,genero,sinopse){
        this.nomeFilme = nomeFilme;
        this.anoLancamento = anoLancamento;
        this.diretor = diretor;
        this.genero = genero;
        this.sinopse = sinopse; 
    }
}

var poderosoChefao = new Filme("Poderoso chefão","1972","Francis Ford Coppola","Drama","O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.");
var jogoImitação = new Filme("O jogo da imitação","2014","Morten Tyldum","Drama","Durante a segunda guerra mundial, um inglês gênio da matemática tenta decifrar o código alemão Enigma com a ajuda de seus colegas.");
var snowden = new Filme("Snowden: Herói ou Traidor","2016","Oliver Stone","Biografia","As técnicas ilegais da vigilância do NSA são filtradas ao público por um empregado deles, Edward Snowden, em forma de documentos classificados e dados a prensa.");


// Criando ARRAY de filme
// Convertendo propriedades do objeto em ARRAY com indíces
var entriesPoderosoChefao = Object.entries(poderosoChefao)
var entriesJogoImitacao = Object.entries(jogoImitação)
var entriesSnowden = Object.entries(snowden)

console.log(entriesJogoImitacao,entriesPoderosoChefao,entriesSnowden);









