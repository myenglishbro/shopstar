class Producto{
    constructor(nombre, precio,cat,img){
        this.nombre = nombre;
        this.precio = precio;
        this.cat = cat;
        this.img=img
        
    }
}

let productoA = new Producto("Coca Cola", 4, "bebida","../assets/img/coca.png")
let productoB = new Producto("Arroz Costeño", 3, "abarrote","../assets/img/costeno.png")
let productoC = new Producto("Gloria", 2,  "abarrote","../assets/img/GLORIA.png")
let productoD = new Producto("Pasta Dental",3,  "salud","../assets/img/COLGATE.png")
let productoE = new Producto("cerveza", 5,  "bebida","../assets/img/CERVEZA.png")

let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaNombres = listaProductos.map((prod) => prod.nombre)


let catalogo = document.getElementById("catalogo")


function render(lista) {
    
    catalogo.innerHTML = ""
    for(const prod of lista){

        let card = document.createElement("div")

        card.className = "cards"

        card.innerHTML = `
        
          <div class="card-border" style="width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${prod.nombre}</h5>
              <p class="card-text">S/.${prod.precio}</p>
                <a href="https://www.udemy.com/course/curso-de-ingles-metodologia-vivencial/?referralCode=30EF97C87848E5C61938 " target="_blank" class="btn btn-dark">Join Now!</a>
            </div>
          </div>
          
          
          
         
       
       

    
        `
          catalogo.append(card)
    }
    
}
render(listaProductos)

let categoriaElegida = ''

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)


function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    if(filtroActual.length == 0){
        console.log("Esa categoria no existe")
    }
    render(filtroActual)
}

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductos)})







//Agregar una tarea nueva

let addButton = document.getElementById("add-button")

addButton.addEventListener("click", addToDoItem)

let inputBox = document.getElementById("todo-entry-box")

function addToDoItem(){

    let itemText = inputBox.value
    newToDoItem(itemText)
    inputBox.value = ""
}

let toDoList = document.getElementById("todo-list")

function newToDoItem(text){
    let toDoItem = document.createElement("li")
    toDoItem.innerText = text

    toDoList.append(toDoItem)
    toDoItem.addEventListener("click", toggleItemState)
}

//Cambio de tarea a completada y viceversa

function toggleItemState(){
    if(this.classList.contains("completed")){
        this.classList.remove("completed")
    }
    else{
        this.classList.add("completed")
    }
}

//Eliminar tareas completadas

let clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", clearCompleted)

function clearCompleted(){

    let completedItems = toDoList.getElementsByClassName("completed")

    while(completedItems.length > 0){
        completedItems[0].remove();
    }
}

//Eliminar lista (NO HACER!!) --> Elimina el elemento padre y luego no podemos agregar tareas

/* let emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click", emptyList)
function emptyList(){
    toDoList.remove()
} */


//Eliminar lista (Correcto!)

let emptyButton = document.getElementById("empty-button")

emptyButton.addEventListener("click", emptyList)

function emptyList(){

    toDoList.innerHTML = ""

}