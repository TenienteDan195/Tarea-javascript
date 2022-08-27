let nombre = prompt("Ingresa un nombre");

While(usuario != ${nombre}){
    alert ("usuario incorrecto");
    usuario = prompt("Ingrese usuario")
}

alert("bienvenido");

let numero = parseInt(prompt("ingrese numero"));

for(let i = 0; i<= 30; i++){
    let multiplicacion = numero * i;
    let mensaje = `${numero} * ${i} = ${multiplicacion}`;

    alert(mensaje);
}  