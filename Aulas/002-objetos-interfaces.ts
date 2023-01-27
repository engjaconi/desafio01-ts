interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // Informamos que esse valor é opcional
};

const pessoa: Pessoa = {
    nome: 'Tiago', 
    idade: 27
};

const outraPessoa: Pessoa = {
    nome: 'Marcos',
    idade: 20,
    profissao: 'Desenvolvedor'
};

const arrayPessoa: Array<Pessoa> = [
    pessoa, 
    outraPessoa
];

const arrayNum: number[] = [
    1, 2, 3
];

const arrayString: Array<string> = [
    '1', '2', '3'
]
