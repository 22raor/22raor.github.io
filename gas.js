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
  var capacity = document.getElementById("capacity").value;
  var mileage = document.getElementById("mileage").value;
  var distance = document.getElementById("distance").value;
  
  let netSavings = 1.456*(capacity - gas) - (5.012*distance)/mileage;
  let netRound = netSavings.toFixed(2);
  let moneyIndex = 10/(1+Math.pow(Math.E, -0.75*(netSavings-7.45)));
  let timeIndex = ((0.5*mileage*capacity)/( parseInt(distance,10) + (((mileage*capacity)/20.0))));
  
  
  let final = ((moneyIndex + timeIndex)/2).toFixed(2); 
  
  if(final >= 5){
     $("#results").html(`On a scale of 1 to 10, our model rates the detour at ${final}. The model recommends that you take the detour to the gas station. You will save about $${netRound}.`);
  } else if (final < 5){
     $("#results").html(`On a scale of 1 to 10, our model rates the detour at ${final}. The model does not recommend the detour.`);
  }
  
  


  
  
  
  
  
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

const xValues = math.range(0, 15, 0.5).toArray();
const yValues = xValues.map(function (x) {
        return 10/(1+Math.pow(Math.E, -0.75*(x-7.45)));
      })
var yeedata = toPointArray(xValues,yValues);

const xValues2 = math.range(0, 80, 5).toArray();
const yValues2 = xValues2.map(function (x) {
        return 180/(x+18);
      })
var yeedata2 = toPointArray(xValues2,yValues2);

//charts
var c1 = document.getElementById("chart1");
var c2 = document.getElementById("chart2");



var chart1 = new Chart(c1, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Equation Plotted',
      data: yeedata,
      backgroundColor: [
        'rgba(250, 190, 88, 1)',
        'rgba(250, 190, 88, 1)',
        'rgba(250, 190, 88, 1)',
        'rgba(250, 190, 88, 1)',
        'rgba(250, 190, 88, 1)',
        'rgba(250, 190, 88, 1)'
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
          max: 14,
          stepSize: 2,
          fixedStepSize: 2,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
          stepSize: 2,
          fixedStepSize: 10,
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
      data: yeedata2,
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
          max: 70,
          stepSize: 5,
          fixedStepSize: 2,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
          stepSize: 2,
          fixedStepSize: 2,
        }
      }]
    }
  }
});
