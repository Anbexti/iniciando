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

let años : number = 1

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

/*el modulo es el resto de la division, por ejemplo si hago 25 % 24 el modulo da 1 porque
si divido 25 en 24 lo que sobra es 1*/
//la potencia no es multiplicacion, solo por aclarar
/*si se hace por ejemplo  x(numero) % 2 === 0; entonces si el resultado del resto es 0
que seriia divisble por 2 ,el resultado es par, si se hace x % 2 !== 0 entonces el 
resultado seria impar*/


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
   

 //internet web

 let age: number = 18;
console.log("If:");
if (age >= 18) {
    console.log("Eres mayor de edad"); // Eres mayor de edad
} else if (age >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres menor de edad");
}

console.log("Switch:");
switch (age){
    case 18:
        console.log("Eres mayor de edad"); // Eres mayor de edad
        break;
    case 13:
        console.log("Eres adolescente");
        break;
    default:
        console.log("Edad no clasificada");
        break;
}
//tambien esta el while,y do while
//iterativas

let combustible: number = 5000

if (combustible >= 2500)
{console.log("podes viajar tranquilo,tenes",combustible)}

for(let i = 0; i < 11; i++) {console.log(i)}

let energia = 100

while (energia > 0) {console.log(`me queda ${energia}% de energia`);
energia -= 25}

//manejo de exepciones

/* try es para intentar algo `riesgoso`por asi decirlo,y nos da
la seguridad de poner un mensaje o algo si sale mal y que no
explote el codigo o algo asi*/
/* el primer de try,es por si salio bien, si podria llegar a salir mal
ponemos catch y lo configuramos,por ultimo,si ponemos finally
por mas que salga bien o mal la ejecucion saldra el mensaje 
o lo que sea*/

try{
    const resultado = 10 / 0;
    console.log("operacion exitosa")
}
catch{ console.log("ha habido un eror")}
finally{console.log("fin de la operacion")}

//extra 

let t:number = 10

for (t = 10; t < 56; t += 2)

if (t % 2 == 0 && t != 16) 
   {console.log(t)}


console.log("separacion")

//solucion web

for (let i = 10; i <= 55; i++) {
	if (i !== 55) {
		if (i !== 16 && i % 3 !== 0 && i % 2 === 0) {
			console.log(i);
		}
	} else {
		console.log(i);
	}
}


//modulo 2 - funciones y alcance

/* las funciones son como bloques de codigo para algo,un ejemplo seria guardar
una funcion del math.floor(math.random...)(que genera un numero random), cada vez que 
llame a la funcion, me dara un numero distinto, a que si lo ahgo con el let*/
//solo se ejecuta al llamarla, no al hacer la funcion

//funcion simple

function greet() {
    console.log("Hola TypeScript")
}

greet()
greet()


//con return y argumento

/*IMPORTANTE(maso) para ver el resultado rapido de las funciones usamos 
solo el console.log y la funcion, pero para usarlo de verdad es mejor
guardar la funcion en una variable, como const variable = funcion()*/

function trash(numero: number): number {
    return numero * 2
}

console.log(trash(7))

//varios argumentos 

function args_greet(greet: string, name: string) {
    console.log(greet,name)
}

args_greet("hi","sarah")


//con un argumento predeterminado

function default_arg_greet(name: string = "pablo"){
    console.log(`hola ${name}`)
}

default_arg_greet("jake")
default_arg_greet()


//con argumentos y retorno

function return_args_greet(greet: string, name: string) {
    return (`${greet}, ${name}`)
}

console.log(return_args_greet("hi","brais"))

//con retorno de varios valores

function multiple_returm_greet(): [string, number] {
    return ["hola", 10];
}

const result = multiple_returm_greet();
console.log(result[0]);
console.log(result[1]);

//variable global - es una varriable normal pero tambien se le dice global

let espada: string = "escalibur"

console.log(espada)

//variable local- son los parametros y varibales que estan en la funcion

function noIdea (a: number,b: number) {
    const basura = a + b + 2 * 1;
    const basura_peor = basura * 2
    return  basura_peor 
}

console.log(noIdea(5,5)) //24