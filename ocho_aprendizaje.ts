//https://www.typescriptlang.org/

// las dos barras es para un coemntario de una linea // no hace falta cerrar

/*con la barra y asterisco puedo hacer
comentarios multilineal, y para cerrar se hace al revez*/

/* para explicar, los dos puntos(:)explican que tipo 
es la variable, si es string,number,boolean,any,y nose que mas,
y el igual (=) es para decir el valor de la variable*/

/*si escribimos texto en alguna variable o algo, se debe 
poner entre comillas para decir que es texto y no
alguna variable,instruccion o codigo*/

// let es para variables que van a cambiar su valor

let variable: string

//const para variables que no cambian su valor 

const nombre = "franco" 

/*string es texto; number son numeros; boolean son true o false. Estos
son los fundamentales*/

/*null para indicar que algo esta vacio intencionalmente; undefined para 
variables que se declararon pero no tiene valor aun; symbol para crear identificadores
unicos(avanzado); bigint para numeros gigantes que el tipo "number" no aguanta.
Estos son mas avanzados o opcionales creo*/

const gato: string = "chimuelo"

let edad: number = 1

let vida: boolean = true 

let estomago: undefined

console.log("aprendi bastante, buenas notaciones")