// let nombreProductoA = 'Mesa'
// let precioProductoA = 100
// let stockProductoA = 10

// let nombreProductoB = 'Silla'
// let precioProductoB = 10
// let stockProductoB = 20

// let nombreProductoC = 'Lampara'
// let precioProductoC = 20
// let stockProductoC = 50

let productoA={
    nombre:"Mesa",
    precio:100,
    stock:10
}

function Producto(nombre,precio,stock)
{
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}


let productoB=new Producto('Silla',10,20);

let productoC=new Producto('Lampara',20,50);


let precioTotal = 0

function calculoprecio(cantidad,precio)
{
    precioTotal+=(cantidad*precio)
}

function calculostock(cantidad,stock,precio)
{
   if(cantidad<=stock)
   {
     calculoprecio(cantidad,precio)
   }
   else{
    alert("Actualemente tenemos" +stock +" unidades de este producto");
   }
   
}
