

//Segundo grafico en donde se muestran los ingresos mensuales en cordobas
document.addEventListener('DOMContentLoaded', function () {
    var chartDom = document.getElementById('barras');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    option && myChart.setOption(option);

});