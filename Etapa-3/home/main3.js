// URL DA API DE DADOS
URL = 'https://netsoccer-db.herokuapp.com/penalty'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

fetch(URL)
    .then(res => res.json())
    .then(penalty => {
        let lista_penalty = '';
        for (let i = 0; i < penalty.length; i++) {
            
            lista_penalty += `
            <tr>
                <th>${penalty[i].id}</th>
                <td>${penalty[i].descricao}</td>
                <td>${penalty[i].time}</td>
                <td>${penalty[i].tamanho}</td>
                <td>${penalty[i].contato}</td>
                <td>R$${(parseFloat(penalty[i].preco)).toFixed(2)}</td>
            </tr>
            `;
            produtoList.innerHTML = lista_penalty;
        }
    });