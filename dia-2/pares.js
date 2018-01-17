let numeros = [10,20,11,6,7,13,45,24];

let contador = 0;

for(let umNumero of numeros){
	if (umNumero % 2 == 0) {
		contador = contador + 1;
	}
		 
}

console.log(`Existem ${contador} numeros pares`);