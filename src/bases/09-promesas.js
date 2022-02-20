import {getHeroeById} from './bases/08-import-export';

/**const promesa = new Promise( (resolve, reject) => {
    setTimeout ( () => {
        const heroe = getHeroeById(2);
      // resolve(heroe);
       //reject('Heroe no encontrado')
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch(error => console.warn(error));*/

const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolve, reject) => {
        setTimeout ( () => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            }else{
                reject('Heroe no encontrado');
            }
                    
        }, 2000)
    });


}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch(console.warn)


