//Crearemos la base de datos inicial

let BDMascotas = [

    {
      "nombre": "max",
      "especie": "gato",
      "raza": "siamés",
      "edad": 7,
      "pesoKg": 5,
      "estado": "critico",
      "nombrePropietario": "maría gómez",
      "docPropietario": "987654321",
      "telContacto": "987-654-3210",
      "emailPropietario": "mariagomez@example.com",
      "img":"./public/img/siames.webp"
    },
    {
      "nombre": "rocky",
      "especie": "perro",
      "raza": "bulldog",
      "edad": 4,
      "pesoKg": 14,
      "estado": "critico",
      "nombrePropietario": "pedro gonzález",
      "docPropietario": "456789123",
      "telContacto": "456-789-1230",
      "emailPropietario": "pedrogonzalez@example.com",
      "img":"./public/img/bulldog.webp"
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
      "emailPropietario": "anamartinez@example.com",
      "img":"./public/img/poodle.webp"
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
      "emailPropietario": "carlarodriguez@example.com",
      "img":"./public/img/golden_retriever.webp"
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
      "emailPropietario": "javierlopez@example.com",
      "img":"./public/img/persa.webp"
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
      "emailPropietario": "sofiagarcia@example.com",
      "img":"./public/img/maine_coon.webp"
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
      "emailPropietario": "luisaramirez@example.com",
      "img":"./public/img/beagle.webp"
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
      "emailPropietario": "carlossanchez@example.com",
      "img":"./public/img/chihuahua.webp"
    },
    {
      "nombre": "oreo",
      "especie": "gato",
      "raza": "siamese",
      "edad": 2,
      "pesoKg": 4.5,
      "estado": "critico",
      "nombrePropietario": "isabela diaz",
      "docPropietario": "852147963",
      "telContacto": "852-147-9630",
      "emailPropietario": "isabeladiaz@example.com",
      "img":"./public/img/siames2.webp"
    },
    {
      "nombre": "toby",
      "especie": "perro",
      "raza": "yorkshire terrier",
      "edad": 3,
      "pesoKg": 3,
      "estado": "critico",
      "nombrePropietario": "isabela diaz",
      "docPropietario": "745896321",
      "telContacto": "745-896-3210",
      "emailPropietario": "elenalopez@example.com",
      "img":"./public/img/yorkshire_terrier.webp"
    },
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
      "emailPropietario": "juanperez@example.com",
      "img":"./public/img/labrador.webp"
    },
  ]

  //Creamos la base de datos para los animales entrantes
let mascotasEntrantes=[]

 for (let i=0; i<BDMascotas.length; i++) {
    if (BDMascotas[i].estado =="critico"){
        mascotasEntrantes.push(BDMascotas[i])
    }
    
 }


 //Creamos la base de datos para la sección los más tiernos al azar
let a= Math.floor(Math.random()*11)
let b= Math.floor(Math.random()*11)
let c= Math.floor(Math.random()*11)
if (a==b || a==c || b==c){
    b= Math.floor(Math.random()*11)
    c= Math.floor(Math.random()*11)
} 

 let Losmastiernos=[BDMascotas[a],BDMascotas[b],BDMascotas[c]]

 //Creamos la base de datos para los animales salientes
 
 let mascostasSalientes=[]

 for(let i=0; i<BDMascotas.length;i++){
    if (BDMascotas[i].estado =="estable"){
        mascostasSalientes.push(BDMascotas[i])
    }
    
 }