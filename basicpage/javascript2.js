function pesquisar(){
let cep = document.getElementById('cep').value


  axios.get('https://brasilapi.com.br/api/cep/v2/+cep')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

}