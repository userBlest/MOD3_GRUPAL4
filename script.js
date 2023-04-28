function dateNow() {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        monthredefinido = month.toString,
        query = document.querySelector('#fechaForm');

    if (monthredefinido.length == 1) {
        fecha = (`${year}-0${month + 1}-${day}`);
    } else {
        fecha = (`${year}-${month + 1}-${day}`)
    }
    query.setAttribute('max', `${fecha}`)
    return fecha;
}
dateNow()

function obtenerDia() {
    query = document.getElementById('fechaForm');
    query.addEventListener("change", function (event) {
        console.log("Este es el event target", event.target.value)
        let semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            seleccion = event.target.value,
            date = new Date(seleccion),
            num = 0;
        while (num <= semana.length) {
            let dia = semana.indexOf(semana[num])
            if (date.getDay() == dia) {
                return alert(`Fulanito nació un ${semana[dia]}`)
            }
            num++
        }
    })
}

obtenerDia()

let edad = () => {
    query = document.getElementById('fechaForm');
    query.addEventListener("change", function (event) {
        let fecha = event.target.value,
            date = new Date(),
            year = date.getFullYear() - new Date(fecha).getFullYear(),
            month = date.getMonth() - new Date(fecha).getMonth(),
            day = date.getDate() - new Date(fecha).getDate() - 1;
        return alert(`Su edad es: ${year} años, ${month} meses y ${day} días`)
    })
}

// edad()

let meses = () => {
    query = document.getElementById('fechaForm');
    query.addEventListener("change", function (event) {
        let fecha = event.target.value,
            date = new Date(),
            year = date.getTime() - new Date(fecha).getTime(),
            dayfin = Math.floor(year / (1000 * 3600 * 24) - 1)
        return alert(`Fulanito desde su nacimiento ha vivido ${dayfin} días`)
    })
}

// meses()

let proxcum = () => {
    query = document.getElementById('fechaForm');
    query.addEventListener("change", function (event) {
        let date = new Date();
        let fecha = event.target.value;
        let cum = new Date(fecha).getTime() + 1;
        let faltante = Math.floor((date.getTime() - (cum)) / 1000);
        let faltante2 = Math.floor((faltante / (60 * 60)) / 24);
        // faltante = Math.floor(date.getTime(cum / (1000 * 60 * 60 * 24)));
        console.log("Intento del faltante", faltante2)
    })
}

proxcum()

function cuentaRegresiva() {

    var fecha = new Date();  //la fecha de hoy
    let agno = fecha.getFullYear() + 1; //creamos una variable para el próximo año.
    let nuevoAgno = new Date(agno, 0, 1);     // de la nueva fecha tomamos el mes 0 -> enero y el día 1.
    let segundosFalta = Math.floor((nuevoAgno.getTime() - fecha.getTime()) / 1000);  //contabilizamos los milisegundo entre la fecha del año siguiente y el actual
    let dias = Math.floor((segundosFalta / (60 * 60)) / 24);  //calculamos los días dividiendo los segundos por los minutos y segundos (60*60)
    //dayElement.innerText = dias;

    let restante = (`Quedan ${dias} días, con ${horas} horas , ${minutos} minutos y ${segundos} segundos`);

    // console.log(nuevoAgno);  
    return restante;


}

function horaConsulta() {
    let date = new Date(),
        ampmR = 'AM',
        ampm = date.getHours();
    if (ampm >= 12 && ampm <= 24) {
        ampmR = 'PM'
    }
    console.log(`La hora de esta consulta fue a las: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${ampmR}`)
}

horaConsulta()

let permanenciaOrgDias = (fechaIng, fechaActual) => {
    let fechaIngresada = new Date(fechaIng),
        fechaHoy = new Date(fechaActual),
        diferencia = fechaHoy.getTime() - fechaIngresada.getTime(),
        dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    console.log('Fulanito lleva una permanencia de', dias, 'días');

}

permanenciaOrgDias('2022-04-27', '2023-04-27')

let permanenciaOrgMeses = (fechaIng, fechaActual) => {
    let fechaIngresada = new Date(fechaIng),
        fechaHoy = new Date(fechaActual),
        diferencia = fechaHoy.getTime() - fechaIngresada.getTime(),
        meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.41));
    console.log('Fulanito lleva una permanencia de', meses, 'meses')
}

permanenciaOrgMeses('2022-04-27', '2023-04-27')