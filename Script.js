// Função para fazer a requisição de dados para cada cotação
async function fetchPrice(url, elementId) {
    try {
        // Realiza a requisição para o URL passado
        const response = await fetch(url);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) throw new Error('Erro ao buscar dados');
        
        // Converte a resposta para texto (porque estamos simulando)
        const data = await response.text();

        // Atualiza o card com os dados
        document.getElementById(elementId).querySelector('.price').innerText = `R$ ${data}`;
    } catch (error) {
        // Caso haja erro, exibe uma mensagem de erro
        document.getElementById(elementId).querySelector('.price').innerText = 'Erro ao carregar';
        console.error(error);
    }
}

// Função para atualizar as cotações de todos os cards
function updatePrices() {
    // Atualiza o card do S&P500
    fetchPrice('https://finviz.com/map.ashx', 'sp500');

    // Atualiza o card do BTC/USD
    fetchPrice('https://finviz.com/crypto_charts.ashx?t=BTCUSD&p=d', 'btc');

    // Atualiza o card do EUR/USD
    fetchPrice('https://finviz.com/forex_charts.ashx?t=EURUSD&p=d', 'eurusd');

    // Atualiza o card do EUR/REAL
    fetchPrice('https://br.investing.com/currencies/eur-brl', 'eurbrl');

    // Atualiza o card do USD/REAL
    fetchPrice('https://es.investing.com/currencies/usd-brl', 'usdbrl');
}

// Define um intervalo para atualizar as cotações a cada 30 segundos
setInterval(updatePrices, 30000);

// Atualiza as cotações ao carregar a página
updatePrices();
