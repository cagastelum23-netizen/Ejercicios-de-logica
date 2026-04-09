
function calcularTemperatura(){
let celsius = Number(prompt("Escriba la Temperatura en grados Celsius"));
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log("Temperatura en Fahrenheit: ", fahrenheit);
console.log("Temperatura en Kelvin: ", kelvin);
}