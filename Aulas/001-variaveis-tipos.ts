var a = 'a'; // Escopo global, risco ao utilizar.
let b = 'b'; // Escopo local, variável seu valor.
const c = 'c'; // Escopo local, valor depois de passado não pode ser alterado.

let d: string = 'd';
//let d1: string = 1; // Erro, não aceita número. Declarado como string.
let e: number = 2;
//let e1: number = 'e' // Erro, não aceita string. Declarado como number.
let f: boolean = true;
//let g: boolean = 1; // Não aceita número como boolean.
let g: undefined;
let h: null;
let i: any; // Aceita qualquer tipo, tem o contexto certo para ser usado.
let j: string | number = 2; // Declaramos que aceita os dois tipos. Não recomendado.
j = 'j';
