const reciclagem = [
    {id: 1, nome: 'Papel', quantidade: 5, img:'img\\papel.jpg'},
    {id: 2, nome: 'Plástico',quantidade: 10, img:'img\\plastico.jpeg'},
    {id: 3, nome: 'Vidro',quantidade: 15, img:'img\\vidro.jpg'},
    {id: 4, nome: 'Metal',quantidade: 20, img:'img\\metal.jpg'},
];

console.log(reciclagem.length);
console.log(reciclagem[0].nome);


reciclagem.forEach((item) => {
    console.log(item.nome)
});

//seleciona o elemento html com id="cards-container" e o armazena na constante 'conteirner"
const container = document.getElementById('cards-container');
//declara função responsável por gerar e exibir os cartões dos materiais da página
function criarCartoes(item) {
    container.innerHTML = "";
    //percorre cada elemento (item) presente no array de dados chamado de 'Reciclagem'
    reciclagem.forEach(item => { 
        //cria um novo elemento <div> na memória do navegador para funcionar como a caixa do cartão
        const card = document.createElement('div');
        //aplica a class css 'cartão-material' na <div> recém criada para receber a estilização visual
        card.classList.add('cartao-material');
        //define o conteúdo html interno do cartão utilizando template literals (crase)
        card.innerHTML = `
        <img src="${item.img}" alt="${item.nome}" width="120">
        <p><strong>${item.nome}</strong></p>
        <p>${item.quantidade.toFixed(2)}</p>
        <button onclick="adicionarAoPedido(${item.id})">Adicionar ao Descarte</button>
        `;
        //insere o cartão (elemtento<div>) como filho do contêiner principal na página visível 
        container.appendChild(card);
    });
}



//chama a função 'criarCartoes()' para desenhar os cartões assim que o script for carregado 
criarCartoes();

//declara a variável valorTotalPedido inicializada em 0 para armazenar e acumular a soma financeira do pedido
let valorTotalPedido = 0;

//declara a função que processa a inclusão de um item ao pedido, recebendo o id do item clicado
function adicionarAoPedido(idItem) {
    // busca dentro do array 'reciclagem' o primeiro item cujo id atribuido 'id' seja igual ao 'idItem' informado
    const itemSelecionado = reciclagem.find(i => i.id === idItem);

    if (itemSelecionado) {
        // Soma o valor do quilo ao total geral do pedido
        valorTotalPedido += itemSelecionado.quantidade;

        // Atualiza na tela onde mostra o valor total (ex: <span id="total">0.00</span>)
        document.getElementById('total').innerText = valorTotalPedido.toFixed(2);

        console.log(`Adicionado: ${itemSelecionado.nome}. Total atual: R$ ${valorTotalPedido.toFixed(2)}`);
    }
}