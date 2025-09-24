async function pesquisar() {
    let cep = document.getElementById('cep').value
    let result = document.getElementById('result')

    if (cep.length == 0) {

        console.log(cep, document.getElementById('cep'))
        alert("Digite um cep primeiro")

    } else {
        
    console.log(cep, document.getElementById('cep'))

    let res = await axios.get("https://brasilapi.com.br/api/cep/v2/"+cep)

    let x = Object.values(await res.json())

    console.log(x)
    
    for (let pos in x) {
        result.innerHTML += `${x[pos]}<br>`    
    }
    }

    
}

