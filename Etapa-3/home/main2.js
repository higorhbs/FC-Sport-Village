// URL DA API DE DADOS
URL = 'https://netsoccer-db.herokuapp.com/nike'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

fetch(URL)
    .then(res => res.json())
    .then(nike => {
        let lista_nike = '';
        for (let i = 0; i < nike.length; i++) {
            
            lista_nike += `
            <tr>
                <th>${nike[i].id}</th>
                <td>${nike[i].descricao}</td>
                <td>${nike[i].time}</td>
                <td>${nike[i].tamanho}</td>
                <td>${nike[i].contato}</td>
                <td>R$${(parseFloat(nike[i].preco)).toFixed(2)}</td>
            </tr>
            `;
            produtoList.innerHTML = lista_nike;
        }
    });