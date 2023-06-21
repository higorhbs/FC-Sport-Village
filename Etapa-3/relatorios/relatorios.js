var ctx = document.getElementById("myChart").getContext('2d');

var chart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Projeção de Vendas',
            backgroundColor: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
            borderColor: 'rgb(255,99,132)',
            data: [5,6,4,4,5,5,8,5,6,9,10,10]
        }]
    },

    options: {}
})