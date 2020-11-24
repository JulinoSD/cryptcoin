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
        const text = ''
        for(let i = 0; i >= 10; i++){

            text = text + `
            <div className="media">
                <img src = 'coin.jpg' class= 'align-self-center mr-3' alt = 'coin' width='100' height='60'>
                <div className="media-body">
                    <h5 className="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                </div>
            </div>
            `
            document.getElementById('coin').innerHTML = text
        }
        console.log(api)
    })
    .catch((error) => {
        console.error(error.message)
    })

