//Roadmap de mouredev 

//modulo 00- variables; constantes; datos primitivos y parte de sintaxis y console log

//https://www.typescriptlang.org/

// las dos barras es para un coemntario de una linea // no hace falta cerrar}

/*con la barra y asterisco puedo hacer
comentarios multilineal, y para cerrar se hace al revez*/

/* para explicar, los dos puntos(:)explican que tipo 
es la variable, si es string,number,boolean,any,y nose que mas,
y el igual (=) es para decir el valor de la variable*/

/*si escribimos texto en alguna variable o algo, se debe 
poner entre comillas para decir que es texto y no
alguna variable,instruccion o codigo*/

// let es para variables que van a cambiar su valor

let variable: string = "perro"

//const para variables que no cambian su valor 

const nombre = "franco" 

//estos son datos primitivos, los de aca abajo
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

const onda:string = "onda"

const persona: string = "aprendiendo"

let loan: string = "en"

const kilos : number = 8

console.log("que",onda,"estoy",persona,loan,kilos,"horas")



// modulo 01-

//operadores aritmeticos

let a: number = 4
let b: number = 9

console.log("suma:", a + b)
console.log("resta:", a - b)
console.log("multiplicacion:",a * b)
console.log("division:",a / b)
console.log("modulo:",a % b)
console.log("potencia:",a ** b)

//operadores de comparacion

a = 4 
b = 9

console.log("igualdad:",a == b)
console.log("desigualdad:", a != b)
console.log("igualdad estricta:", a === b)
console.log("mayor que:", a > b)
console.log("menor que:",a < b)
console.log("mayor o igual que:", a >= b)
console.log("menor o igual que:", a <= b)


//creo que es importante pero meh

//*) Operadores Lógicos
// Los operadores lógicos combinan condiciones booleanas para tomar decisiones.
let e: boolean = true;
let f: boolean = false;
console.log("AND lógico:", e && f); // false
console.log("OR lógico:", e || f); // true
console.log("NOT lógico:", !e); // false


//operadores de asignacion

let g: number = 10
let h: number = 5

console.log("asignacion simple", (g = h))
console.log("sumas y asignacion", (g += h))
console.log("multiplicacion y asignacion", (g *= h))
console.log("division y asignacion", (g /= h))
console.log("modulo y asignacion", (g %= h))
console.log("potencia y asignacion", (g **= h))


//estructuras de control

//condicionales

//if,else

let comida: boolean = true
 if (comida){
    console.log("hay comida,compro despues")
 } else {
    console.log("tengo que ir al tati")
 }

//iterativas

let combustible: number = 5000

if (combustible >= 2500)
{console.log("podes viajar tranquilo,tenes",combustible)}

for(let i = 0; i < 11; i++) {console.log(i)}

let energia = 100

while (energia > 0) {console.log(`me queda ${energia}% de energia`);
energia -= 25}
