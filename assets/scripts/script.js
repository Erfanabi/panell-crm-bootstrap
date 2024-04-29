const chartEl = document.getElementById('myChart');
const ctx = chartEl.getContext('2d');

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = [50, 40, 300, 220, 500, 250, 400, 230, 500];

var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#5e72e430');
gradient.addColorStop(1, '#5e72e400');

const datasets = {
    labels: labels,
    datasets: [
        {
            label: 'Mobile Apps',
            lineTension: 0.4,
            fillColor: gradient,
            fill: true,
            backgroundColor: gradient,
            borderColor: '#5e72e4',
            borderStyle: 'dotted',
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: '#5e72e4',
            pointHoverBorderColor: '#5e72e4',
            data: data,
        }
    ]
};

const config = {
    type: 'line',
    data: datasets,
    options: {
        hover: {
            intersect: false
        },
        plugins: {
            legend: {
                display: false
            },
        },
        scales:
        {
            y: {
                display: false,
            },
            x: {
                ticks: {
                    color: "#ccc"
                },
                grid: {
                    drawBorder: false,
                    lineWidth: 0,
                }
            },
        }
    }
};

const myChart = new Chart(chartEl, config);