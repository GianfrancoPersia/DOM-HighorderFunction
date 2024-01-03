// 1-
const titulo = document.getElementById("title")


// 2-
const tituloPrincipal = "Frutas" 
titulo.textContent=tituloPrincipal
titulo.classList="text-xl"


// 3-
const $header = document.querySelector('header')
$header.classList.add("bg-amber-600")

const $footer = document.querySelector('footer')
$footer.classList.add('bg-amber-600')


// 4-
const parrafo = document.querySelector('footer p')
parrafo.textContent+=' Gianfranco Persia - Cohort 53'

// 5- 
const div_cont_main = document.getElementById('contenedor')


// 6-
console.log(frutas)

function crearCard(fruta){
    return `
        <article class="flex flex-col items-center border-2 border-black gap-2 rounded-lg w-72 h-80 p-4 justify-between">
                <img src=${fruta.foto} class="w-28">
                <h2 class="text-center">${fruta.nombre}</h2>
                <div class="flex items-center justify-end">
                    <p class="text-justify flex justify-end">${fruta.descripcion}</p>
                </div>
        </article>
    `
}

// 7 8-
for (const fruta of frutas) {
    const function_frutas = crearCard(fruta)
    div_cont_main.innerHTML+=function_frutas
}   
// const function_frutas = (acumulador,fruta) => acumulador +=crearCard(fruta)
// div_cont_main.innerHTML+= frutas.reduce( function_frutas,"")


// 9-
const $contLista = document.getElementById("lista")

const subtitle_frutas = document.createElement("h2")
subtitle_frutas.textContent="Frutas Dulces"
subtitle_frutas.classList="py-4 text-xl"
$contLista.appendChild(subtitle_frutas)


// // 10-

const frutasDulces = frutas.filter( frutas => frutas.esDulce)
console.log(frutasDulces)

const $ul = document.createElement("ul")
$ul.classList="flex flex-col gap-2 list-disc"
$contLista.appendChild($ul)

for (const frutaD of frutasDulces) {
    const $li = crearLiDulces(frutaD)  // recorrer arreglo y guardar li dentro del ul
    $ul.appendChild($li)
}



function crearLiDulces(frutaD){
    $li = document.createElement("li")  // crearme un li por cada vuelta del arreglo
    $li.textContent = frutaD.nombre
    return $li
}
