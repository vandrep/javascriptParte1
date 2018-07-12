let dataString = '17-05-2016';
dataString = dataString.split('-').reverse().join('/');
let data = new Date(dataString);
console.log(data);

let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);

console.log(lista1);
let stringa = lista1.reverse().join('/');
console.log(stringa);

let numeros = [3,2,11,20,8,7];
let novosNumeros = numeros.map(item => item % 2 ? item * 2 : item);
console.log(novosNumeros);


let lista3 = [];

numeros.forEach(numero => {
    if(numero % 2 == 1) lista3.push(numero *= 2)
    else lista3.push(numero);
});
console.log(numeros);
console.log(lista3);

function somaDoisNumeros(numero1, numero2){
    return numero1 + numero2;
}
let numeros2 = [10, 30];
console.log(somaDoisNumeros(...numeros2));


class Aluno {
    constructor(matricula, nome){
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota){
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
]

var aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);
    