


// ejercicio 0

// const usuarioValido = "gustavo";
// const contrasenaValida = "1234";

// let usuarioIngresado = prompt("Ingresa tu usuario:");
// let contrasenaIngresada = prompt("Ingresa tu contraseña:");

// if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
// console.log("Inicio de sesión exitoso");}
// else {
// console.log("Usuario o contraseña incorrectos");
// }



// ejercicio 1

// document.getElementById("cambiaTitulo").addEventListener("click", function() {

//     console.log("clieckado el boton");
//     document.getElementById("mensaje").textContent = "Titulo cambiado";

//     console.log(navigator.userAgent);
//     document.getElementById("infonavegador").textContent = navigator.userAgent;

//     }
// );


// ejercicio 2

// let nombre = prompt("Ingrese su nombre");
// let ciudad = prompt("Ingrese su ciudad");
// let edad = prompt("Ingrese su edad");

// const altura = prompt("Ingrese su altura en metros");

// let mensaje = `Hola ${nombre}, usted tiene ${edad} años, vive en ${ciudad} y mide ${altura} metros.`;

// console.log(mensaje);






// ejercicio 3

// const edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }   

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else if (edad === 17) {
//     console.log("Casi eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }   



// ejercicio 4

const edad = 20; const tieneLicencia = true;
if (edad >= 18 && tieneLicencia) {
  console.log("Podés conducir");
} else {
  console.log("No podés conducir");
}