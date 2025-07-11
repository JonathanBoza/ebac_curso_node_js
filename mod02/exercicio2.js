// Módulo 02 - Exercício 2: Função de Rodízio de Veículos
// Curso Node.js EBAC

console.log('=== EXERCÍCIO 2: RODÍZIO DE VEÍCULOS ===\n');

// Regras do rodízio municipal em São Paulo:
// Segunda-feira: finais de placa 1 e 2
// Terça-feira: finais de placa 3 e 4
// Quarta-feira: finais de placa 5 e 6
// Quinta-feira: finais de placa 7 e 8
// Sexta-feira: finais de placa 9 e 0
// Sábado e Domingo: Não tem rodízio

// 1. Função que receba como parâmetro o dia da semana e retorne a lista de veículos que possuem rodízio
function verificarRodizio(diaSemana) {
    const rodizio = {
        'segunda': 'finais de placa 1 e 2',
        'terca': 'finais de placa 3 e 4', 
        'quarta': 'finais de placa 5 e 6',
        'quinta': 'finais de placa 7 e 8',
        'sexta': 'finais de placa 9 e 0',
        'sabado': 'Não tem rodízio',
        'domingo': 'Não tem rodízio'
    };
    
    return rodizio[diaSemana.toLowerCase()] || 'Dia inválido';
}

// Testando a função
console.log('Testando a função verificarRodizio:');
console.log(`Segunda-feira: ${verificarRodizio('segunda')}`);
console.log(`Terça-feira: ${verificarRodizio('terca')}`);
console.log(`Quarta-feira: ${verificarRodizio('quarta')}`);
console.log(`Quinta-feira: ${verificarRodizio('quinta')}`);
console.log(`Sexta-feira: ${verificarRodizio('sexta')}`);
console.log(`Sábado: ${verificarRodizio('sabado')}`);
console.log(`Domingo: ${verificarRodizio('domingo')}`);

// 2. Fazer um laço (while) que imprima a mensagem na tela sobre o rodízio
console.log('\n=== RODÍZIO DA SEMANA (usando while) ===');

const diasSemana = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
let contador = 0;

while (contador < diasSemana.length) {
    const dia = diasSemana[contador];
    const rodizioInfo = verificarRodizio(dia);
    
    console.log(`No dia ${dia.charAt(0).toUpperCase() + dia.slice(1)}, os veículos de rodízio são: ${rodizioInfo}`);
    
    contador++;
}

// Exemplo prático: verificar se um veículo específico está no rodízio
console.log('\n=== VERIFICAÇÃO PRÁTICA ===');

function verificarVeiculoRodizio(placa, diaSemana) {
    const ultimoDigito = placa.slice(-1);
    const rodizioInfo = verificarRodizio(diaSemana);
    
    if (rodizioInfo === 'Não tem rodízio') {
        return `Veículo com placa ${placa} pode circular normalmente no ${diaSemana}.`;
    }
    
    if (rodizioInfo === 'Dia inválido') {
        return 'Dia da semana inválido.';
    }
    
    // Verificar se o último dígito está no rodízio do dia
    const digitosRodizio = rodizioInfo.match(/\d/g);
    if (digitosRodizio && digitosRodizio.includes(ultimoDigito)) {
        return `⚠️  ATENÇÃO: Veículo com placa ${placa} está no rodízio na ${diaSemana}!`;
    } else {
        return `✅ Veículo com placa ${placa} pode circular normalmente na ${diaSemana}.`;
    }
}

// Testando com algumas placas
const placasTeste = ['ABC1234', 'DEF5678', 'GHI9012', 'JKL3456', 'DFC3R43'];

console.log('Verificando placas para Segunda-feira:');
placasTeste.forEach(placa => {
    console.log(verificarVeiculoRodizio(placa, 'segunda'));
});

console.log('\n=== EXERCÍCIO 2 CONCLUÍDO ===');
