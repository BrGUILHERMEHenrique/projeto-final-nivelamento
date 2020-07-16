
let lista = [];
for(let i = 0; i < 5; i++){
    lista.push(prompt('Digite um número:'))
}

let menor = Math.min(...lista);
let maior = Math.max(...lista);

document.write(` o maior número da lista é ${maior} e o menor é ${menor} <br>`);

for (let valor of lista){
    if(valor % 2 == 0){
        document.write(`O número ${valor} é  <br>`);
    }else{
        document.write(`O número ${valor} é Impar <br>`);
    }
}
    

    var map = lista.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
    }, {});
    
    for (let i in map) {
    document.write(`<p>O número ${i} foi repetido ${map[i]}</p>`)
    }
   
    

