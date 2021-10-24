/* todosValores.then((resp) => {
    
}) */

var educacaoMakers = new L.FeatureGroup();
var listasaudeMakers = new L.FeatureGroup();
var listasegurancaMakers = new L.FeatureGroup();
var listaturismoagenciaMakers = new L.FeatureGroup();
var listaturismohotelMakers = new L.FeatureGroup();
var listaturismolocadoraCarroMakers = new L.FeatureGroup();
var listaturismorestauranteMakers = new L.FeatureGroup();
var onibusMakers = new L.FeatureGroup();

function verNoMapa(lat, long) {
    console.log(lat, " ", long);
    map.setView(new L.LatLng(lat, long), 12)
}

window.onload = async function () {
    // Inicializa a pagina buscando todas as informações da API, para poder atualizar o mapa inicialmente.
    const dados = await funcBuscaGeral()
    var listaEducacao = dados.educacao.dados.slice(0, 50)
    var listasaude = dados['saude'].dados.slice(0, 100)
    var listaseguranca = dados['seguranca'].dados.slice(0, 100)
    var listaturismoagencia = dados['turismo/agencia'].dados.slice(0, 100)
    var listaturismohotel = dados['turismo/hotel'].dados.slice(0, 100)
    var listaturismolocadoraCarro = dados['turismo/locadoraCarro'].dados.slice(0, 100)
    var listaturismorestaurante = dados['turismo/restaurante'].dados.slice(0, 100)
    var listaonibus = dados['pontosOnibus'].dados
    
    var query = location.search.slice(1);
    var partes = query.split('&');
    var params = {};

    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        params[chave] = valor;
    });

    const BaseDadoTabela = (dado) => {
        const rua  = dado.LOGRADOURO || dado.ENDERECO_COMPLETO_COMERCIAL
        const nome = dado.NOME || dado.NOME_PESSOA_JURIDICA
        const telefone = dado.TELEFONE || 'Sem telefone'
        const municipio = dado.MUNICIPIO || 'Sem municipio'
        var botao  = "-"
        if( dado.LAT != null ){
            const lat = parseFloat(dado.LAT.replace(',', '.'))
            const long = parseFloat(dado.LONG.replace(',', '.'))
            botao = `<button onclick="verNoMapa(${lat}, ${long});window.scrollTo(0,document.body.scrollHeight);" class="btn btn-sm btn-success"><i class="far fa-eye"></i> Ver no mapa</button>`
        }
        
        var aux = ""
        aux += "<tr>\n"
        aux += `    <td>${nome}</td>\n`
        aux += `    <td>${rua}</td>\n`
        aux += `    <td>${municipio}</td>\n`
        aux += `    <td>${telefone}</td>\n`
        aux += `    <td>${botao}</td>\n`
        aux += "</tr>\n"
        return aux
    }

    const AtualizaTabela = (dados) => {
        var aux = ""
        dados.forEach(element => {
            aux += BaseDadoTabela(element) + "\n";
        });
        document.getElementById("tabelaDetalhe").innerHTML = aux;
    }


    switch (params.pagina) {
        case 'pontosOnibus':
            listaonibus.map((onibus, index) => {
                if (onibus.LAT && onibus.LONG) {

                }
                let lat = parseFloat(onibus.LAT.replace(',', '.'))
                let long = parseFloat(onibus.LONG.replace(',', '.'))
                var a = L.marker([lat, long], { icon: busIco })
                    .on('mouseover', function () {
                        this.bindPopup('Ponto')
                            .openPopup();
                    })
                    .addTo(map)
                onibusMakers.addLayer(a);

            })
            break

        case 'educacao':
            console.log(listaEducacao);            
            AtualizaTabela(listaEducacao);
            listaEducacao.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {

                }
                let lat = parseFloat(educacao.LAT.replace(',', '.'))
                let long = parseFloat(educacao.LONG.replace(',', '.'))
                var a = L.marker([lat, long], { icon: educacaoIco })
                    .on('mouseover', function () {
                        this.bindPopup(educacao.NOME)
                            .openPopup();
                    })

                    .on('mouseover', function () {
                        this.bindPopup(educacao.SIGLAEXTEN)
                            .openPopup();
                    })
                    .addTo(map)
                educacaoMakers.addLayer(a);

            })
            break
        case 'saude':
            AtualizaTabela(listasaude);

            listasaude.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    var a = L.marker([lat, long], { icon: saudeIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listasaudeMakers.addLayer(a);
        
                }
        
            })
            break;
        case 'seguranca':
            AtualizaTabela(listaseguranca);

            listaseguranca.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    var a = L.marker([lat, long], { icon: segurancaIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listasegurancaMakers.addLayer(a);
        
                }
        
            })
            break;
        case 'turismo':
            AtualizaTabela(listaturismoagencia);
            listaturismoagencia.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    var a = L.marker([lat, long], { icon: turismoIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listaturismoagenciaMakers.addLayer(a);
        
                }
        
            })
            listaturismohotel.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    // maluca
                    var a = L.marker([lat, long], { icon: hotelIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listaturismohotelMakers.addLayer(a);
        
                }
        
            })
            listaturismolocadoraCarro.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    var a = L.marker([lat, long], { icon: turismoIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listaturismolocadoraCarroMakers.addLayer(a);
        
                }
        
            })
            listaturismorestaurante.map((educacao, index) => {
                if (educacao.LAT && educacao.LONG) {
                    let lat = parseFloat(educacao.LAT.replace(',', '.'))
                    let long = parseFloat(educacao.LONG.replace(',', '.'))
                    // louca
                    var a = L.marker([lat, long], { icon: restauranteIco }).addTo(map)
                        .on('mouseover', function () {
                            this.bindPopup(educacao.NOME)
                                .openPopup();
                        })
        
                    listaturismorestauranteMakers.addLayer(a);
        
                }
        
            })
            break;

        default:
            chamaTudo();
            break;
    }


    
    
    
    

    // Inicia a atualização das informações do MAPA
}

