// Módulo 02 - Exercício 1: Lista de Dicionários de Carros
// Curso Node.js EBAC

console.log('=== EXERCÍCIO 1: LISTA DE CARROS ===\n');

// 1. Criar uma lista de dicionários que contenha pelo menos 4 carros
// Cada item deve ser um dicionário com informações: placa, modelo e ano
let carros = [
    {
        modelo: "Civic",
        ano: 2020,
        placa: "ABC1234"
    },
    {
        modelo: "Corolla",
        ano: 2019,
        placa: "DEF5678"
    },
    {
        modelo: "Onix",
        ano: 2021,
        placa: "GHI9012"
    },
    {
        modelo: "HB20",
        ano: 2018,
        placa: "JKL3456"
    }
];

console.log('Lista inicial de carros:');
console.log(carros);

// 2. Utilizando manipulações de lista (push) adicione o seguinte dicionário
const novoCarroCross = {
    modelo: "T-Cross",
    ano: 2022,
    placa: "DFC3R43"
};

carros.push(novoCarroCross);

console.log('\nApós adicionar o T-Cross:');
console.log(carros);

// 3. Ordene a sua lista de carros pelo nome do modelo em ordem alfabética
carros.sort((a, b) => a.modelo.localeCompare(b.modelo));

console.log('\nLista ordenada por modelo (ordem alfabética):');
console.log(carros);

// Exibindo de forma mais legível
console.log('\n=== LISTA FINAL DE CARROS ===');
carros.forEach((carro, index) => {
    console.log(`${index + 1}. Modelo: ${carro.modelo} | Ano: ${carro.ano} | Placa: ${carro.placa}`);
});

console.log('\n=== EXERCÍCIO 1 CONCLUÍDO ===\n');
