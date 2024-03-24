// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let viagem = parseInt(prompt('Digite quando Km você deseja percorrer'));

if(viagem < 200){
    let passagem1 = viagem * 0.50;
    document.write(`O preço da sua passagem ficou em: R$${passagem1}`);
} else if(viagem > 200){
    let passagem2 = viagem * 0.45;
    document.write(`O preço da sua passagem ficou em: R$${passagem2}`);
}