function calcularNum(){

    //Pedimos los numeros
    let num1 = Number(prompt("Escriba el primer numero"));
    let num2 = Number(prompt("Escriba el segundo numero"));
    let num3 = Number(prompt("Escriba el tercer numero"));

    //Validamos los numeros
    if (num1 === num2 && num2 === num3){
        console.log("Los 3 numeros son iguales");
        return;
    }

//Los guardamos en un arreglo
    let numeros = [num1, num2, num3];

//Los ordenamos de menor a mayor
    let mayorque = [...numeros].sort((a,b) => a-b);

//Ordenar de mayor a menor
    let menorque = [...numeros].sort((a,b) => b-a);

//Identificar mayor, medio y menor
    let menor = mayorque[0];
    let medio = mayorque[1];
    let mayor = mayorque[2];

//Resultados
    console.log("Numero Mayor: ", mayor);
    console.log("Numero de enmedio: ", medio);
    console.log("Numero Menor: ", menor);

    console.log("Ordenados de Mayor a Menor: ", menorque);
    console.log("Ordenados de Menor a Mayor: ", mayorque);

}