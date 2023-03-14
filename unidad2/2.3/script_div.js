function calc(){
	var num1 = parseInt(document.getElementById('valor1').value);
	var num2 = parseInt(document.getElementById('valor2').value);

	if (num1 == 0) {
		document.getElementById("valor1").value = "";
		alert('No se puede diviri por un 0');
	}

	if (num2 == 0) {
		document.getElementById("valor1").value = "";
		alert('No se puede diviri por un 0');
		document.getElementById('result').innerHTML = "Error por 0";
	}

	var res = num1 / num2;
	document.getElementById('result').innerHTML = res;
}