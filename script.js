function convertTemperature() {
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;
    const temperature = parseFloat(document.getElementById('temperature').value);

    const convertedTemperature = convert(fromUnit, toUnit, temperature);

    displayResult(convertedTemperature, toUnit);
}

function convert(fromUnit, toUnit, temperature) {
    if (fromUnit === toUnit) {
        return temperature;
    }

    switch (fromUnit) {
        case 'celsius':
            return toCelsius(temperature, toUnit);
        case 'fahrenheit':
            return toFahrenheit(temperature, toUnit);
        case 'kelvin':
            return toKelvin(temperature, toUnit);
        default:
            return temperature;
    }
}

function toCelsius(temperature, toUnit) {
    switch (toUnit) {
        case 'fahrenheit':
            return (temperature * 9/5) + 32;
        case 'kelvin':
            return temperature + 273.15;
        default:
            return temperature;
    }
}

function toFahrenheit(temperature, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (temperature - 32) * 5/9;
        case 'kelvin':
            return ((temperature - 32) * 5/9) + 273.15;
        default:
            return temperature;
    }
}

function toKelvin(temperature, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temperature - 273.15;
        case 'fahrenheit':
            return ((temperature - 273.15) * 9/5) + 32;
        default:
            return temperature;
    }
}

function displayResult(convertedTemperature, toUnit) {
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}