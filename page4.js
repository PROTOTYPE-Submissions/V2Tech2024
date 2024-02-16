// Sample data for student status report
const data = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [{
      label: 'Status',
      data: [30, 50, 20], // Sample percentages
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1
    }]
  };
  
  // Configuration for the chart
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  
  // Create the chart
  window.onload = function() {
    var ctx = document.getElementById('statusChart').getContext('2d');
    window.statusChart = new Chart(ctx, config);
  };
  
