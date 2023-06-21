// URL DA API DE DADOS
URL = 'https://netsoccer-db.herokuapp.com/adidas'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

fetch(URL)
    .then(res => res.json())
    .then(adidas => {
        let lista_adidas = '';
        for (let i = 0; i < adidas.length; i++) {
            
            lista_adidas += `
            <tr>
                <th>${adidas[i].id}</th>
                <td>${adidas[i].descricao}</td>
                <td>${adidas[i].time}</td>
                <td>${adidas[i].tamanho}</td>
                <td>${adidas[i].contato}</td>
                <td>R$${(parseFloat(adidas[i].preco)).toFixed(2)}</td>
            </tr>
            `;
            produtoList.innerHTML = lista_adidas;
        }
    });
//=================================================================================================