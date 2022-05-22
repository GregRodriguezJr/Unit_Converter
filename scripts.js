// button event listeners
document.getElementById("toMetricBtn").addEventListener('click', toMetricInput);

// functions for imperial to metric
function toMetricInput() {
    let metricDefault = document.getElementById("metricDefault");
    let toMetricNum = document.getElementById("toMetricNum").value;
    //check for empty field and call display function
    if(toMetricNum === "" ) {
        alert("Input field blank, please enter a number.")
    } else {
        displayToMetric(toMetricNum);
        document.getElementById("toMetricNum").value = "";
        metricDefault.classList.add('hide');
    }
}

function displayToMetric(number) {
    const massNum = number / 2.205;
    const volNum = number * 3.785;
    const lengthNum = number / 3.281;
    //rendering div to DOM with results
    document.getElementById('metricResults').innerHTML = `
        <h3>Mass</h3>
        <p>${number} pounds = ${massNum.toFixed(2)} kilos</p>
        <h3>Volume</h3>
        <p>${number} gallons = ${volNum.toFixed(2)} liters</p>
        <h3>Length</h3>
        <p>${number} feet = ${lengthNum.toFixed(2)} meters</p>
    `
}

// functions for metric to imperial