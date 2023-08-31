const prompt = require("prompt-sync")();

let calcular=prompt("Bienvenido, desea usar la calculadora? s/n: ");

if (calcular=="s"){
    let primerValor= parseInt(prompt("Ingrese el primer valor: "));
    let segundoValor= parseInt(prompt("Ingrese segundo valor: "));
    let opcion= parseInt(prompt("(1)Sumar (2)Restar (3)Multiplicar (4)Dividir "));
    switch (opcion){
        case 1:
        console.log("El resultado es", primerValor+segundoValor);
        break;
    
        case 2:
        console.log("El resultado es", primerValor-segundoValor);
        break;

        case 3:
        console.log("El resultado es", primerValor*segundoValor);
        break;
        
        default:
            if (segundoValor==0){
                console.log("No se puede dividir por cero.")
            }
            else {
                console.log("El resultado es", primerValor/segundoValor);
            };    
          
        };      
    }
else
    console.log("Hasta luego."); //actualizacion de calculadora
/*COMENTARIO DE VARIAS LINEAS
JUEVES 31*/