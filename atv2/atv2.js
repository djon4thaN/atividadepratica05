// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioPagosF = 0;
let salarioF = 0;
let salarioPagosM = 0;
let salarioM = 0;
let continuar = true;

while(continuar){
let salario = Number(prompt("digite seu salario: "))
let sexo = prompt("Digite seu sexo? (1) para feminino ou (2) para masculino! ");

if (salario < 0){
    document.write("Digite um salario valido ")
}
else if(sexo == 1){
    salarioF += salario;
    salarioPagosF++
}
else if (sexo == 2){
    salarioM += salario
    salarioPagosM++
}
else{
    document.write("Digite o sexo corretamente")
}
    continuar = prompt("Quer continuar lendo? se sim digite (1) caso nao digite (2)")
    if(continuar == 1){
        continuar == true;
    }
    else{
        continuar = false;
    }
}
document.write(`Total pago aos homens: ${salarioM}, a quantidade de homens é ${salarioPagosM}. <br>`)
document.write(`Total pago as mulheres: ${salarioF}, a quantidade de mulheres são ${salarioPagosF}.`)