let lista = [];
let num = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite um número:"));
let num3 = parseInt(prompt("Digite um número:"));
let num4 = parseInt(prompt("Digite um número:"));
let num5 = parseInt(prompt("Digite um número:"));
lista.push(num, num2, num3, num4, num4, num5);

let menor = Math.min(...lista);
let maior = Math.max(...lista);

document.write(` o maior número da lista é ${maior} e o menor é ${menor}`);

for (let valor of lista){
    if(valor % 2 == 0){
        document.write('Par' + valor);
    }else{
        document.write('impar'+ valor);
    }
}

var cont = 0;

for (let valor of lista){
    if (valor == num || valor == num2 || valor == num3 || valor == num4 || num5){
        cont++
}}

document.write(cont - 5 + 'numeros repitidos');