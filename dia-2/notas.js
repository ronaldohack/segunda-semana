let alunos = [
	{
		nome: 'enzo',
		nota: 8
	},
	
{
		nome: 'enzo',
		nota: 8
	},
	
{
		nome: 'enzo',
		nota: 8
	},
	
{
		nome: 'enzo',
		nota: 8
	},
	
{
		nome: 'enzo',
		nota: 8
	},
	
{
		nome: 'enzo',
		nota: 8
	},
	
	
];

let total = 0;

for (let umAluno of alunos){
	total = total + umAluno.nota;
}

let media = total / alunos.lenght;

console.log(`a soma das notas é ${total`} e a média é ${media});