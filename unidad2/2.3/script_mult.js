function calc(){
	var num1 = parseInt(document.getElementById('valor1').value);
	var num2 = parseInt(document.getElementById('valor2').value);

	var res = num1 * num2;
	document.getElementById('result').innerHTML = res;
}