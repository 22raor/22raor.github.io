/*
Add scrollable modal with interactive graph (charts.js) for each variable?
*/

//Global variables for ChartJS libraries
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 30;
Chart.defaults.global.elements.point.hoverRadius = 8;

//Coverts arrays of x,y coordinates array of points
function toPointArray(x,y){
  var pts = [];
  
  for(var i = 0; i<x.length; i++){
    pts.push({x:x[i],y:y[i]});
    
  }
  return pts;
  
}

//Displays modal 
function showModal() {
  $(".ui.longer.modal").modal('show');

  
  
}

//Enables accordion function
$(".ui.accordion").accordion();

//Calculates model and displays output
function update() {
  var gas = document.getElementById("gallons").value;

  $("#results").html(`imagine thinking this app works yet ${gas}`);

  if (document.getElementById("resultado").style.display == "none") {
    $("#resultado").transition("vertical flip");
  } else {
    $("#resultado").transition("pulse");
  }
}

//Transition method for different pages
function show(shown, hidden) {
 
  // In Progress Fade
  $("#" + hidden).transition("fade");
  // document.getElementById(hidden).style.display='none';
  setTimeout(function () {
    $("#" + shown).transition("fade");
  }, 300);

  return false;
}

const xValues = math.range(-10, 10, 0.5).toArray();
const yValues = xValues.map(function (x) {
        return x*x;
      })
var yeedata = toPointArray(xValues,yValues);

//charts
var c1 = document.getElementById("chart1");
var c2 = document.getElementById("chart2");
var c3 = document.getElementById("chart3");


var chart1 = new Chart(c1, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Equation Plotted',
      data: yeedata,
      backgroundColor: [
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)'
      ],
      borderColor: [
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)'
      ],
      borderWidth: 1
    }],
  },
  options: {
       //tooltips: false,
  
    
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: 0,
          max: 8,
          stepSize: 1,
          fixedStepSize: 1,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 5,
          fixedStepSize: 20,
        }
      }]
    }
  }
});
var chart2 = new Chart(c2, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Equation Plotted',
      data: yeedata,
      backgroundColor: [
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)'
      ],
      borderColor: [
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)'
      ],
      borderWidth: 1
    }],
  },
  options: {
       //tooltips: false,
  
    
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: 0,
          max: 8,
          stepSize: 1,
          fixedStepSize: 1,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 5,
          fixedStepSize: 20,
        }
      }]
    }
  }
});
var chart3 = new Chart(c3, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Equation Plotted',
      data: yeedata,
      backgroundColor: [
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)',
        'rgba(123, 83, 252, 0.8)'
      ],
      borderColor: [
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)'
      ],
      borderWidth: 1
    }],
  },
  options: {
       //tooltips: false,
  
    
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: 0,
          max: 8,
          stepSize: 1,
          fixedStepSize: 1,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 5,
          fixedStepSize: 20,
        }
      }]
    }
  }
});
