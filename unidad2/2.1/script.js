function limpiar(){
	document.getElementsByTagName('formulario').reset();
}

function calc(){
	var num = parseInt(document.getElementById('valor').value);

	if (num<=300) {
		num1 = num *1;
		document.getElementById('result').innerHTML = num1;
		total = num1;
		document.getElementById('total').innerHTML = total;
	}if (num>=301) {
		num1 = 300 * 1;
		document.getElementById('result').innerHTML = num1;
		rex = num - 300;
		num2 = rex * 3;
		document.getElementById('result2').innerHTML = num2;
		total = num1 + num2;
		document.getElementById('total').innerHTML = total;
	}if (num>=601) {
		num1 = 300 * 1;
		document.getElementById('result').innerHTML = num1;
		num2 = 300 * 3;
		document.getElementById('result2').innerHTML = num2;
		rex2 = num - 600;
		num3 = rex2 * 5;
		document.getElementById('result3').innerHTML = num3;
		total = num1 + num2 + num3;
		document.getElementById('total').innerHTML = total;

	}
}

