/*
1) Criar um array com os nomes de 7 cidades de Pernambuco:

a) Ordenar seus elementos na ordem invertida.
b) Exibir no console.
c) Adicionar duas cidades usando splice().
d) Exibir no console.
*/

var cidades = ["Recife", "Olinda", "Abreu e Lima", "Igarassu", "Gravatá", "Caruaru" , "Paulista"];


console.log("1)")
console.log(cidades.reverse());

cidades.splice(4,0,"Camaragibe", "Petrolina")

console.log(cidades);

/*
2) Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5

a) Obter qual o index onde está o elemento 9.
b) Exibir no console qual a posição no array em que o elemento 9 está.
*/

console.log("-------------------------")

var val = [1,4,8,6,9,2,6,7,3,0,5];

var posi = val.indexOf(9)

console.log("2) A posição do 9 no array é: "+posi)