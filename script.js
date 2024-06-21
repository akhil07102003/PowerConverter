const conversionFactors = {
    W: 1,
    HP: 745.7,
    kW: 1000,
    'BTU/h': 0.29307107,
    'cal/s': 4.184,
    'kcal/h': 1.163,
    'ft-lb/s': 1.35582,
    'J/s': 1
};

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    
    if (isNaN(inputValue)) {
        document.getElementById('outputValue').textContent = "Please enter a valid number";
        return;
    }

    const valueInWatts = inputValue * conversionFactors[inputUnit];
    const outputValue = valueInWatts / conversionFactors[outputUnit];

    document.getElementById('outputValue').textContent = outputValue.toFixed(2);
}
