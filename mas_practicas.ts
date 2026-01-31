let min: number = 4;
let max: number = 89;

let edad: number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(edad);

if (edad >= 18) {
    console.log("eres mayor de edad");
} else if (edad >= 13) {
    console.log("eres adolescente");
} else {
    console.log("sos menor de edad");
}


console.log("2+2=",2 + 2);
console.log("si sumo 2 + 5 y resto 3 el resultado es",2 + 5 - 3);
console.log("si multiplico 5 por 6 y lo divido por 3 da", 5 * 6 / 3);
console.log("si saco el 10 % de 100 y hago una potencia de 2 da", (100 * 0.10) ** 2);

//modulo(%)

let año:number = 2026;

if (año % 4 === 0 && año % 100 !==0)
    {console.log(`${año} es bisiesto. febrero tiene 29 dias`)}
 else if (año % 400 === 0) {console.log(`${año}es bisiesto por la regla de los 400?`)}
 else {console.log(`${año} no es bisiesto`)};

 // el modulo 

 console.log("el modulo de 4 % 3 es", 4 % 3)

//ejercicio fizzBuzz 

let Fizz: string;
let Buzz: string;
let i:number;

for (i = 1; i < 16; i++)
    if (i % 3 === 0 && i % 5 === 0) {console.log("FizzBuzz")}
    else if (i % 5 === 0) {console.log("Buzz")}
    else if (i % 3 === 0) {console.log("Fizz")}
    else {console.log(i)}

/* conclusion: el orden del codigo importa, para cosas como if y leugo else if es mejor
poner lo mas especifico arriba y lo general abajo,porque al ejecutar solo mira si
la primera se cumple,y no mira lo de abajo si se cumplio, en caso
de que no si revisara los demas, como en el fizzbuzz,al poner primero
el if al 3 % = 0 tomaba esa al empezar, y al estar el 15 abajo para
que i % 3 = 0 && i % 5 = 0 eso no lo miraba porque 
primero estaba el i % 3 = 0y como se cumplio no paso lo del fizzbuzz*/
//mucho texto para explicacion `innecesaria`

//la explicacion del modulo esta en ocho_aprendizaje.ts/ en aritmetica

//ejercicio de jerarquia de codigo(lo de especifico arriba y general abajo)

let minimo: number = 100;
let maximo: number = 280;



let altura: number =
    Math.floor(Math.random() * (maximo - minimo  + 1)) + minimo
        {console.log(altura)}

 if (altura >= 200) {console.log("gigante")}
    else if (altura >= 180) {console.log("alto")}
    else if (altura >= 160) {console.log("promedio")}
    else {console.log("enano")
    };        

//operadores logicos

let al: boolean = true;
let bal: boolean = false;

/*el operador and(&&) combina las dos condiciones y si alguna es false entonces el
resultado sera false porque una no cumple la condicion*/

console.log("operador AND", al && bal);

/*se puede hacer lo contrario tambien, hacer que los dos false
den como resultado true,con ! que cambia el boolean de true a false
y viceversa*/

let air: boolean = false;
let fire: boolean = false;

if (!air && !fire) {console.log("deberia dar true creo", !air && !fire)};

//operador OR ||

if (al || bal) {console.log("esto es true porque uno cumple", al || bal)};

//operador NOT !

//no hacia falta el if,jiji

console.log("esto cambia de false a true", !al, !bal);

/*para cambiar del modo overwrite al normal(para escribir esto 
o cualquier cosa aca) se debe apretar la tecla insert del teclado
(recien lo supe)*/


//los operadores de asignacion son para "actualizar" la variable 

let asig: number = 0;

console.log(asig += 25)
console.log(asig *= 2)
console.log(asig -= 5)
console.log(asig++)

console.log(asig);

/*la variable asig cambio de valor 0 a valor 46 con los operadores
de asignacion*/


//switch

//el switch es para asignar distintos valores a una misma variable


let lista_invitados: string = "patricio"

switch (lista_invitados) {
    case "susana": console.log(
        "estas invitada al evento");
        break;
    case "pedro": console.log(
        "estas invitado al evento");
        break;
    case "juan": console.log(
        "no estas invitado");
        break;
    case "roberto": console.log(
        "estas invitado al evento");
        break;
    case "patricio": console.log(
        "no estas invitado");
        break;
    default: console.log(
        "por favor ingrese su nombre")
}

/*o se podria simplificar entre los que pasan y no,para eso hay que separarlos con un break.
De hecho al separarlos por break, al cumplirse una se activan los dos mensajes o los 3 
dependiendo el nombre, si esta invitado,en este caso, diria 3 veces que estas invitado
al evento,porque se cumplio uina condicion,en este caso un nombre*/


/* Codigo desactivado 

switch (lista_invitados) {
    case "susana": console.log(
        "estas invitada al evento");
    case "pedro": console.log(
        "estas invitado al evento");
    case "roberto": console.log(
        "estas invitado al evento");
        break;
    case "juan": console.log(
        "no estas invitado");
    case "patricio": console.log(
        "no estas invitado");
        break;
    default: console.log(
        "por favor ingrese su nombre")
}
        */

//ejercicio con switch

let categoria: number = 4
let producto: string 

switch (categoria) {
    case 1: console.log(
        "es de la categoria lacteos");
        break;
    case 2: console.log(
        "es de la categoria carnes");
        break;
    case 3: console.log(
        "es de la ctaegoria bebidas");
        break;
    case 4: console.log(
        "es de la categoria limpieza");
    }
