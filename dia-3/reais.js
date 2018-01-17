let numero = 100;


function formataremReais(){
let numeroFormatado = numero.toFixed(2);
numeroFormatado = numeroFormatado.replace('.',',');
numeroFormatado = `R$ ${numeroFormatado}`;

return numeroFormatado

}
console.log(formataremReais(200000));