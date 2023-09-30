const calculateTemp = () => {
    const inputTemp = parseFloat(document.getElementById('temp').value);
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.value; // Get the value attribute of the selected option


    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        return ((cel * 9 / 5) + 32).toFixed(1);
    }

    // Celsius to Kelvin
    const celTokel = (cel) => {
        return (cel + 273.15).toFixed(1);
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        return ((fah - 32) * 5 / 9).toFixed(1);
    }

    // Fahrenheit to Kelvin
    const fahTokel = (fah) => {
        return (((fah - 32) * 5 / 9) + 273.15).toFixed(1);
    }

    // Kelvin to Celsius
    const kelToCel = (kel) => {
        return (kel - 273.15).toFixed(1);
    }

    // Kelvin to Fahrenheit
    const kelToFah = (kel) => {
        return (((kel - 273.15) * 9 / 5) + 32).toFixed(1);
    }

    let resultText = "";
    let resultText1 = "";

    if (valueTemp == 'cel') {
        resultText1 += celToFah(inputTemp) + "&#176; Fahrenheit<br>";
        resultText1 += celTokel(inputTemp) + "&#176; Kelvin";
    } else if (valueTemp == 'fah') {
        resultText1 += fahToCel(inputTemp) + "&#176; Celsius<br>";
        resultText1 += fahTokel(inputTemp) + "&#176; Kelvin";
    } else {
        resultText1 += kelToCel(inputTemp) + "&#176; Celsius<br>";
        resultText1 += kelToFah(inputTemp) + "&#176; Fahrenheit";
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result").innerHTML = resultText1;
}