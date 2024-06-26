 
function Cantidadporanio () {
    fetch('http://127.0.0.1:8000/projectsperyear')
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos de la API:', data);

            // Comprobación de la estructura de los datos
            if (!data || !data.project || !Array.isArray(data.project)) {
                console.error('Estructura de datos inválida: No es una lista', data);
                throw new Error('Estructura de datos inválida');
            }

            const chartDom = document.getElementById('graficoProyectosPorAnio');
            const myChart = echarts.init(chartDom, 'white');
            const option = {
                
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    data: data.project.map(item => item.Anio) // Asegúrate de que 'Anio' es correcto
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: data.project.map(item => item.CantidadProyectos), // Asegúrate de que 'CantidadProyectos' es correcto
                    type: 'line'
                }]
            };
            myChart.setOption(option);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}; // End-Cantidadporanio




function margenGananciasTrimestre () {
    fetch('http://127.0.0.1:8000/profitmarginthismonth/4/6')
        .then(response => response.json())
        .then(data => {
            console.log('Datos recibidos de la API:', data);

            // Comprobación de la estructura de los datos
            if (!data || !data.margins || !Array.isArray(data.margins)) {
                console.error('Estructura de datos inválida: No es una lista', data);
                throw new Error('Estructura de datos inválida');
            }

            // Preparar los datos para el gráfico de pastel
            const pieData = data.margins.map(item => ({
                name: item.Mes,
                value: item.MargenGanancia
            }));

            const chartDom = document.getElementById('graficoGananciaPorMes');
            const myChart = echarts.init(chartDom, 'white');
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Obtenido desde',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        padAngle: 5,
                        itemStyle: {
                            borderRadius: 10
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 30,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: pieData
                    }
                ]
            };
            myChart.setOption(option);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};// margenGananciasTrimestre


function edaResultsDesc() {
    fetch('http://127.0.0.1:8000/edaresults')  // Asegúrate de que la URL sea correcta
        .then(response => response.json())
        .then(data => {
            console.log('Datos de EDA recibidos de la API:', data);

            if (!data || !data.columns || !Array.isArray(data.columns)) {
                console.error('Estructura de datos inválida', data);
                throw new Error('Estructura de datos inválida');
            }

            const tableContainer = document.getElementById('fact1');
            let tableHTML = '<table class="table">';
            tableHTML += '<thead><tr>';
            tableHTML += '<th>Statistic</th>';

            // Crear encabezados de la tabla
            data.columns.forEach(column => {
                tableHTML += `<th>${column}</th>`;
            });

            tableHTML += '</tr></thead><tbody>';

            // Crear filas de la tabla
            data.index.forEach((rowName, rowIndex) => {
                tableHTML += '<tr>';
                tableHTML += `<td>${rowName}</td>`;
                data.data[rowIndex].forEach(value => {
                    tableHTML += `<td>${value}</td>`;
                });
                tableHTML += '</tr>';
            });

            tableHTML += '</tbody></table>';
            tableContainer.innerHTML = tableHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
} // End-edaResultsDesc


//function loadEDAHistogram() {
//    const imgElement = document.getElementById('edaHistogram');
//    imgElement.src = 'http://127.0.0.1:8000/plot/histogram';
//} // End-loadEDAHistogram

//function loadEDABoxplot() {
//    const imgElement = document.getElementById('edaBoxplot');
//    imgElement.src = 'http://127.0.0.1:8000/plot/boxplot';
//} // End-loadEDABoxplot

//function loadEDAboxplots_before_winsorization() {
//    const imgElement = document.getElementById('edabw');
//    imgElement.src = 'http://127.0.0.1:8000/plot/boxplots_before_winsorization';
//} // End-loadEDAboxplots_before_winsorization

//function loadEDAscatter_plot() {
//    const imgElement = document.getElementById('edascatter');
//    imgElement.src = 'http://127.0.0.1:8000/plot/scatter_plot';
//} // End-loadEDAscatter_plot

//function loadEDAjoint_plot() {
//    const imgElement = document.getElementById('edajointplot');
//    imgElement.src = 'http://127.0.0.1:8000/plot/joint_plot';
//} // End-loadEDAboxplots_before_winsorization

//function loadEDApair_plot() {
//    const imgElement = document.getElementById('edapairplot');
//    imgElement.src = 'http://127.0.0.1:8000/plot/pair_plot';
//} // End-loadEDAscatter_plot

//function loadEDAcovarianza() {
//    const imgElement = document.getElementById('edacovarianza');
//    imgElement.src = 'http://127.0.0.1:8000/plot/covarianza';
//} // End-loadEDAscatter_plot