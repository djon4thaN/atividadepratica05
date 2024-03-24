// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valor1 = parseInt(prompt('Digite o primeiro valor'));
let valor2 = parseInt(prompt('Digite o último valor'));
let valor3 = parseInt(prompt('Digite o incremento que você deseja'));

for(let i = valor1; i <= valor2; i+=valor3) {
    console.log(`${i}`);
}