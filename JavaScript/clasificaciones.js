function getFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/standings"
    fetch(url, {
            method: "GET",
            headers: {
                "X-Auth-Token": "8b290a17f4ef4717b78c9800eb77cb57"
            }
        })
        .then(function (response) {
            if (response.ok) {
                console.log(response)
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data)

            let partidos2 = data.standings[0].table



            clasificacionTabla(partidos2)

            spiner()

        })
}
getFetch();



function clasificacionTabla(data) {

    let datosPosiciones = document.getElementById("datos_clasificacion")

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")

        let equipo = document.createElement("tr")
        equipo.innerHTML = data[i].team.name

        let posicion = document.createElement("p")
        posicion.innerHTML = data[i].position

        let puntos = document.createElement("p")
        puntos.innerHTML = data[i].points

        let partidosJugados = document.createElement("p")
        partidosJugados.innerHTML = data[i].playedGames

        let partidosGanados = document.createElement("p")
        partidosGanados.innerHTML = data[i].won

        let partidosEmpatados = document.createElement("p")
        partidosEmpatados.innerHTML = data[i].draw

        let partidosPerdidos = document.createElement("p")
        partidosPerdidos.innerHTML = data[i].lost

        let golesAFavor = document.createElement("p")
        golesAFavor.innerHTML = data[i].goalsFor

        let golesContra = document.createElement("p")
        golesContra.innerHTML = data[i].goalsAgainst

        let golesDiferencia = document.createElement("p")
        golesDiferencia.innerHTML = data[i].goalDifference

        let equipoImg = document.createElement("img");
        equipoImg.setAttribute("src", data[i].team.crestUrl);
        equipoImg.classList.add("imagen")




        let dataClasificacion = [posicion, equipoImg, equipo, puntos, partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos, golesAFavor, golesContra, golesDiferencia]

        for (let z = 0; z < dataClasificacion.length; z++) {
            const td = document.createElement("td")
            td.append(dataClasificacion[z]);
            tr.appendChild(td)
        }

        datosPosiciones.appendChild(tr)


    }

}


function spiner() {

    let loader = document.getElementById("spiner").style.display = "none";


}


