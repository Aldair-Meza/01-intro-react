const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { edad, nombre, clave} = persona;

//console.log(edad);
//console.log(nombre);
//console.log(clave);

const userContext = ( {clave, nombre, edad, rango = 'Capitan'} )=> {
    
    

   // console.log(edad, nombre, rango)

   return {
       nombreClave: clave,
       anios: edad,
       latlng: {
           lat: 14.28782,
           lng: -12.3284
       }


   }

}


 const {nombreClave, anios, latlng:{lat, lng}} = userContext( persona );

 //const {nombreClave, anios} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);