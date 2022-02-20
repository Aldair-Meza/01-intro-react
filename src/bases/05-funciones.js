/**const saludar = function saludar(nombre){
    return `Hola, ${nombre}`
}*/

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Aldo'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () => ({

    uid: 'ABD123',
    username: 'Rooth'
});

const user = getUser();
console.log(user);

//Tarea
//1. transformar a funcion de flecha
//2. Debe retornar un objeto implisito
//3. Pruebas 

const getUsuariActivo =( nombre ) => ({
    
        uid:'ABD456',
        usernmae: nombre
    
});

const usuarioActivo = getUsuariActivo('Aldair');
console.log( usuarioActivo );