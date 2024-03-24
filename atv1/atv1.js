// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let soma = 0;
let estudantes = -1;
let idades;

while ((idades = parseInt(prompt("Digite a idade do aluno (ou 999 para encerrar):"))) !== 999) {
    if (!isNaN(idades)) { 
        soma += idades;
        estudantes++;
    }
}

if (estudantes >= 0) {
    console.log("Quantidade de alunos na turma:", estudantes + 1);
    console.log("Média de idade dos alunos:", (soma / estudantes).toFixed(2));
} else {
    console.log("Não há alunos na turma.");
}