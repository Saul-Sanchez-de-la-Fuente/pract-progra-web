<?php
	$imc=0.0;

	if (isset($_POST['peso'])) {
		if (isset($_POST['altura'])) {
			$imc = ($_POST['peso'] / pow($_POST['altura'], 2));
		}
	}
?>



<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Calculadora IMC</title>
</head>
<body>
	<h1>Calculadora IMC</h1>
	<form action="#" method="POST">
		<label>Peso: </label>
		<input type="number" step="0.1" name="peso" id="peso" placeholder="0.0">
		<br>
		<br>
		<label>Altura: </label>
		<input type="number" step="0.01" name="altura" id="altura" placeholder="0.0">
		<br>
		<br>
		<input type="submit" value="Calcular" name="calcular">
		<br>
		<br>
		
	</form>

	<?php
  		$clasificacion;
  		
  		if ($imc < 18.5) {
  			$clasificacion = 'BAJO PESO';
  		}elseif ($imc < 25) {
  			$clasificacion = 'NORMAL';
  		}else{
  			$clasificacion = 'SOBREPESO';
  		}

  	echo "Tu imc es: " .($imc);
  	echo "<br>Tu categoria es: " .($clasificacion);
	?>
</body>
</html>