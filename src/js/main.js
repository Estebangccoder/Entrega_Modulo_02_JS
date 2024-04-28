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

//Crearemos la base de datos inicial

let BDMascotas = [
  {
    "nombre": "luna",
    "especie": "perro",
    "raza": "labrador retriever",
    "edad": 6,
    "pesoKg": 12,
    "estado": "estable",
    "nombrePropietario": "juan pérez",
    "docPropietario": "123456789",
    "telContacto": "123-456-7890",
    "emailPropietario": "juanperez@example.com"
  },
  {
    "nombre": "max",
    "especie": "gato",
    "raza": "siamés",
    "edad": 7,
    "pesoKg": 5,
    "estado": "estable",
    "nombrePropietario": "maría gómez",
    "docPropietario": "987654321",
    "telContacto": "987-654-3210",
    "emailPropietario": "mariagomez@example.com"
  },
  {
    "nombre": "rocky",
    "especie": "perro",
    "raza": "bulldog",
    "edad": 4,
    "pesoKg": 14,
    "estado": "estable",
    "nombrePropietario": "pedro gonzález",
    "docPropietario": "456789123",
    "telContacto": "456-789-1230",
    "emailPropietario": "pedrogonzalez@example.com"
  },
  {
    "nombre": "milo",
    "especie": "perro",
    "raza": "poodle",
    "edad": 3,
    "pesoKg": 9,
    "estado": "estable",
    "nombrePropietario": "ana martínez",
    "docPropietario": "789123456",
    "telContacto": "789-123-4560",
    "emailPropietario": "anamartinez@example.com"
  },
  {
    "nombre": "lucky",
    "especie": "perro",
    "raza": "golden retriever",
    "edad": 8,
    "pesoKg": 13,
    "estado": "estable",
    "nombrePropietario": "carla rodríguez",
    "docPropietario": "321654987",
    "telContacto": "321-654-9870",
    "emailPropietario": "carlarodriguez@example.com"
  },
  {
    "nombre": "whiskers",
    "especie": "gato",
    "raza": "persa",
    "edad": 6,
    "pesoKg": 6,
    "estado": "estable",
    "nombrePropietario": "javier lópez",
    "docPropietario": "654987321",
    "telContacto": "654-987-3210",
    "emailPropietario": "javierlopez@example.com"
  },
  {
    "nombre": "simba",
    "especie": "gato",
    "raza": "maine coon",
    "edad": 4,
    "pesoKg": 7,
    "estado": "estable",
    "nombrePropietario": "sofía garcía",
    "docPropietario": "159263487",
    "telContacto": "159-263-4870",
    "emailPropietario": "sofiagarcia@example.com"
  },
  {
    "nombre": "buddy",
    "especie": "perro",
    "raza": "beagle",
    "edad": 5,
    "pesoKg": 11,
    "estado": "estable",
    "nombrePropietario": "luisa ramírez",
    "docPropietario": "369258147",
    "telContacto": "369-258-1470",
    "emailPropietario": "luisaramirez@example.com"
  },
  {
    "nombre": "coco",
    "especie": "perro",
    "raza": "chihuahua",
    "edad": 3,
    "pesoKg": 4,
    "estado": "estable",
    "nombrePropietario": "carlos sánchez",
    "docPropietario": "258369147",
    "telContacto": "258-369-1470",
    "emailPropietario": "carlossanchez@example.com"
  },
  {
    "nombre": "oreo",
    "especie": "gato",
    "raza": "siamese",
    "edad": 2,
    "pesoKg": 4.5,
    "estado": "estable",
    "nombrePropietario": "isabela diaz",
    "docPropietario": "852147963",
    "telContacto": "852-147-9630",
    "emailPropietario": "isabeladiaz@example.com"
  },
  {
    "nombre": "toby",
    "especie": "perro",
    "raza": "yorkshire terrier",
    "edad": 3,
    "pesoKg": 3,
    "estado": "estable",
    "nombrePropietario": "isabela diaz",
    "docPropietario": "745896321",
    "telContacto": "745-896-3210",
    "emailPropietario": "elenalopez@example.com"
  }
]


