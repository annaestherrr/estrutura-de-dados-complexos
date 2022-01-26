// Crie um array que receba 5 itens e exiba no console.
let objetos = ["lápis", "caneta", "borracha", "tesoura", "apontador"];
console.log(objetos)

//Utilize um método para adicionar um nome ao inicio do array.
objetos.unshift("caderno")
console.log(objetos)

//Utilize um método para remover o último nome do array.
objetos.pop()
console.log(objetos)

//Utilize um método para adicionar dois nomes ao fim do array.
objetos.push("livro", "papel")
console.log(objetos)

//Utilize um método para remover o primeiro nome do array.
objetos.shift()
console.log(objetos)

//Utilize um método para organizar em ordem crescente o seguinte array: const numbers = [7,5,6,3,8,9,2,1,4]
const numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort()
console.log(numbers)