
function getFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    fetch(url, {
        method: "GET",
        headers:{
            "X-Auth-Token": "8b290a17f4ef4717b78c9800eb77cb57"
        }
    })
    .then(function (response){
        if (response.ok){
            console.log(response)
            return response.json();
        }
    })
    .then(function(data){
        

        let partidos1 = data.matches

        partidosTabla(partidos1)

        spiner()

        buscador.addEventListener("keyup", function(){
            let tablaDePartidos = document.getElementById("datos_partidos")
            tablaDePartidos.innerHTML = ""
        
            let buscador = document.getElementById("buscador").value;
            filtroPartidos(data.matches)})

    })
}

getFetch()

function partidosTabla(data){

    let tablaDePartidos = document.getElementById("datos_partidos")
    

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")


        let eqLocal = document.createElement("p")
        eqLocal.innerHTML = data[i].homeTeam.name
        eqLocal.classList.add("centrar")

        
        let eqVisita = document.createElement("p")
        eqVisita.innerHTML = data[i].awayTeam.name
        eqVisita.classList.add("centrar")


        let jornada = document.createElement("p")
        jornada.innerHTML = data[i].matchday
        jornada.classList.add("centrar")


        let fecha = document.createElement("p")
        fecha.innerHTML = data[i].utcDate
        fecha.classList.add("centrar")

        let imgELocal = document.createElement("img")
        imgELocal.setAttribute("src", "https://crests.football-data.org/" + data[i].homeTeam.id + ".svg")
        imgELocal.classList.add("imagen")
        imgELocal.classList.add("centrar")

        let imgEVisita = document.createElement("img")
        imgEVisita.setAttribute("src", "https://crests.football-data.org/" + data[i].awayTeam.id + ".svg")
        imgEVisita.classList.add("imagen")
        imgEVisita.classList.add("centrar")

        // document.createElement("p")
        // resultado.innerHTML =
        let resultado =  data[i].score.fullTime.homeTeam + "-" + data[i].score.fullTime.awayTeam;
       

        if (resultado === "null-null"){
            resultado = "Por Jugar"}
            
            else{
            resultado.textContent = data[i].score.fullTime.homeTeam + "-" + data[i].score.fullTime.awayTeam;
            
        }

        
               

        let dataPartidos = [jornada, eqLocal, imgELocal, resultado,imgEVisita, eqVisita, fecha]

        for (let x =0; x < dataPartidos.length; x++) {
            const td = document.createElement("td")
            td.append(dataPartidos[x]);
            tr.appendChild(td)
        }

        
      
        
        tablaDePartidos.appendChild(tr)

  }
}





function filtroPartidos(equipos) {

    let buscador = document.getElementById("buscador").value;

    let filtro = equipos.filter(function(e) {

        if(e.homeTeam.name.toLowerCase().includes(buscador.toLowerCase()) || e.awayTeam.name.toLowerCase().includes(buscador.toLowerCase()) ){

            return true;
        } else{
           return false;
        }

        
    })

    partidosTabla(filtro)
    
}



function spiner(){

    let loader = document.getElementById("spiner").style.display= "none";


}






