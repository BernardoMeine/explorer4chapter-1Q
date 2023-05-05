/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let firstNumber = Number(prompt("Insira o primeiro número"));

let secondNumber = Number(prompt("Insira o segundo número"));

const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;
const rest = (a,b) => a % b;

alert(`
  A soma dos dois números é ${sum(firstNumber, secondNumber)}
`)

alert(`
  A subtração dos dois números é ${sub(firstNumber, secondNumber)}
`)

alert(`
  A multiplicação dos dois números é ${mult(firstNumber, secondNumber)}
`)

alert(`
  A divisão dos dois números é ${div(firstNumber, secondNumber).toFixed(2)}
`)

alert(`
  O resto da divisão dos dois números é ${rest(firstNumber, secondNumber).toFixed(2)}
`)

if(firstNumber === secondNumber) {
  alert("Os números inseridos são iguais")
} 
else {
  alert("Os números inseridos são diferentes")
}

if(sum(firstNumber, secondNumber) % 2 === 0) {
  alert("A soma dos dois números é par")
}
else {
  alert("A soma dos dois números é ímpar")
}