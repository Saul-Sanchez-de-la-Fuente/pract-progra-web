function limpiar(){
	document.getElementsByTagName('form').reset();
}

function calc(){
    var cad = document.getElementById('valores').value;

    var arraydevalores = cad.split(',');

    document.write("<p>Valores: ");

    var tamarr = arraydevalores.length;

    for (var i = 0; i < tamarr; i++){
        document.write("[" + arraydevalores[i] + "]");
    }

    document.write("<p>Tamaño del arreglo: " + tamarr);

    var suma = 0;

    for (var i = 0; i < tamarr; i++) {
        var number = parseInt(arraydevalores[i], 10);
        suma = suma + number;    
    }

    document.write("<p>Suma 1: " + suma);

    var media = suma/tamarr;

    document.write("<p>Media 1: " + media);

    document.write("<p>Valores restada la media: ");

    for (var i = 0; i < tamarr; i++){
        var number = parseInt(arraydevalores[i], 10);
        arraydevalores[i] = number - media;
        document.write("[" + arraydevalores[i] + "]");
    }

    document.write("<p>Valores elevados al cuadrado: ");

    for (var i = 0; i < tamarr; i++){
        arraydevalores[i] = arraydevalores[i]*arraydevalores[i];
        document.write("[" + arraydevalores[i] + "]");
    }

    var suma2 = 0;

    for (var i = 0; i < tamarr; i++){
        suma2 = suma + arraydevalores[i];
    }

    document.write("<p>Suma 2: " + suma2);

    var Varianza = suma2/tamarr;

    document.write("<p>Varianza: " + Varianza);

    var Desv = Math.sqrt(Varianza);

    document.write("<p>Desviacion estandar: " + Desv);
}