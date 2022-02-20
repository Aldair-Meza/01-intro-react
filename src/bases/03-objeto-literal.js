const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 552314865,
        lat: 14.3222,
        lng: 34.9233154
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 )