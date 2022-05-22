// button event listeners
document.getElementById("toMetricBtn").addEventListener('click',() => {
    userInput("toMetricBtn");
});

document.getElementById("toImpBtn").addEventListener('click',() => {
    userInput("toImpBtn");
})

// function for user input
function userInput(btn) {
    const metricDefault = document.getElementById("metricDefault");
    let toMetricNum = document.getElementById("toMetricNum").value;

    let toImpNum = document.getElementById("toImpNum").value;
    const impDefault = document.getElementById("impDefault");

    if(btn === "toMetricBtn") { 
        //pass input number to function
        displayToMetric(toMetricNum);
        //clear out input field
        document.getElementById("toMetricNum").value = "";
        //display none to default unit values
        metricDefault.classList.add('hide');
    }

    if(btn === "toImpBtn") {
        displayToImp(toImpNum);
        document.getElementById("toImpNum").value = "";
        impDefault.classList.add('hide');
    }
}

function displayToMetric(number) {
    //variables for formulas
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

function displayToImp(number) {
    const massNum = number * 2.205;
    const volNum = number / 3.785;
    const lengthNum = number * 3.281;
    document.getElementById('impResults').innerHTML = `
        <h3>Mass</h3>
        <p>${number} kilos = ${massNum.toFixed(2)} pounds</p>
        <h3>Volume</h3>
        <p>${number} liters = ${volNum.toFixed(2)} gallons</p>
        <h3>Length</h3>
        <p>${number} meters = ${lengthNum.toFixed(2)} feet</p>
    `
}