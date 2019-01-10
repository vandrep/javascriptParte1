'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dataString = '17-05-2016';
dataString = dataString.split('-').reverse().join('/');
var data = new Date(dataString);
console.log(data);

var lista1 = ['banana', 'laranja', 'mamão'];
var lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push.apply(lista1, lista2);

console.log(lista1);
var stringa = lista1.reverse().join('/');
console.log(stringa);

var numeros = [3, 2, 11, 20, 8, 7];
var novosNumeros = numeros.map(function (item) {
    return item % 2 ? item * 2 : item;
});
console.log(novosNumeros);

var lista3 = [];

numeros.forEach(function (numero) {
    if (numero % 2 == 1) lista3.push(numero *= 2);else lista3.push(numero);
});
console.log(numeros);
console.log(lista3);

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}
var numeros2 = [10, 30];
console.log(somaDoisNumeros.apply(undefined, numeros2));

var Aluno = function Aluno(matricula, nome) {
    _classCallCheck(this, Aluno);

    this.matricula = matricula;
    this.nome = nome;
};

var Prova = function Prova(aluno, nota) {
    _classCallCheck(this, Prova);

    this.aluno = aluno;
    this.nota = nota;
};

var avaliacoes = [new Prova(new Aluno(1, 'Luana'), 8), new Prova(new Aluno(2, 'Cássio'), 6), new Prova(new Aluno(3, 'Barney'), 9), new Prova(new Aluno(4, 'Bira'), 5)];

var aprovados = avaliacoes.filter(function (prova) {
    return prova.nota >= 7;
}).map(function (prova) {
    return prova.aluno.nome;
});

console.log(aprovados);
//# sourceMappingURL=testes.js.map