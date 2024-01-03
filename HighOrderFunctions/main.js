// 1-
const imprimirMensaje = (mensaje) => console.log(mensaje)


// 2-
const crearMultiplicacion = (num1,num2) => num1*num2


// 3-
const array = [ 1,2,3,4,5,6,7,8,9]

const arrayMap = array.map(crearMultiplicacion)
console.log(arrayMap)


// 4-

const arrayBeer = beers 

const filtrarAlcohol = (array) =>{
    const arrayAlcohol = array.sort((a,b) => b.abv - a.abv).slice(0,10)
    return console.log(arrayAlcohol)
}
filtrarAlcohol(arrayBeer)


// 5-
const ordenarAmargo = (array) =>{
    const contienenIbu = array.filter(i => i.ibu > 0)    
    const arrayAmargo = contienenIbu.sort((a,b) => a.ibu - b.ibu).slice(0,10)
    return console.log(arrayAmargo)
}
ordenarAmargo(arrayBeer)


// 6-
const filtrarNombre = (array, nombre) =>{
    const objetoNombre = array.find(i => i.name === nombre)
    return console.log(objetoNombre)
}
filtrarNombre(arrayBeer,'Misspent Youth')


// 7-
const filtrarIbu =(array,num) =>{
    const objetoIbu = array.find(i=>i.ibu===num)  // devuelve el primer objeto con ibu = num pasado por parametro

    if(objetoIbu){
        return console.log(objetoIbu)
    }else{
        return console.log(`No hay cerveza con un ibu de ${num}`)
    }
}
filtrarIbu(arrayBeer,50)


// 8-
const filtrarNombreIndice = (array,nombre) =>{
    const buscarNombre = array.findIndex(i => i.name === nombre)
    if(buscarNombre != -1){
        return console.log(`el indice de ${nombre} es ${buscarNombre}`)
    }else{
        return `${nombre} no fue encontrado`
    }
}
filtrarNombreIndice(arrayBeer,'Misspent Youth')


// 9-
const filtrarAbvPorNum = (array,num )=>{
    const cervezaFiltrada = array.filter(cerveza => cerveza.abv <= num)
    console.log(cervezaFiltrada)

    const mostrarCervezas = cervezaFiltrada.map(cerveza => {        //terminar
        cerveza.name,
        cerveza.ibu,
        cerveza.abv
    })
    return console.log(mostrarCervezas)
}

filtrarAbvPorNum(arrayBeer,11)


// 10-
const filtrarYordenar = (array, propiedad, boolean) => {
    const ordenarCerveza = array
                            .filter(cerveza => cerveza[propiedad])
                            .sort((a,b) =>{
                                if(a[propiedad < b[propiedad]]){
                                    return -1
                                }
                                if(a[propiedad > b[propiedad]]){
                                    return 1
                                }
                                return 0
                            })
    if(boolean){
        return ordenarCerveza.slice(0,10)
    }      
    return ordenarCerveza.reverse().slice(0,10)                 
}

console.log(filtrarYordenar(arrayBeer, 'abv', true))


// 11-
const $tbody = document.getElementById("tbody")

function crearFila(cerveza) {
    return `
        <tr>
            <td>${cerveza.name}</td>
            <td>${cerveza.ibu}</td>
            <td>${cerveza.abv}</td>
        </tr>
    `
}

function crearTabla( listaCerveza , $elemento ){
    let template = ""
    listaCerveza.forEach( cerveza => template += crearFila( cerveza ))
    $elemento.innerHTML = template
}

crearTabla( filtrarYordenar(arrayBeer,'abv', true) , $tbody)