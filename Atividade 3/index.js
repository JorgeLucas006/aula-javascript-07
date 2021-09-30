/*
1)      Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:

a) O número de caracteres da string.
b) A string com todas suas letras em maiúsculo.
c) O número de vogais da string.
d) A string com todas suas letras em minúsculo.
e) Fazer a busca pela palavra humanidade e exibir o index onde ela está.
*/

var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.";

function contadorDeVogal(string){
  let vogais = "aAeEiIoOuUáÁéÉíÍóÓúÚ";
  let contador = 0;

  for(var i = 0; i < string.length; i++){
    if(vogais.indexOf(string[i]) !== -1){
      contador += 1;
    }
  }

  return contador
}

console.log("1) ")
console.log("a)" + texto.length)
console.log("b)" + texto.toUpperCase())
console.log("c)" + contadorDeVogal(texto))
console.log("d)" + texto.toLowerCase())
console.log("e)" + texto.indexOf("humanidade"))

/*
2)      Percorrer os números pares menores que 100.

a) Adicionar em um array.
b) Transformar o array em string.
c) Exibir no console.
*/

console.log("------------------------------------")
console.log("2) ")

function pares(){
  var array= [];
  for(var i = 0; i < 100; i++){
    if(i % 2 === 0){
      array.push(i);
    }
  }
  return array;
}

console.log(pares());