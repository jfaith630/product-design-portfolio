//SETTINGS
Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultLineHeight = 1.4;

//CHART #1
//How do you organize your files in your cloud storage application of choice? (Please select all that apply.)
var ctxOne = document.getElementById('chart-1').getContext('2d');
var chart = new Chart(ctxOne, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [['Category/', 'Group Tags'], ['Favorite', 'Tags'], 'Folders', ['I don\'t organize', 'my files']],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#45266A', '#E1261C', '#00796B', '#878787'],
            data: [5, 1, 11, 2]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        datalabels: false
      }
    }
});

//CHART #2
//How important are collaborative features to you in a cloud storage application?
var ctxTwo = document.getElementById('chart-2').getContext('2d');
var chart = new Chart(ctxTwo, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Very Important', 'Important', 'Kind of Important', 'Not Important'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00796B', '#45266A', '#E1261C', '#878787'],
            data: [8, 5, 2, ],
            datalabels: {
              labels: {
                title: null
              }
            }
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 40,
        },
      },
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let datasets = ctx.chart.data.datasets;
            if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
              let sum = datasets[0].data.reduce((a, b) => a + b, 0);
              let percentage = Math.round((value / sum) * 100) + '%';
              return percentage;
            } else {
              return percentage;
            }
          },
          color: '#fff',
        }
      }
    }
});
