function calcularHorasMesesAnosYDias() {
    var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    var fechaActual = new Date();
  
    var horasVividas = Math.abs(fechaActual - fechaNacimiento) / 36e5;
    var mesesVividos = (fechaActual.getFullYear() - fechaNacimiento.getFullYear()) * 12 + fechaActual.getMonth() - fechaNacimiento.getMonth();
    var anosVividos = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  
    // Calcular días vividos
    var unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
    var diasVividos = Math.floor(Math.abs(fechaActual - fechaNacimiento) / unDiaEnMilisegundos);
  
    document.getElementById('resultado').innerHTML = 'Has vivido ' + anosVividos + ' años, ' + mesesVividos + ' meses, ' + diasVividos + ' días, ' + horasVividas + 'horas.';
  }