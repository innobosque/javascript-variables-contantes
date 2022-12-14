// 1. Crea una variable en donde se muestre tu nombre a través de la función alert()
// let nombre = prompt("Dame un nombre");
// alert(nombre);

//2 Cambiar el valor de dicha variable y comprobar que efectivamente cambió
//Descomentar la línea 2
// nombre = "Juanito";
// console.log(nombre);

//3
//Da undefined

//4Crea tres variables: operando1, operando2, resultado. Inicializa las variables. Suma operando1 y operando2 y guarda el resultado.
let operando1 = 4, operando2, resultado;
operando1 = 8;
operando2 = 4;
resultado = operando1 + operando2;
document.querySelector("#resultado").textContent = resultado;



//5 Completando el ejercicio anterior, mostrar cuál de los operandos es mayor
let mensaje = '';
const mensajeNumero5 = document.querySelector(".mayor-menor-igual"); //Objeto <li>
let textoAnterior = mensajeNumero5.innerHTML;

if(operando1<operando2){
    mensaje = `<strong>${operando1}<${operando2}</strong>`;
 }else{
    if(operando1==operando2){
        mensaje = `<strong>${operando1}=${operando2}</strong>`;


    }else{
        mensaje = `<strong>${operando1}>${operando2}</strong>`;
    }
}

mensajeNumero5.innerHTML = textoAnterior + mensaje;
