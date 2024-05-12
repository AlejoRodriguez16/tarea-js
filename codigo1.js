distancia = parseInt(prompt('Ingrese distancia:', ''));

if (distancia >= 0 && distancia <= 1000) { 
    document.write('Deberias ir caminando.');
} else if (distancia >1000 && distancia <= 10000) {
    document.write('Deberias ir en bicicleta.');
} if (distancia >10000 && distancia <=30000) {
    document.write('Deberias ir en colectivo.');
} else if (distancia >30000 && distancia <=100000){
    document.write('Deberias ir en auto');
} else if (distancia >100000){
    document.write('Deberias ir en avión')
}