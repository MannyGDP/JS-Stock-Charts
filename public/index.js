async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanavas = document.querySelector('#average-price-chart');

    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=f47ffb8a802f44509160330da17f6bce')
    
    const result = await response.json()

    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];

    console.log(Chart);
}

main()