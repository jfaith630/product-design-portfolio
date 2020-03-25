//CHART #1
//How do you organize your files in your cloud storage application of choice? (Please select all that apply.)
var ctxOne = document.getElementById('chart-1').getContext('2d');
var chart = new Chart(ctxOne, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Category/Group Tags', 'Favorite Tags', 'Folders', 'I don\'t organize my files'],
        datasets: [{
            label: '# of Votes',
            backgroundColor: ['#00B8A2', '#0AB1D6', '#B294D6', '#EF817B'],
            borderColor: ['#00796B', '#044756', '#45266A', '#E1261C'],
            data: [5, 1, 11, 2]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false,
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
            backgroundColor: ['#00B8A2', '#0AB1D6', '#B294D6', '#EF817B'],
            borderColor: ['#00796B', '#044756', '#45266A', '#E1261C'],
            data: [8, 5, 2, 0]
        }]
    },

    // Configuration options go here
    options: {}
});
