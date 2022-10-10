let saldo=150;
let efectivo=1120;
if(efectivo<saldo){
    console.log("puedes sacar dinero");
}
else{
    console.log("Saldo Insuficiente");
}


let nota=20;
if(nota==5){
 console.log("reprobaste");
}
else if (nota==10)
{
    console.log("reprobaste"); 
}
else if(nota==20){
    console.log("aprobaste"); 
}
else{
    console.log("error"); 
}


let nota2=10;
switch(nota2){
    case 5:
        console.log("has reprobado");
    break;

    case 10:
        console.log("has reprobado");
    break;

    case 20:
        console.log("has pasado");
    break;

    default:
        
        console.log("nada");
    break;
}