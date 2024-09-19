const apiKeyAlphaVantage = 'SUA_CHAVE_API_AQUI'; // Substitua pela sua chave API da Alpha Vantage

// Fetch S&P500 data (using Alpha Vantage)
async function fetchSP500() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=${apiKeyAlphaVantage}`);
        const data = await response.json();
        const price = data['Global Quote']['05. price'];
        document.getElementById('sp500').querySelector('.price').textContent = `$${parseFloat(price).toFixed(2)}`;
    } catch (error) {
        document.getElementById('sp500').querySelector('.price').textContent = 'Error loading';
    }
}

// Fetch BTC/USD data (using CoinGecko)
async function fetchBTCUSD() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const price = data.bitcoin.usd;
        document.getElementById('btc-usd').querySelector('.price').textContent = `$${price}`;
    } catch (error) {
        document.getElementById('btc-usd').querySelector('.price').textContent = 'Error loading';
    }
}

// Fetch EUR/USD data (using Alpha Vantage)
async function fetchEURUSD() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=${apiKeyAlphaVantage}`);
        const data = await response.json();
        const price = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        document.getElementById('eur-usd').querySelector('.price').textContent = `$${parseFloat(price).toFixed(4)}`;
    } catch (error) {
        document.getElementById('eur-usd').querySelector('.price').textContent = 'Error loading';
    }
}

// Fetch EUR/BRL data (using Alpha Vantage)
async function fetchEURBRL() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=BRL&apikey=${apiKeyAlphaVantage}`);
        const data = await response.json();
        const price = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        document.getElementById('eur-brl').querySelector('.price').textContent = `R$${parseFloat(price).toFixed(4)}`;
    } catch (error) {
        document.getElementById('eur-brl').querySelector('.price').textContent = 'Error loading';
    }
}

// Fetch USD/BRL data (using Alpha Vantage)
async function fetchUSDBRL() {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=BRL&apikey=${apiKeyAlphaVantage}`);
        const data = await response.json();
        const price = data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
        document.getElementById('usd-brl').querySelector('.price').textContent = `R$${parseFloat(price).toFixed(4)}`;
    } catch (error) {
        document.getElementById('usd-brl').querySelector('.price').textContent = 'Error loading';
    }
}

// Fetch all data every 30 seconds
function fetchAllData() {
    fetchSP500();
    fetchBTCUSD();
    fetchEURUSD();
    fetchEURBRL();
    fetchUSDBRL();
}

// Run the fetch initially
fetchAllData();

// Set interval to update every 30 seconds
setInterval(fetchAllData, 30000);
