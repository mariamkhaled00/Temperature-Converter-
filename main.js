// Function to convert temperature based on selected unit
function Convent() {
  // Get the user input value and convert it to a float
  const temperature = parseFloat(document.getElementById("Temperature").value);
  // Get the selected unit from the dropdown
  const unit = document.getElementById("unit").value;
  // Get the element to display the result
  const resultDiv = document.getElementById("result");
  // Check if the entered temperature is a valid number
  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    return;
  }
  //Variable to store the converted temerature
  let convertedTemp;
  //Variable to store the converted unit
  let convertedUnit;
  // check which unit was selected and perform the conversion
  if (unit === "Celsius") {
    //convert celsius to fahrenheit
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = "fahrenheit";
  } else {
    // convert fahrenheit to celsius
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = "celsius";
  }
  // Display the converted temperature with 2 decimal places
  resultDiv.textContent = `converted temperature:  ${convertedTemp.toFixed(
    2
  )}° ${convertedUnit}`;
}
