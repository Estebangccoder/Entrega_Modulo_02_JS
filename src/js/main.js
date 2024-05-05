console.groupCollapsed("Modulo de entrega 2 JS")
console.log(`Sistema de Gestión para Veterinaria 

Este proyecto te proporcionará una excelente oportunidad para aplicar los conceptos y habilidades 
que han aprendido en el módulo de JavaScript. 

Descripción del Proyecto: 

Desarrollar un sistema de gestión para una veterinaria que permita administrar la información de 
las  mascotas.  El  sistema  deberá  permitir  realizar  operaciones  CRUD  (Crear,  Leer,  Actualizar, 
Eliminar) para cada una de estas entidades. 
El sistema debe tener como mínimo 10 mascotas previamente registradas para poder practicar  
Recuerda  que  el  uso  de  comentarios  NO  es  opcional,  debes  utilizarlos,  pero  tampoco  abusar  de 
ellos. 

Importante el uso de funciones para modularizar el código y hacerlo más limpio 
Funcionalidades Principales: 


1. Registrar una nueva mascota (nombre, especie, raza, edad (calcular la edad de acuerdo a la 
fecha  de  nacimiento),  peso, estado  (estable,  critico),  nombre  propietario,  documento  del 
dueño, teléfono de contacto, correo del propietario,). 
2. Ver la lista de todas las mascotas registradas, en dicho array. 
3. Ver una lista de todos los dueños 
4. Buscar una mascota por el nombre 
5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño 
6. Actualizar la información de una mascota existente. 
7. Eliminar una mascota del array. 
8. Crear un menú que me permita controlar cada una de estas acciones
`)
console.groupEnd()

//Creamos el menu y la variable de eleccion

function menuPrincipal() {
  const menu = prompt(`Bienvenido!!!, Digita el numero de una de las siguientes opciones:

1. Registrar una nueva mascota
2. Lista de mascotas registradas
3. Lista de todos los dueños
4. Buscar mascota por nombre
5. Buscar mascotas por dueño
6. Actualizar información de una mascota existente
7. Eliminar una mascota 

`)
  //Creamos los condicionales del menu

  switch (menu) {
    case "1":
      registrarNuevaMascota()
      break;
    case "2":
      verBDMascotas()
      break;
    case "3":
      verBDPropietarios()
      break;
    case "4":
      buscarMascotaPorNombre()
      break;
    case "5":
      buscarMascotaPorPropietario()
      break;
    case "6":
      actualizarMascota()
      break;
    case "7":
      eliminarMascota()
      break;
    default:
      console.log("Opción no válida")


  }
}



//Creamos la funcion de agregar una nueva mascota

function registrarNuevaMascota() {
  const fechaActual = new Date()


  let nombre = prompt("Digita el nombre de la mascota").toLowerCase()
  let especie = prompt("Digita la especie de la mascota").toLowerCase()
  let raza = prompt("Digita la raza de la mascota").toLowerCase()
  let fechaNacimiento = new Date(prompt("Digita la fecha de nacimiento de la mascota", "MM/DD/AAAA"))
  let edad = Math.floor((fechaActual - fechaNacimiento) / (1000 * 3600 * 24 * 365))
  let pesoKg = Number(parseFloat(prompt("Digita el peso de la mascota en KG")))
  let estado = prompt("Digita el estado de la mascota", "Estable/Critico").toLowerCase()
  let nombrePropietario = prompt("Digita el nombre del propietario de la mascota").toLowerCase()
  let docPropietario = prompt("Digita el documento del propietario de la mascota").toLowerCase()
  let telContacto = prompt("Digita el telefono del propietario de la mascota").toLowerCase()
  let emailPropietario = prompt("Digita el email del propietario de la mascota").toLowerCase()
  let nuevaMascota = {
    "nombre": nombre,
    "especie": especie,
    "raza": raza,
    "edad": edad,
    "pesoKg": pesoKg,
    "estado": estado,
    "nombrePropietario": nombrePropietario,
    "documentoDueño": docPropietario,
    "telefonoContacto": telContacto,
    "emailPropietario": emailPropietario
  }
  BDMascotas.push(nuevaMascota)
  verBDMascotas()
  menuPrincipal()
}


