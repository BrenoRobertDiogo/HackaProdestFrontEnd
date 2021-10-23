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
var map = L.map('map')
    .addLayer(mapboxTiles)
    .setView([-19.50889897, -40.65760008], 12);
/* ICONES */
// Educacao
var educacaoPoint = L.icon({
    iconUrl: './img/icoEducacao.png',
    iconSize: [50, 50]
});

// Onibus //
var busPoint = L.icon({
    iconUrl: './img/iconeOnibus.png',
    iconSize: [50, 50]
});

// Bombeiros //
var bombeirosPoint = L.icon({
    iconUrl: './img/iconeBombeiros.png',
    iconSize: [50, 50]
});

// Saúde //
var saudePoint = L.icon({
    iconUrl: './img/icoSaude.png',
    iconSize: [50, 50]
});

// seguranca //
var segurancaPoint = L.icon({
    iconUrl: './img/icoSeguranca.png',
    iconSize: [50, 50]
});

// turismo //
var turismoPoint = L.icon({
    iconUrl: './img/icoTurismo.png',
    iconSize: [50, 50]
});

/* Marcando no mapa */
// L.marker([-20.195478, -40.207944], { icon: busPoint }).addTo(map);
// L.marker([-9.048, -36.194], {icon: cafeIcon}).addTo(map);
var Central = L.marker([-19.50889897, -40.65760008]).addTo(map);

var Onibus = L.marker([-19.4, -40.5], { icon: busPoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo busPoint')
        .openPopup();
    })
    .addTo(map);
var Educacao = L.marker([-19.51, -40.66], { icon: educacaoPoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo educacaoPoint')
        .openPopup();
    })
    .addTo(map);
var Bombeiros = L.marker([-19.53, -40.68], { icon: bombeirosPoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo bombeirosPoint')
        .openPopup();
    })
    .addTo(map);
var Saude = L.marker([-19.54, -40.69], { icon: saudePoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo saudePoint')
        .openPopup();
    })
    .addTo(map);
var Seguranca = L.marker([-19.557, -40.7], { icon: segurancaPoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo segurancaPoint')
        .openPopup();
    })
    .addTo(map);
var Turismo = L.marker([-19.557, -40.71], { icon: turismoPoint })
    .on('mouseover', function () {
        this.bindPopup('Testezinho brabo turismoPoint')
        .openPopup();
    })
    .addTo(map);

var tags = {
    Central,
    Onibus,
    Educacao,
    Bombeiros,
    Saude,
    Seguranca,
    Turismo,
}

function verificaMapa() {
    let verificar = [
        'Saude',
        'Educacao',
        'Seguranca',
        'Turismo',
        'Onibus',
        'Bombeiros',
    ]

    verificar.forEach((val) => {
        console.log('------------------------------------');
        let x = document.getElementById(`check${val}`);
        console.log(x.checked);
        console.log(val);
        console.log(tags[val]);
        if (x.checked) {
            map.addLayer(tags[val]);

        } else {
            map.removeLayer(tags[val]);

        }
    })
}

$("#others").click(function () {
    // map.addLayer(central)
    map.removeLayer(central)
    // map.removeLayer(cafes)

});
$("#cafes").click(function () {
    // map.addLayer(cafes)
    // map.removeLayer(central)
    map.addLayer(central)
});
$("#allbus").click(function () {
    map.addLayer(cafes)
    map.addLayer(central)
});

// var promise = $.getJSON("businesses.json");

/* promise.then(function (data) {
    var allbusinesses = L.geoJson(data);
    var cafes = L.geoJson(data, {
        filter: function (feature, layer) {
            return feature.properties.BusType == "Cafe";
        },
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: cafeIcon
            }).on('mouseover', function () {
                this.bindPopup(feature.properties.Name).openPopup();
            });
        }
    });
    var others = L.geoJson(data, {
        filter: function (feature, layer) {
            return feature.properties.BusType != "Cafe";
        },
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
            }).on('mouseover', function () {
                this.bindPopup('Testezinho').openPopup();
            });
        }
    });
    map.fitBounds(allbusinesses.getBounds(), {
        padding: [50, 50]
    });
    cafes.addTo(map)
    others.addTo(map)
    // The JavaScript below is new

}); */