// URL DA API DE DADOS
URL = 'https://netsoccer-db.herokuapp.com/puma'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

fetch(URL)
    .then(res => res.json())
    .then(puma => {
        let lista_puma = '';
        for (let i = 0; i < puma.length; i++) {
            
            lista_puma += `
            <tr>
                <th>${puma[i].id}</th>
                <td>${puma[i].descricao}</td>
                <td>${puma[i].time}</td>
                <td>${puma[i].tamanho}</td>
                <td>${puma[i].contato}</td>
                <td>R$${(parseFloat(puma[i].preco)).toFixed(2)}</td>
            </tr>
            `;
            produtoList.innerHTML = lista_puma;
        }
    });