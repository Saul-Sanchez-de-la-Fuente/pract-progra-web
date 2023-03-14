function calcularIMC() {
  var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
  var alturaEnMetros = alturaEnCentimetros / 100;
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
  var clasificacion;
  
  if (imc < 18.5) {
    clasificacion = 'BAJO PESO';
  } else if (imc < 25) {
    clasificacion = 'NORMAL';
  } else {
    clasificacion = 'SOBREPESO';
  }

  document.getElementById('result').innerHTML = imc;
  document.getElementById('result2').innerHTML = clasificacion;
}
