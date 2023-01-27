//console.log(array[0]);

//console.log(array.length); // Exibe a quantidade de elementos do array

//array.push(8); // Adiciona o elemento no fim do array

//array.pop(); // Remove o último elemento do array

//const buscaNum = array.find(num => num > 2); // Retorna o primeiro valor que atende a condição. console: 7

const buscaNum = array.forEach(num => {
    if (num>2) {
        console.log(num);
    }
});