const apikey = {
    key: 'c8afbc7f-8296-4483-af58-77686ab11c9b',
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro ao executar a requisição, status' + response.status)
        }
        return response.json()
    })
    .then((api) => {
        var text = ''
        for(let i = 0; i < 10; i++){
            
            console.log(api)

            text = text + `
            <div class="media">
                <img src = '' class= 'align-self-center mr-3' alt = 'coin' width='100' height='60'>
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>
            `
            document.getElementById('coins').innerHTML = text
        }
    })
