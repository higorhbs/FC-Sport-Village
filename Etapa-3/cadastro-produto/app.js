// declara um conjunto inicial de produtos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "descricao": "Camisa Barcelona",
            "marca": "Nike",
            "tamanho": "G",
            "email": "teste@teste.com",
            "telefone": "3140028922",
            "preco": "R$ 250"
        },
        {
            "id": 2,
            "descricao": "Camisa Cruzeiro",
            "marca": "Adidas",
            "tamanho": "G",
            "email": "teste@teste.com",
            "telefone": "3140028922",
            "preco": "R$ 250"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "descricao": contato.descricao,
        "email" : contato.email,
        "telefone": contato.telefone,
        "marca" : contato.marca,
        "tamanho": contato.tamanho,
        "preco": contato.preco,
        "desconto": contato.desconto
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Produto inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].descricao = contato.descricao,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].marca = contato.marca,
    db.data[index].tamanho = contato.tamanho,
    db.data[index].preco = contato.preco,
    db.data[index].desconto = contato.desconto


    displayMessage("Produto alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Produto removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}