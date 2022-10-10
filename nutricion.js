
//creando mi objeto
function claseIngles (tipoclase,precio)
{
  this.tipoclase=tipoclase,
  this.precio=precio
}

//creando mis variables
let claseIndividual=new claseIngles("INDIVIDUAL",25)
let clasGrupal=new claseIngles("GRUPAL",35)


function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}


let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Clase Privada (CP)\n - Clase Grupal (CG)\n ")

if(productoCompra.toUpperCase() == 'CP')
{
document.write("Tipo de clase:"+productoCompra);
}



