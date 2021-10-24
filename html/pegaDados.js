const urlBase = 'http://localhost:5000/api/v1/'// 'http://ed8e-187-73-230-31.ngrok.io/api/v1/educacao'

var rotas = ['educacao', 'saude','pontosOnibus', 'seguranca', 'turismo/agencia', 'turismo/hotel', 'turismo/locadoraCarro', 'turismo/restaurante'] // ["educacao", "saude", "seguranca", "hotel"]

const funcBuscaGeral = async () => {

    var dadosRotas = {}

    for (let index = 0; index < rotas.length; index++) {
        const rota = rotas[index];
        var query = location.search.slice(1);
        var partes = query.split('&');
        var params = window.location.search.substr(1).split('&');
        if (params[0]) {
            console.log(params);

            var url = urlBase + rota + '?municipio='+params[0].split('=')[1]
        } else {
            var url = urlBase + rota
        }
        var resp = await fetch(url)
        var json = await resp.json()
        dadosRotas[rota] = json
    }
    console.log(dadosRotas);
    return dadosRotas;
}