//Creamos la funcion de ver la lista de las mascotas

function verBDMascotas() {
  BDMascotas.forEach(mascota => {
    console.table(mascota)
  })
  menuPrincipal()
}

// Creamos la funcion de mostrar la lista de propietarios
function verBDPropietarios() {
  BDMascotas.forEach(mascota => {
    console.log(`${mascota.nombrePropietario} es el propietario de la mascota ${mascota.nombre}`)
  })
  menuPrincipal()
}

// Creamos la funcion de Buscar mascota por nombre

function buscarMascotaPorNombre() {
  let nombre = prompt("Digita el nombre de la mascota a buscar").toLowerCase()
  let mascotaEncontrada = BDMascotas.find(mascota => mascota.nombre == nombre)
  if (mascotaEncontrada) {
    console.table(mascotaEncontrada)
  } else {
    console.log("No se encontro la mascota")
  }
  menuPrincipal()
}

// Creamos la funcion de Buscar mascota por propietario

function buscarMascotaPorPropietario() {
  let nombrePropietario = prompt("Digita el nombre del propietario de la mascota a buscar").toLowerCase()

  BDMascotas.forEach(mascota => {
    if (mascota.nombrePropietario == nombrePropietario) {
      console.table(mascota)
    }
  });
  let mascotaNoEncontrada = BDMascotas.find(mascota => mascota.nombrePropietario !== nombrePropietario)
  if (mascotaNoEncontrada) {
    console.log("No se encontro un propietario de una mascota")
  }
  menuPrincipal()
}

// Creamos la funcion de actualizar las mascotas

function actualizarMascota() {

  for (let i = 0; i < BDMascotas.length; i++) {
    let mascota = BDMascotas[i]
    console.log(`${[i + 1]}. ${mascota.nombre}`)
  }

  let num = prompt("Digita el numero de la mascota a actualizar").toLowerCase()
  let numero = num - 1
  alert(`Vamos a actualizar los datos de ${BDMascotas[numero].nombre}`)
  const fechaActual = new Date()
  let name = BDMascotas[numero].nombre

  let especie = prompt("Digita la especie de la mascota").toLowerCase();
  let raza = prompt("Digita la raza de la mascota").toLowerCase();
  let fechaNacimiento = new Date(prompt("Digita la fecha de nacimiento de la mascota", "MM/DD/AAAA"))
  let edad = Math.floor((fechaActual - fechaNacimiento) / (1000 * 3600 * 24 * 365))
  let pesoKg = Number(parseFloat(prompt("Digita el peso de la mascota en KG")))
  let estado = prompt("Digita el estado de la mascota", "Estable/Critico").toLowerCase();
  let nombrePropietario = prompt("Digita el nombre del propietario de la mascota").toLowerCase();
  let docPropietario = prompt("Digita el documento del propietario de la mascota").toLowerCase();
  let telContacto = prompt("Digita el telefono del propietario de la mascota").toLowerCase();
  let emailPropietario = prompt("Digita el email del propietario de la mascota").toLowerCase();



  let actualizar = {
    "nombre": name,
    "especie": especie,
    "raza": raza,
    "edad": edad,
    "pesoKg": pesoKg,
    "estado": estado,
    "nombrePropietario": nombrePropietario,
    "documentoDueño": docPropietario,
    "telefonoContacto": telContacto,
    "emailPropietario": emailPropietario
  }

  BDMascotas.splice(numero, 1, actualizar)
  verBDMascotas()
  menuPrincipal()

}



//creamos la funcion eliminar

function eliminarMascota() {
  for (let i = 0; i < BDMascotas.length; i++) {
    let mascota = BDMascotas[i]
    console.log(`${[i + 1]}. ${mascota.nombre}`)
  }

  let num = prompt("Digita el numero de la mascota a actualizar").toLowerCase()
  let numero = num - 1
  alert(`Vamos a elimar los datos de ${BDMascotas[numero].nombre}`)

  BDMascotas.splice(numero, 1)

  verBDMascotas()
  menuPrincipal()
}