//Creamos la funcion de agregar una nueva mascota

function registrarNuevaMascota() {
  const fechaActual = new Date()
  

  let nombre = prompt("Digita el nombre de la mascota").toLowerCase()
  let especie = prompt("Digita la especie de la mascota").toLowerCase()
  let raza = prompt("Digita la raza de la mascota").toLowerCase()
  let fechaNacimiento = new Date(prompt("Digita la fecha de nacimiento de la mascota","MM/DD/AAAA"))
  let edad = Math.floor((fechaActual - fechaNacimiento)/(1000*3600*24*365))
  let pesoKg = Number(parseFloat(prompt("Digita el peso de la mascota en KG"))) 
  let estado = prompt("Digita el estado de la mascota", "Estable/Critico").toLowerCase()
  let nombrePropietario = prompt("Digita el nombre del propietario de la mascota").toLowerCase()
  let docPropietario = prompt("Digita el documento del propietario de la mascota").toLowerCase()
  let telContacto = prompt("Digita el telefono del propietario de la mascota").toLowerCase()
  let emailPropietario = prompt("Digita el email del propietario de la mascota").toLowerCase()
  let nuevaMascota={"nombre": nombre,
  "especie": especie,
  "raza": raza,
  "edad": edad,
  "pesoKg": pesoKg,
  "estado": estado,
  "nombrePropietario": nombrePropietario,
  "documentoDueño": docPropietario,
  "telefonoContacto": telContacto,
  "emailPropietario": emailPropietario}
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
  if (mascotaNoEncontrada){
    console.log("No se encontro un propietario de una mascota")
  }
  menuPrincipal()
}

// Creamos la funcion de actualizar las mascotas

function actualizarMascota() {

  for (let i=0; i<BDMascotas.length; i++){
    let mascota = BDMascotas[i]
    console.log(`${[i+1]}. ${mascota.nombre}`)
  }

  let num = prompt("Digita el numero de la mascota a actualizar").toLowerCase()
  let numero=num-1
  alert(`Vamos a actualizar los datos de ${BDMascotas[numero].nombre}`)
  const fechaActual = new Date()
  let name=BDMascotas[numero].nombre

  let especie = prompt("Digita la especie de la mascota").toLowerCase();
  let raza = prompt("Digita la raza de la mascota").toLowerCase();
  let fechaNacimiento = new Date(prompt("Digita la fecha de nacimiento de la mascota","MM/DD/AAAA"))
  let edad = Math.floor((fechaActual - fechaNacimiento)/(1000*3600*24*365))
  let pesoKg = Number(parseFloat(prompt("Digita el peso de la mascota en KG"))) 
  let estado = prompt("Digita el estado de la mascota", "Estable/Critico").toLowerCase();
  let nombrePropietario = prompt("Digita el nombre del propietario de la mascota").toLowerCase();
  let docPropietario = prompt("Digita el documento del propietario de la mascota").toLowerCase();
  let telContacto = prompt("Digita el telefono del propietario de la mascota").toLowerCase();
  let emailPropietario = prompt("Digita el email del propietario de la mascota").toLowerCase();
  
 

  let actualizar={"nombre": name,
  "especie": especie,
  "raza": raza,
  "edad": edad,
  "pesoKg": pesoKg,
  "estado": estado,
  "nombrePropietario": nombrePropietario,
  "documentoDueño": docPropietario,
  "telefonoContacto": telContacto,
  "emailPropietario": emailPropietario}

  BDMascotas.splice(numero, 1, actualizar)
  verBDMascotas()
  menuPrincipal()

}



//creamos la funcion eliminar

function eliminarMascota() {
  for (let i=0; i<BDMascotas.length; i++){
    let mascota = BDMascotas[i]
    console.log(`${[i+1]}. ${mascota.nombre}`)
  }

  let num = prompt("Digita el numero de la mascota a actualizar").toLowerCase()
  let numero=num-1
  alert(`Vamos a elimar los datos de ${BDMascotas[numero].nombre}`)

  BDMascotas.splice(numero,1)

  verBDMascotas()
  menuPrincipal()
}

menuPrincipal()