function verificar(numeros){
	if (numeros % 2 == 0) {
		return true;
	}
	
	else{
		
		return false;
	}
	
}

let numero = 10;

let ePar = verificar(numero);

if(ePar){
	console.log(`este número ${numero} é par `);	
}else{
	console.log(`este número ${numero} é ímpar `);
}
