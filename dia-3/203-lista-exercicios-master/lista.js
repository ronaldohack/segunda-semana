/**
  1- Criar um programa que soma o valor da lista de compra, considerando o
    valor de cada item e sua quantidade.

    No final, o programa deve imprimir uma mensagem no console:

      O valor total da lista de compras é R$ 100.

  2- Somar também a quantidade de itens da lista e alterar a mensagem
    a ser impressa:

      O valor total da lista de compras é R$ 100 e a quantidade de itens é 23.
*/

let itens = [
  {
    nome: "Banana",
    valor: 2.1,
    quantidade: 1
  },
  {
    nome: "Sabonete",
    valor: 1.3,
    quantidade: 3
  },
  {
    nome: "Doritos",
    valor: 4.7,
    quantidade: 2
  },
  {
    nome: "Pão",
    valor: 0.38,
    quantidade: 10
  },
  {
    nome: "Leite",
    valor: 2.34,
    quantidade: 3
  },
  {
    nome: "Ovos",
    valor: 0.42,
    quantidade: 12
  }
];


let total = 0;

for (let umItem of itens){
  total = total + (umItem.quantidade* umItem.valor);
}

let tudo = total / itens.lenght;

console.log(` O total da compra é ${total}` );

let total2 = 0;

for(let item of itens){
  total2 = total2 + item.quantidade
}

console.log(` e a quantidade total de itens é ${total2}`)