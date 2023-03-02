//Comentario em linha 
/*
    comentario em bloco
    comentario em bloco
    comentario em bloco
*/

//Exibe uma mensagem no prompt 
console.log("Testando o NodeJS");

//Import da biblioteca radline para interacao com o usuario
var readline = require('readline');

//Instancia do objeto para entrada e saida de dados via prompt 
var entradaDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

//Coloca uma mensagem no prompt para o usuario e o que for digitado e enviado atraves de uma funcao de callback 
entradaDados.question("Digite seu nome: \n", function (nome) {
     console.log("Bem-Vindo, " + nome + ".")
});

/*
VARIAVEIS - referente a aula 2 

var = escopo global
escopo para variavel de maneira global, nao recomendado pois ocupa espaco maior na maquina, 
estando disponivel em todas as funcoes de codigo

let = escopo local
ela so existe dentro de uma funcao, e nao dentro de todas, ocupa espaco menor, e da mais velocidade de procesamento  

const = constante
criar elementos que nao poderao ser alterados ou modificados no seu programa 

*/

/**
 * = > Atribuição 
 * == > Comparação de igualdade de conteúdos
 * === > Comparação de conteúdo e tipo (Conteúdo igual e tipagem igual)
 * !== > Conteúdo diferente e tipagem igual
 * ==! > Conteúdo igual e tipagem diferente
 * !=! > Conteúdo diferente e tipagem diferente
 */