// menuPrincipal()








// const header = document.querySelector("header")

// const titulo = document.createElement("h1")


// titulo.textContent = "Sistema de Gestión para Veterinaria"
// // titulo.setAttribute("id","titulo-principal") Forma anterior de hacerlo
// titulo.id = "titulo-principal"
// // titulo.style.color="blue" pone css en el html eso no lo queremos hacer
// titulo.classList.add("text-primary", "py-2","text-center","bg-dark")
// const nav = document.createElement("nav")
// header.appendChild(titulo)
// header.appendChild(nav)
// header.classList.add("d-flex", "justify-content-space-between")



// nav.innerHTML = `<div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Dropdown
// </button>
// <ul class="dropdown-menu">
//   <li><button class="dropdown-item" type="button">Action</button></li>
//   <li><button class="dropdown-item" type="button">Another action</button></li>
//   <li><button class="dropdown-item" type="button">Something else here</button></li>
// </ul>
// </div>`













const main = document.querySelector("main")



// BDMascotas.forEach(mascota => {

//   main.innerHTML +=`
//   <section class="card text-capitalize d-flex justi" style="width: 18rem;">
//   <img src="${mascota.img}" id="imagen_catalogo" class="card-img-top w-100 h-100 object-fit-cover border rounded" alt="Foto animal">
//   <div class="card-body">
//       <h3 class="card-title text-center">${mascota.nombre}</h3>
//       <span class="fw-bold">Raza:</span> <span>${mascota.raza}</span> <br>
//       <span class="fw-bold">Edad:</span> <span>${mascota.edad} años</span>
//       <p> 
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt delectus nemo qui quo,
//           tempor...
//       </p>
//       <div class="d-flex justify-content-center">
//           <button class="btn btn-primary" type="button">adoptame</button>
//       </div>
//   </div>
//   </section>
//  `

// });


const entrantes = document.querySelector("#carrusel")



let rangoFinal =mascotasEntrantes.length - 1

for (let i = 0; i < rangoFinal; i++) {
    entrantes.innerHTML += `
    <div class="carousel-item">
    <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
      src="${mascotasEntrantes[i].img}" alt="">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em"
      id="name1" class="text-capitalize fw-bold">${mascotasEntrantes[i].nombre}</text>
    </div>
  `
}

const active1=document.querySelector("#active");

active1.innerHTML += `
    
    <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
      src="${mascotasEntrantes[rangoFinal].img}" alt="">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em"
      id="name1" class="text-capitalize fw-bold">${mascotasEntrantes[rangoFinal].nombre}</text>
    `



let losMas = document.querySelector("#los-mas")

Losmastiernos.forEach(mascota => {
  losMas.innerHTML +=`
  <section class="card text-capitalize d-flex " style="width: 26rem" >
  <img src="${mascota.img}" id="imagen_catalogo" class="card-img-top w-100 h-100 object-fit-cover border rounded" alt="Foto animal">
  <div class="card-body">
      <h3 class="card-title text-center">${mascota.nombre}</h3>
      <span class="fw-bold">Raza:</span> <span>${mascota.raza}</span> <br>
      <span class="fw-bold">Edad:</span> <span>${mascota.edad} años</span>
      <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt delectus nemo qui quo,
          tempor...
      </p>
      
  </div>
  </section>
 `

})

const salientes = document.querySelector("#carruse2")



let rangoFinal2 =mascostasSalientes.length - 1

for (let i = 0; i < rangoFinal; i++) {
    salientes.innerHTML += `
    <div class="carousel-item">
    <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
      src="${mascostasSalientes[i].img}" alt="">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em"
      id="name1" class="text-capitalize fw-bold">${mascostasSalientes[i].nombre}</text>
    </div>
  `
}

const active2=document.querySelector("#active2");

active2.innerHTML += `
    
    <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
      src="${mascostasSalientes[rangoFinal2].img}" alt="">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em"
      id="name1" class="text-capitalize fw-bold">${mascostasSalientes[rangoFinal2].nombre}</text>
    `
