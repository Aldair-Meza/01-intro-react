const personaje = ['Goku', 'Vegetta', 'Trunks'];

const [,,p3] = personaje;

console.log(p3);

const retornaArrglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArrglo();
console.log(letras, numeros);

//Tarea
//1. primer valor se llamara nombre
//2. segundo setNombre
const userState = ( valor) =>{
    return [valor, () =>{console.log('Hola Mundo')}];
}

const [ nombre, setNombre ] = userState ('Goku');
console.log(nombre);
setNombre();