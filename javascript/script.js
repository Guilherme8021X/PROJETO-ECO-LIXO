const reciclagem = [
    {id: 1, nome: 'Papel', img:'img\\papel.jpg'},
    {id: 2, nome: 'Plástico',img:'img\\plastico.jpeg'},
    {id: 3, nome: 'Vidro',img:'img\\vidro.jpg'},
    {id: 4, nome: 'Metal',img:'img\\metal.jpg'},
];

console.log(reciclagem.length);
console.log(reciclagem[0].nome);


reciclagem.forEach((item) => {
    console.log(item.nome)
});

const container = document.getElementById('cards-container');
function criarCartoes() {
    container.innerHTML = "";
    reciclagem.forEach(item => { 
        const card = document.createElement('div');
        card.classList.add('cartao-material');
        card.innerHTML = `
        <br><br>
        <img src="${item.img}" alt="${item.nome}" width="120">
        <button onclick="adicionarAoPedido(${item.id})">Adicionar ao Descarte</button>
        `;
        container.appendChild(card);
    });
}
criarCartoes();


let valorTotalPedido = 0;

function adicionarAoPedido(idItem) {
    // Acha o item correspondente no array pelo ID
    const itemSelecionado = reciclagem.find(i => i.id === idItem);

    if (itemSelecionado) {
        // Soma o valor do quilo ao total geral do pedido
        valorTotalPedido += itemSelecionado.precoPorKg;

        // Atualiza na tela onde mostra o valor total (ex: <span id="total">0.00</span>)
        document.getElementById('total').innerText = valorTotalPedido.toFixed(2);

        console.log(`Adicionado: ${itemSelecionado.nome}. Total atual: R$ ${valorTotalPedido.toFixed(2)}`);
    }
}