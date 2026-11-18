const reciclagem = [
    {id: 1, nome: 'Papel'},
    {id: 2, nome: 'Plástico'},
    {id: 3, nome: 'Vidro'},
    {id: 4, nome: 'Metal'},
];

console.log(reciclagem.length);
console.log(reciclagem[0].nome);

function criarCard(item){
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML 
}