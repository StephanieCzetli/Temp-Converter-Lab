
function runMyFunction() {
    // Define variable to store user's input (degrees Fahrenheit)
    let degreesFahrenheit = document.getElementById('inputValue').value;
    // Print the contents of the variable to the console
    console.log(degreesFahrenheit);

    // Define variable to store result of formula & set it equal to the formula
    let degreesCelsius = (degreesFahrenheit * 9 / 5) + 32
    // Print the contents of the variable to the console
    console.log(degreesCelsius);

    // Display contents of variable on the screen
    document.getElementById('outputValue').innerHTML = degreesCelsius;
}
    
