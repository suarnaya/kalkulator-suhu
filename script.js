const celcius = document.getElementById('celcius')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')
const reamur = document.getElementById('reamur')

let suhu = function (type) {
  let toReamur,
    toCelcius,
    toKelvin,
    toFahrenheit = 0

  printCelcius = () => (celcius.value = parseFloat(toCelcius.toFixed(2)))
  printReamur = () => (reamur.value = parseFloat(toReamur.toFixed(2)))
  printFahrenheit = () =>
    (fahrenheit.value = parseFloat(toFahrenheit.toFixed(2)))
  printKelvin = () => (kelvin.value = parseFloat(toKelvin.toFixed(2)))

  if (type == celcius) {
    toFahrenheit = (parseFloat(type.value) * 9) / 5 + 32
    toReamur = (parseFloat(type.value) / 5) * 4
    toKelvin = parseFloat(type.value) + 273.15
    printReamur()
    printKelvin()
    printFahrenheit()
    //////
  } else if (type == fahrenheit) {
    toCelcius = ((parseFloat(type.value) - 32) * 5) / 9
    toKelvin = ((parseFloat(type.value) - 32) * 5) / 9 + 273.15
    toReamur = ((parseFloat(type.value) - 32) * 4) / 9

    printReamur()
    printKelvin()
    printCelcius()
    //////
  } else if (type == reamur) {
    toFahrenheit = (parseFloat(type.value) * 9) / 4 + 32
    toCelcius = (parseFloat(type.value) * 5) / 4
    toKelvin = (parseFloat(type.value) * 5) / 4 + 273.15

    printKelvin()
    printFahrenheit()
    printCelcius()
    //////
  } else if (type == kelvin) {
    toCelcius = parseFloat(type.value) - 273.15
    toReamur = ((parseFloat(type.value) - 273.15) * 4) / 5
    toFahrenheit = ((parseFloat(type.value) - 273.15) * 9) / 5 + 32

    printReamur()
    printFahrenheit()
    printCelcius()
  }
}

celcius.oninput = () => {
  suhu(celcius)
}
fahrenheit.oninput = () => {
  suhu(fahrenheit)
}
reamur.oninput = () => {
  suhu(reamur)
}
kelvin.oninput = () => {
  suhu(kelvin)
}
