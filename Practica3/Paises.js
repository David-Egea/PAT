function getCountry() {
    var region = document.getElementsByName("Regiones")[0];
    var regionSelecionada=region.options[region.selectedIndex].value;
    fetch('https://powerful-gorge-32436.herokuapp.com/https://restcountries.eu/rest/v2/region/' + region.value,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            if (res.ok) {
                // Si la respuesta se resolvió bien, procedemos a resolver la promesa Body 
                return res.json();
            } else {
                throw res;
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            // Una vez resuelta la última promesa, asignamos el valor de la respuesta a una variable JSON
            console.log(setCountries(r));
        })
        //Errores de Red y respuestasKO
        .catch(e => console.log(e));
}

function setCountries(response){
    var html='';
    response.forEach(country => {
        var linea= '<div class="card d-inline-block" style="width: 30%;margin-left: 1%; margin-bottom: 1%;">'
        + country.name + '</div>'
        html=html+linea;
        console.log(country.name);
    });
    document.getElementById("paises").innerHTML=html;
}
