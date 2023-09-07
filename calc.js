const prompt = require("prompt-sync")();

usos=0  
sumas=0
restas=0
multis=0
divis=0

calcular=prompt("Quiere usar la calculadora? s/n")
if (calcular=="s"){
    do{
        opcion=parseInt(prompt("(1)Sumar (2)Restar (3)Multiplicar (4)Dividir (5)Salir"));
        switch(opcion){
            case 1:
                n1=parseInt(prompt("Ingrese primer valor: "));
                n2=parseInt(prompt("Ingrese segundo valor: "));
                console.log("El resultado es: ",n1+n2)
                usos=usos+1
                sumas=sumas+1
                break;
            case 2:
                n1=parseInt(prompt("Ingrese primer valor: "));
                n2=parseInt(prompt("Ingrese segundo valor: "));
                console.log("El resultado es: ",n1-n2)
                usos=usos+1
                restas=restas+1
                break;
            case 3:
                n1=parseInt(prompt("Ingrese primer valor: "));
                n2=parseInt(prompt("Ingrese segundo valor: "));
                console.log("El resultado es: ",n1*n2)
                usos=usos+1
                multis=multis+1
                break;
            case 4:
                n1=parseInt(prompt("Ingrese primer valor: "));
                n2=parseInt(prompt("Ingrese segundo valor: "));
                if (n2==0){
                    console.log("No se puede dividir por cero")
                    if (usos>0){
                        usos=usos-1
                    }   
                }
                else{
                    console.log("El resultado es",n1/n2)
                    divis=divis+1
                    break;
                };   
        };
    }while(opcion!=5)
};


console.log("El total de usos de la calculadora fué de", usos,"con",sumas,"sumas,",restas,"restas,",multis,"multiplicaciones y ",divis,"divisiones."); //actualizacion de calculadora



    /*COMENTARIO DE VARIAS LINEAS
JUEVES 31*/