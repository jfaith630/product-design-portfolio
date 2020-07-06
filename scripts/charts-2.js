//SETTINGS
Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultLineHeight = 1.4;

//CHART #3
//How often do you use your current HIPAA compliant communication application?
var ctxThree = document.getElementById('chart-3').getContext('2d');
var chart = new Chart(ctxThree, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Multiple times a day', 'Multiple times a week', 'Less than weekly or never'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00796B', '#45266A', '#E1261C'],
            data: [4, 6, 7],
            datalabels: {
              labels: {
                title: null
              }
            }
        }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
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

//CHART #4
//How easily can you communicate across EMRs (one office to another) using your current communication application?
var ctxFour = document.getElementById('chart-4').getContext('2d');
var chart = new Chart(ctxFour, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['It is difficult', 'It is very difficult'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00796B', '#45266A'],
            data: [3, 14],
            datalabels: {
              labels: {
                title: null
              }
            }
        }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
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

//CHART #5
//Do you currently use any sort of application for direct communication with your medical professional(s)? (Patients)
var ctxFive = document.getElementById('chart-5').getContext('2d');
var chart = new Chart(ctxFive, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00796B', '#45266A'],
            data: [12, 9],
            datalabels: {
              labels: {
                title: null
              }
            }
        }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
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

//CHART #6
//If you were to receive a difficult/unfortunate medical update, how would you want it to be communicated to you? (Patients)
var ctxSix = document.getElementById('chart-6').getContext('2d');
var chart = new Chart(ctxSix, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [['In-Person', 'Conversation'], ['Phone', 'Call'], ['Video', 'Call'], 'Messaging'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00796B', '#45266A', '#E1261C', '#878787'],
            data: [19, 13, 10, 0]
        }]
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
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
        }],
        xAxes: [{
          ticks: {
            fontSize: 14,
            lineHeight: 1.1,
          }
        }]
      },
      plugins: {
        datalabels: false
      }
    }
});
