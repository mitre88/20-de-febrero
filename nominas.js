
//base de datos donde voy a enviar la información de los imputs

alert("Manejador de Nóminas");
let nombre=prompt("introduce tu usuario");
let password=prompt("introduce tu contraseña");

ingresoNomina = prompt("introduce los ingresos totales de la nómina");
egresoNomina = prompt("Introduce los egresos de la Nómina");
const totalN=ingresoNomina-egresoNomina;
alert (`el total de la nómina es: ${totalN}`);

//esta función para  ingresos y egresos de nómina:
function nominas(ingresoNomina, egresoNomina, resultadoNomina) {
    ingresoNomina = prompt("introduce los ingresos totales de la nómina")
    egresoNomina = prompt("Introduce los egresos de la Nómina")
    resultadoNomina = (ingresoNomina - egresoNomina);
    alert("monto total neto de la nómina es: " + "  " + resultadoNomina);
}

//esta función para  ingresos y egresos de juicios mercantiles :
function juicios(ingresoJuicio, egresoJuicio, resultadoJuicio) {
    ingresoJuicio = prompt("introduce los ingresos totales de juicios mercantiles")
    egresoJuicio = prompt("Introduce los egresos de juicios mercantiles")
    resultadoJuicio = (ingresoJuicio - egresoJuicio);
    alert("monto total neto de los importes de juicios: " + "  " + resultadoJuicio);
}

//esta función para  ingresos y egresos de pensión alimenticia:
function pension(ingresoPension, egresoPension, resultadoPension) {
    ingresoPension = prompt("introduce los ingresos totales de pensiones alimenticias")
    egresoPension = prompt("Introduce los egresos de pensiones alimenticias")
    resultadoPension = (ingresoPension - egresoPension);
    alert("monto total neto de las pensiones alimenticias: " + "  " + resultadoPension);
}

// prueba de git

