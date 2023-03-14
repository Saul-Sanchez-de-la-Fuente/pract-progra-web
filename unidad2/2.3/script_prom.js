function calc(){
	var num1 = parseInt(document.getElementById('valor1').value);
	var num2 = parseInt(document.getElementById('valor2').value);
	var num3 = parseInt(document.getElementById('valor3').value);
	var num4 = parseInt(document.getElementById('valor4').value);

	var res = (num1 + num2 + num3 + num4)/4;
	document.getElementById('result').innerHTML = res;
}