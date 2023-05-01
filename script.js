function dateNow() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const query = document.querySelector('#fechaForm');
    const formattedMonth = month.toString().padStart(2, '0');
    const fecha = `${year}-${formattedMonth}-${day}`;
    query.setAttribute('max', fecha);
    return fecha;
  }

  

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

  obtenerDia();
  
  
  function edad() {
    const query = document.getElementById('fechaForm');
    query.addEventListener('change', function(event) {
      const fecha = new Date(event.target.value);
      const hoy = new Date();
      const diferencia = hoy.getTime() - fecha.getTime();
      const anios = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
      const meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
      alert(`Su edad es: ${anios} años, ${meses} meses y ${dias} días`);
    });
  }

  edad();
  
  function meses() {
    const query = document.getElementById('fechaForm');
    query.addEventListener('change', function(event) {
      const fechaNacimiento = new Date(event.target.value);
      const fechaHoy = new Date();
      const diferencia = fechaHoy.getTime() - fechaNacimiento.getTime();
      const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      alert(`Fulanito desde su nacimiento ha vivido ${diasTranscurridos} días`);
    });
  }
  meses();
  
  function proxcum() {
    const query = document.getElementById('fechaForm');
    query.addEventListener('change', function(event) {
      const fechaNacimiento = new Date(event.target.value);
      const fechaHoy = new Date();
      const mesesTranscurridos = (fechaHoy.getFullYear() - fechaNacimiento.getFullYear()) * 12 + (fechaHoy.getMonth() - fechaNacimiento.getMonth());
      alert(`Han transcurrido ${mesesTranscurridos} meses desde tu nacimiento.`);
    });
  }
proxcum();

  
  
  function horaConsulta() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? '12' : (hours % 12).toString().padStart(2, '0');
    console.log(`La hora de esta consulta fue a las: ${formattedHours}:${minutes}:${seconds} ${ampm}`);
  }
  
  horaConsulta();

const permanenciaOrgDias = (fechaIngreso, fechaActual) => {
    const ingreso = new Date(fechaIngreso);
    const hoy = new Date(fechaActual);
    const diferenciaMs = hoy - ingreso;
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    console.log(`Fulanito lleva una permanencia de ${dias} días`);
  }

permanenciaOrgDias('2022-04-27', '2023-04-27')


const permanenciaOrgMeses = (fechaIng, fechaActual) => {
    const fechaIngresada = new Date(fechaIng);
    const fechaHoy = new Date(fechaActual);
    const diferencia = fechaHoy.getTime() - fechaIngresada.getTime();
    const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.41));
    console.log('Fulanito lleva una permanencia de', meses, 'meses');
  };
  
  permanenciaOrgMeses('2022-04-27', '2023-04-27');
  
  const permanenciaOrg = (fechaIng, fechaActual) => {
    const fechaIngresada = new Date(fechaIng);
    const fechaHoy = new Date(fechaActual);
    const yearSelect = fechaHoy.getFullYear() - fechaIngresada.getFullYear();
    const monthSelect = fechaHoy.getMonth() - fechaIngresada.getMonth();
    const daysSelect = fechaHoy.getDate() - fechaIngresada.getDate();
    const resultado = console.log(`Fulanito lleva una permanencia de ${yearSelect} años, ${monthSelect} meses y ${daysSelect} días`);
    return resultado;
  };
  
  permanenciaOrg('2022-04-27', '2023-04-27');
  
  const permanenciaOrgFaltante = (fechaIng, fechaActual) => {
    const fechaIngresada = new Date(fechaIng).getTime();
    const fechaHoy = new Date(fechaActual).getTime();
    const diasFaltantes = (fechaHoy - fechaIngresada) / (1000 * 60 * 60 * 24);
    const resultado = console.log(`Para completar el año faltan ${diasFaltantes} días`);
    return resultado;
  };
  
  permanenciaOrgFaltante('2022-04-27', '2023-04-27');
  
  const calcularHoras = (fechaHoraIngreso, fechaHoraSalida) => {
    const ingreso = new Date(fechaHoraIngreso);
    const salida = new Date(fechaHoraSalida);
  
    let horasTrabajadas = (salida - ingreso) / 3600000; // 3600000 milisegundos = 1 hora
  
    if (horasTrabajadas < 0) {
      horasTrabajadas += 24; // se suman 24 horas si la hora de salida es anterior a la hora de ingreso
    }
  
    if (horasTrabajadas > 24) {
      throw new Error('La hora de salida no puede ser mayor a 24 horas después de la hora de ingreso.');
    }
  
    if (horasTrabajadas < 4) {
      throw new Error('El tiempo trabajado debe ser de al menos 4 horas.');
    }
  
    if (horasTrabajadas > 12) {
      throw new Error('El tiempo trabajado no debe ser mayor a 12 horas.');
    }
  
    return horasTrabajadas;
  };
  
  document.getElementById('calcular-btn').addEventListener('click', () => {
    const fechaHoraIngreso = document.getElementById('fecha-hora-ingreso').value;
    const fechaHoraSalida = document.getElementById('fecha-hora-salida').value;
  
    try {
      const horasTrabajadas = calcularHoras(fechaHoraIngreso, fechaHoraSalida);
      document.getElementById('resultado').textContent = `Horas trabajadas: ${horasTrabajadas.toFixed(2)}`;
    } catch (error) {
      alert(error.message);
    }
  });
  