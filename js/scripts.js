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
// let operando1 = 4, operando2, resultado;
// operando1 = 8;
// operando2 = 4;
// resultado = operando1 + operando2;
// document.querySelector("#resultado").textContent = resultado;



//5 Completando el ejercicio anterior, mostrar cuál de los operandos es mayor
// let mensaje = '';
// const mensajeNumero5 = document.querySelector(".mayor-menor-igual"); //Objeto <li>
// let textoAnterior = mensajeNumero5.innerHTML;

// if(operando1<operando2){
//     mensaje = `<strong>${operando1}<${operando2}</strong>`;
//  }else{
//     if(operando1==operando2){
//         mensaje = `<strong>${operando1}=${operando2}</strong>`;


//     }else{
//         mensaje = `<strong>${operando1}>${operando2}</strong>`;
//     }
// }

// mensajeNumero5.innerHTML = textoAnterior + mensaje;




// Ejercicio 1 de alumnos

//Seleccionar los nodos
// let liElA1 =  document.querySelector("#a1");
// let resultado1El = document.getElementById("resultado1");

// //Evento click
// liElA1.onclick = () => {
//     //Algoritmo de un programa que calcule el área de un círculo dado un radio incializado en una variable.
//     let radio = prompt("Dame un radio");
//     //radio = Number(radio);
//     let area = 3.1416 * radio * radio;
//     resultado1El.textContent = resultado1El.textContent +  area;
// }


// let resultado2El = document.getElementById("resultado2");

// resultado2El.onclick = () => {
//  let b = Number(prompt('Dame un lado'));
//  let h = Number(prompt('Dame una altura'));
//  resultado2El.textContent = `${resultado2El.textContent} ${(b*h)/2}`;
// }


let resultado3El = document.getElementById("resultado3");

resultado3El.onclick = () => {
    let altura = Number(prompt("Dame tu altura en metros","1.68"));

    if(altura>1.75){
        resultado3El.innerHTML = "Alta";
    }else{
        resultado3El.innerHTML = "Bajita"
    }

}

