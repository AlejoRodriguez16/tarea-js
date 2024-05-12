const numeros = [15, 27, 69, 21, 2, 33];

let mayor = 0;
for(let i = 0; i < numeros.length; i++){
	if(numeros[i] > mayor){
		mayor = numeros[i];
	}
}

console.log(`el mayor de ${numeros} es ${mayor}`);