function fazerMilkshake(umSabor, umTamanho ='grande'){
	let milkshake = {
		sabor: umSabor,
		tamanho: umTamanho,
		marca: 'Bobs'
	};

	return(milkshake);
let produto = fazerMilkshake(`chocolate`, 'medio');

console.log(produto)
// fazerMilkshake('morango');
// fazerMilkshake('menta');
// fazerMilkshake('bacon');