/* Fazendo o mapa */

var mapboxTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});

//possible colors 'red', 'darkred', 'orange', 'green', 'darkgreen', 'blue', 'purple', 'darkpuple', 'cadetblue'
/* Ícone  */
var cafeIcon = L.AwesomeMarkers.icon({
    prefix: 'fa', //font awesome rather than bootstrap
    markerColor: 'red', // see colors above
    icon: 'coffee' //http://fortawesome.github.io/Font-Awesome/icons/
});

/* Setando o lugar */
var localInicial = [-17.9392089508829, -40.5478813835762]
navigator.geolocation.getCurrentPosition((data) => {
    console.log(data)
    localInicial[0] = data.coords.latitude
    localInicial[1] = data.coords.longitude
    /* DESCOMENTAR DEPOIS */
    // map.setView(new L.LatLng(data.coords.latitude, data.coords.longitude), 12)
    L.marker(localInicial).addTo(map)
})
var map = L.map('map')
    .addLayer(mapboxTiles)
    .setView(localInicial, 12);
/* ICONES */
// Educacao
var educacaoIco = L.icon({
    iconUrl: './img/icoEducacao.png',
    iconSize: [24, 24]
});

// Onibus //
var busIco = L.icon({
    iconUrl: './img/iconeOnibus.png',
    iconSize: [24, 24]
});

// Bombeiros //
var bombeirosIco = L.icon({
    iconUrl: './img/iconeBombeiros.png',
    iconSize: [24, 24]
});

// Saúde //
var saudeIco = L.icon({
    iconUrl: './img/icoSaude.png',
    iconSize: [24, 24]
});

// seguranca //
var segurancaIco = L.icon({
    iconUrl: './img/icoSeguranca.png',
    iconSize: [24, 24]
});

// turismo //
var turismoIco = L.icon({
    iconUrl: './img/icoTurismo.png',
    iconSize: [24, 24]
});
// hotel //
var hotelIco = L.icon({
    iconUrl: './img/icoHotel.png',
    iconSize: [24, 24]
});
// restaurante //
var restauranteIco = L.icon({
    iconUrl: './img/icoRestaurante.png',
    iconSize: [30, 30]
});

/* Marcando no mapa */
// L.marker([-20.195478, -40.207944], { icon: busIco }).addTo(map)
// L.marker([-9.048, -36.194], {icon: cafeIcon}).addTo(map)
var Central = L.marker(localInicial).addTo(map)


