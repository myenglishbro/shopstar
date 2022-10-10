//declarando mis productos a vender

let listaProductos =[
    {
        id:1,
        nombre: "Polo",
        categoria:"Ropa",
        precio: 29,
        stock:30
    },
    {
        id:2,
        nombre: "Pantalon",
        categoria:"Ropa",
        precio: 26,
        stock:50
    },
    {
        id:3,
        nombre: "Zapato",
        categoria:"Ropa",
        precio: 27,
        stock:40
    },
    {
        id:4,
        nombre: "Lentes",
        categoria:"Ropa",
        precio: 50,
        stock:300
    }
]



//creo mi funcion para agregar un nuevo producto
// function nuevoproducto(producto)
// {
    
//     return listaproductos.push(producto)
// }

// console.log(nuevoproducto("producto4"))
// console.log(listaProductos)

// const busqueda=listaProductos.find(
//     valor=> {
//       if(valor.nombre==="Polo"){
//         return true
//       }
//     }
// )
//cuando tengo un return directamente y llaves las puedo eliminar
// const busqueda=listaProductos.find( valor=> valor.nombre==="Polo")
// console.log(busqueda.precio)
//haciedno uso de la decontrucciond eobjetos
//accediendo a la propiedad que me devuelve el objeto 
const { precio }= listaProductos.find(valor=>valor.nombre==="Polo")
console.log(precio)
//EL MAP ACEPTA DOS VALORES EL VALOR Y EL INDICE
//LE QUITE LAS LLAVES PORQUE SOLO DEVUELVE VALORES
// const newArray=listaProductos.map(valor =>" S/."+ valor.precio)
// console.log(newArray)


// let productosBaratos=listaProductos.filter(valor=> {
//     if(valor.precio<30)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// })

// let productosBaratos=listaProductos.filter(valor=> valor.precio<30)


// console.log(productosBaratos)
//ordenando mis productos por precio de menor a mayor
listaProductos.sort((a,b)=>{
    if(a.precio <b.precio)
    {
        return -1
    }
    else if(a.precio >b.precio){
        return +1
    }
    else{
        return 0
    }
})
console.log(listaProductos)