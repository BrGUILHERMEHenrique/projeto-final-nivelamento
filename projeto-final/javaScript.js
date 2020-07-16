//Váriaveis são como o próprio nome indica declarações que podem ser alteradas dependendo de seu uso

//exemplo de váriavel

var nome = "Guilherme";
//Sendo assim uma váriavel pode assumir qualquer forma:

nome = 0;
// aqui no caso a variavel recebe um número como declaração mas pode receber outra string, obeto, array ou valor booleano


//Constatntes são declarações que não podem ser alteradas, ou seja, como seu nome indica seu valor será sempre o mesmo um valor constante

//Exemplo constante:

const name = "Guilherme";
//Essa constante foi declarada como uma string que contém meu nome e isso não poderá ser alterado

name = 0;
//isso retornará um erro dizendo que a constante name já foi declarada e não pode ser mudada.

//Comandos de decisão, também conhecidos por consicionais são os comandos que tem decisões e condições a serem cumpridas, como IF, ELSEIF e switch

//Exemplos comandos de decisão:

let num = 0;

if(num == 0){//aqui temos a condicional de que o num tem que ter valor igual a zero se for atendida escreverá num na tela
    document.write(num);
}else{//caso o valor de num não seja zero cairá nessa condição e escreverá que não é igual a zero
    document.write('num não é zero');
}

switch(new Date().getDay){//captura o dia da semana, usando essa expressão manda a informação para os casos que são nossas condições
    case 0 :
        document.write('Sunday');//caso o restorno da expressão seja 0 retornará sunday, caso não passará para próxima e assim por diante
        break;
    case 1 :
        document.write('Monday');
        break;
    case 2 :
        document.write('Tuesday');
        break;

    default:
        document.write('Sartunday');

}

//Loops são estruturas de repetição, isto é são estrturas que executaram comandos até que a condição seja completada, sendo eles FOR, FOR IN, FOR OF, WHILE e DO WHILE

//Exemplos de loops:

for(var i = 0; i< 5; i++){//declara a condição de que para i menor que 5 escreva i na tela
    document.write(i);
}

var i = 0 

while(i < 5 ){//declaro que enquanto i for menor que 5 escreva i na tela e depois some mais 1 a ele
    document.write(i);
    i++
}

//funções são blocos de comandos, ou seja, os comandos ali dentro não serão executados até que a mesa seja chamda de alguma forma

//Exemplo funções:
var num1 = 20;
var num2 = 20;
function somar(){//função void que pega as váriaveis e escreve a soma delas na tela
    document.write(num1 + num2);
}
somar();//chama a função

function somarParametros(num3, num4){//função que receb parametros que são declarados como variáveis que serão usadas dentro da função
    document.write(num3 + num4);
}
somarParametros(20, 10);//declara a função passando os parametros

//Escopos são os locais de um código, por exemplo o exterior de um código é global, porém uma fução te escolpo local, ou seja tudo escrito ali dentro fica lai dentro

function somarParametros(num3, num4){//as variáveis declaradas aqui nã podem ser acessadas do lado de fora
    var prof = 'Weberson';
}

var nota = 60;// aqui é do lado de fora e seu escolpo é global pode ser acessado em qualquer lugar 


//inputs são todas as formas de entrada de dados: como as inputs do html e as do javaScript que são:
prompt("Digite um texto aqui");


//output são todo tipo de saida de dado:
document.write();//apaga tudo na tela e escreve o que o usário mandar
alert();//popup 
Element.innerHTML = ;//encaixa o que foi passado na tela


//Array é uma lista de qualquer coisa que for colocada dentro dela, strings, números e etc.

var array = [10, 20, 'nome'];//recebe varias coisas para se colocar na lista

//objetos é algo que precisa receer propriedades, assim como uma lista porém com propriedades especificas 

obj = {
    nome:"guilherme",
    idade: 19,
    sexo: "masculino"
}


//CamelCase é a forma de escrita usada no javaScript onde se começa com minuscula e apartir da segunda palavra se coloca maiusculas na primeira letra
//PascalCase começa com maiusculas e toda nova palavra a primeira letra recebe maiuscula também
//kibab-case é separada por digitos, usada em html
//snake_case as palavras são separadas por underline

//caminho absoluto é quando se declara algo que terá que ser seguido sempre e qualquer alteração pode dar erro como C:/user/desktop/serratec/projetos
//caminho relativo é quando se declara algo que está na mesma pasta ou em outras próximas que podem ser acessadas e mudads facimente como ./serratec/img/

// && server para declarar que duas condições tem que funcionar senão não rola, || esse operador indica que uma ou outra condição que precisa acontecer, ==  iguala as condições, != diferencia as condições

//EPER é uma forma de organizar não só o código mas a vida também, Entender Planeja Executar Revisar para sempre manter as coisa em ordem e evitar muitos erros 

//Pilha é uma pilha de coisas, por exemplo, em uma pilha o ultimo que entra é o primeiro que sai:

var lista = [1, 2, 3, 4, 5];

lista.pop();//retira o ultimo elemento da lista, fazendo assim a fução de pilha

//Fila é uma fila de banco... Bem uma fila segue a razão de que o primeiro a chegar vai ser o primeiro a sair, exemplo:
lista.shift()//retira o primeiro elemento da lista, fazendo assim a fução de fila

//A diferença entre html css e javaScript bem simples até, HTML é como um esqueleto, a estrutura que mantem um site. 
//CSS é como a pele e a maquiagem, css é a parte em que toda beleza de um site vai ser inserida
//javaScript é a alma de tudo, sem ele seria complicado de fazer as coisas por aqui, javaScript dá para o site todas as suas funções e o que pode ser feito dentro do site.