function verificaMapa() {
    let verificar = [
        'Saude',
        'Educacao',
        'Seguranca',
        'Turismo',
        'Onibus',
        'Bombeiros',
    ]
    // educacaoMakers
    // listasaudeMakers
    // listasegurancaMakers
    // listaturismoagenciaMakers
    // listaturismohotelMakers
    // listaturismolocadoraCarroMakers
    // listaturismorestauranteMakers
    verificar.forEach((val) => {
        switch (val) {
            case 'Onibus':
                removeLayers(onibusMakers, val)
            case 'Saude':
                removeLayers(listasaudeMakers, val)
                break;
            case 'Educacao':
                removeLayers(educacaoMakers, val)
                break;
            case 'Seguranca':
                removeLayers(listasegurancaMakers, val)
                break;
            case 'Turismo' || 'Onibus' || 'Bombeiros':
                removeLayers(listaturismoagenciaMakers, val)
                removeLayers(listaturismohotelMakers, val)
                removeLayers(listaturismolocadoraCarroMakers, val)
                removeLayers(listaturismorestauranteMakers, val)
                break;

            default:
                break;
        }

    })
}



function removeLayers(layer, val) {
    let x = document.getElementById(`check${val}`);

    // console.log(x.checked);
    // console.log(val);
    // console.log(tags[val]);
    if (x.checked) {
        map.addLayer(layer);

    } else {
        map.removeLayer(layer);

    }
}

map.on('zoomend', function () {
    if (map.getZoom() < 10) {
        map.removeLayer(onibusMakers);
        map.removeLayer(educacaoMakers);
        map.removeLayer(listasaudeMakers);
        map.removeLayer(listasegurancaMakers);
        map.removeLayer(listaturismoagenciaMakers);
        map.removeLayer(listaturismohotelMakers);
        map.removeLayer(listaturismolocadoraCarroMakers);
        map.removeLayer(listaturismorestauranteMakers);
    }
    else {
        map.addLayer(onibusMakers);
        map.addLayer(educacaoMakers);
        map.addLayer(listasaudeMakers);
        map.addLayer(listasegurancaMakers);
        map.addLayer(listaturismoagenciaMakers);
        map.addLayer(listaturismohotelMakers);
        map.addLayer(listaturismolocadoraCarroMakers);
        map.addLayer(listaturismorestauranteMakers);
    }
});

async function chamaTudo() {
    const dados = await funcBuscaGeral()
    var listaEducacao = dados.educacao.dados.slice(0, 50)
    var listasaude = dados['saude'].dados.slice(0, 100)
    var listaseguranca = dados['seguranca'].dados.slice(0, 100)
    var listaturismoagencia = dados['turismo/agencia'].dados.slice(0, 100)
    var listaturismohotel = dados['turismo/hotel'].dados.slice(0, 100)
    var listaturismolocadoraCarro = dados['turismo/locadoraCarro'].dados.slice(0, 100)
    var listaturismorestaurante = dados['turismo/restaurante'].dados.slice(0, 100)
    var listaonibus = dados['pontosOnibus'].dados



    listaonibus.map((onibus, index) => {
        if (onibus.LAT && onibus.LONG) {

            let lat = parseFloat(onibus.LAT.replace(',', '.'))
            let long = parseFloat(onibus.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: busIco })
                .on('mouseover', function () {
                    this.bindPopup('Ponto')
                        .openPopup();
                })
                .addTo(map)
            onibusMakers.addLayer(a);
        }

    })

    listaEducacao.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {        
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: educacaoIco })
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

                .on('mouseover', function () {
                    this.bindPopup(educacao.SIGLAEXTEN)
                        .openPopup();
                })
                .addTo(map)
            educacaoMakers.addLayer(a);
        }

    })
    listasaude.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: saudeIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listasaudeMakers.addLayer(a);

        }

    })
    listaseguranca.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: segurancaIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listasegurancaMakers.addLayer(a);

        }

    })
    listaturismoagencia.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: turismoIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listaturismoagenciaMakers.addLayer(a);

        }

    })
    listaturismohotel.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            // maluca
            var a = L.marker([lat, long], { icon: hotelIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listaturismohotelMakers.addLayer(a);

        }

    })
    listaturismolocadoraCarro.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            var a = L.marker([lat, long], { icon: turismoIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listaturismolocadoraCarroMakers.addLayer(a);

        }

    })
    listaturismorestaurante.map((educacao, index) => {
        if (educacao.LAT && educacao.LONG) {
            let lat = parseFloat(educacao.LAT.replace(',', '.'))
            let long = parseFloat(educacao.LONG.replace(',', '.'))
            // louca
            var a = L.marker([lat, long], { icon: restauranteIco }).addTo(map)
                .on('mouseover', function () {
                    this.bindPopup(educacao.NOME)
                        .openPopup();
                })

            listaturismorestauranteMakers.addLayer(a);

        }

    })
}