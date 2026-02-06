// modulo 01 

/*gemini
1)Muestra un saludo que incluya tu nombre y tu edad. El nombre debe estar definido como texto y la edad como número.

2)Suma un número entero y uno decimal. Guarda el resultado en una variable donde el sistema determine el tipo automáticamente. Muestra el resultado y de qué tipo de dato se trata.

3)Tienes dos variables con valores iniciales distintos. Haz que intercambien sus valores entre sí y muéstralos.

4)Define un valor inalterable para PI. Intenta cambiarlo después y escribe qué sucede.*/

//1)
let nombre: string = "gale";
let edad: number = 18;

console.log(`mi nombre es ${nombre}  y mi edad es ${edad}`);

//2)
let suma = (2 + 0.5);
console.log(suma);
console.log(typeof(suma))

//3)
let exp1: string = "perro";
let exp2: string = "gato";
console.log(exp1, exp2);

let temp1 = exp2

exp2 = exp1;
exp1 = temp1;
console.log(exp1, exp2)



//4)

let pi: number = 3.1415;   //const, pero lo cambie para no tener errores en el codigo
pi = 16;

console.log("Cannot assign to 'pi' because it is a constant.");


//modulo 2

/*gemini

1)Validación doble: Tienes un número. Si es par y mayor a 10, muestra un mensaje.

2)Rango de notas: Tienes una variable nota.

Menor a 4: "Desaprobado".

De 4 a 6: "Recuperatorio".

7 o más: "Aprobado".

3)Tabla de multiplicar: Muestra los resultados de la tabla del 5 (del 1 al 10) usando un bucle.

4)Conteo final: Haz una cuenta regresiva del 10 al 0. Al llegar al final, muestra "¡Despegue!"*/

//ejercicios

//1)
let numero: number = 12;

if ((numero % 2 === 0) && (numero > 10)) {
    console.log("es mayor y par");
};

//2)
let nota: number = 5;

if (nota >= 7) {
    console.log("aprobado");
}
else if (nota >=4) {
    console.log("recuperatorio");
}
else (console.log("desaprobado"));

//4)
let i:number = 10

for (i = 10; i >= 0; i--) {
    console.log(i);
}

if (i <= 0) {console.log("despegue!")}

//3)
let trash: number = 1

for (trash = 1; trash <= 10; trash++) {
    console.log(trash * 5)
}

/* El Filtro de números: Crea un bucle que vaya del 1 al 20. Pero, usando una condición adentro,
 solo debes imprimir los números que sean múltiplos de 3.

 Acumulador (Suma total): Crea una variable llamada total que empiece en 0. 
 Luego, haz un bucle que corra 5 veces. En cada vuelta, 
 el bucle debe sumarle el número de la vuelta actual a total. Al final (afuera del bucle), 
 imprime el valor de total.

 Interruptor de seguridad: Crea un bucle while que imprima un mensaje repetidas veces, 
 pero que se detenga automáticamente cuando una variable contador llegue a 7. */

 //1)

 let bucl: number = 1;

 for (bucl = 1; bucl <= 20; bucl++) {
    if (bucl % 3 === 0) {
        console.log(bucl)
    }
 };

 //2)
 let count: number = 0;
 let abc: number = 1;
 for (abc = 1; abc <=6; abc++)
    if (abc !== 6) {
        console.log(abc)
        count += abc
    }
 console.log(count)

 //3)

 let count2: number = 0

 while (count2 !== 7) {
    console.log("crazy bucle")
    count2++
 }


 /*El Juego del Número Secreto
Imaginá que tenés un número guardado en una variable (el "objetivo"). 
Querés que el bucle siga funcionando mientras la variable de control sea distinta a ese número, 
pero con una trampita: en cada vuelta, el número que controla el bucle debe 
aumentar de forma aleatoria o manual.*/

let objetivo: number = 50
let intento: number = 0

while (intento < objetivo) {
    intento += 7;
    console.log(intento)
}

console.log("El objetivo ha sido alcanzado o superado")

//modulo 02- funciones
//gemini

/*Reto 1: El Convertidor
Necesito un programa que convierta grados Celsius a Fahrenheit.

El problema: Yo te doy un número (ej. 25), y vos tenés que crear una función que haga el cálculo y
 me devuelva el resultado.

La fórmula: Multiplicar por 9, dividir por 5 y sumar 32.

Tu misión: Pensar cómo llamar a la función, qué parámetros pedir y qué devolver.

Reto 2: El Portero de Discoteca
Crea una función que reciba una edad.

Si la edad es 18 o más, debe devolver el texto "Podes pasar".
Si es menor, debe devolver "A tu casa"
Ojo: El mensaje no se imprime adentro de la función, 
la función solo "dice" (retorna) el mensaje, y vos lo imprimís afuera.

Reto 3: El Validador de Nombres
Crea una función que reciba un nombre.

Si el nombre está vacío (es igual a ""), debe devolver un error que diga "Nombre no válido".

Si tiene contenido, debe devolver "Hola " + nombre.*/

//if (omg) {console.log("De grados a farenheit es", omg * 9 / 5 + 32)}

//1)
 
let idk = (omg: number): number => {
    return (omg * 9 / 5) + 32
}

idk(20)

//2)

function disco (a: number) {
    if (a >= 18)
        return "podes pasar"      //no va return con console.log,porque return ya devuelve algo
    else {
        return "a tu casa"
}
}

disco(18)

//3)

function names (nombre: string) {
    if (nombre === "") {
        return "nombre no valido"}
    else { return "hola " + nombre}
}

let mensaje = names("sarah")
console.log(mensaje)



//otro ejercicio

function calcularIva(a: number) {
    return (a * 0.21) + a
}

console.log(calcularIva(124))


//gemini

/*El Calculador de Promedio:
Crea una función que reciba tres notas (números). La función debe retornar el promedio de esas notas
. Fuera de la función, imprime: "El promedio final es: [resultado]".

El Conversor de Segundos:
Crea una función que reciba una cantidad de minutos y retorne cuántos segundos son. 
Luego, usa ese resultado afuera para imprimir: "Faltan [segundos] para que despegue el cohete".

Bucle con Decisión:
Crea una función llamada contarPares. Debe recibir un número máximo (ej. 10). Adentro,
 la función debe tener un bucle for que imprima todos los números pares desde el 0 hasta ese máximo.
 (Aquí no hace falta return, solo imprimir adentro).

El Supermercado (El más difícil):

Crea una función llamada aplicarDescuento. Debe recibir un precio y un porcentaje de descuento.

Debe retornar cuánto dinero se resta (el monto del descuento).

Afuera de la función, define un precioProducto = 500.

Usa la función para calcular el descuento del 10%.

Imprime el precio final (Precio original menos el descuento que calculó la función).*/

//1)
function promedio (a: number, b: number, c: number) {
    return (a + b + c) / 3
};

console.log("el promedio final es:", promedio(6,7,8));

//2)
function minAseg (a:number) {
    return a * 60
};

console.log(`faltan ${minAseg(20)} segundos para que despegue el cohete`);

//3)

for (let minimito = 0; minimito <= 10; minimito++) {
    if (minimito % 2 === 0) {
        console.log(minimito)
    }
}

//4)

function aplicarDescuento (a: number) {
    return a * 0.10
}

let precioProducto: number = 500;

console.log(precioProducto - aplicarDescuento(precioProducto))

//final boss?



function calcularTotal (precio: number, cantidad: number) {
    return precio * cantidad}
    function procesarPago (cliente: string, monto: number) {
        if (monto > 0) 
            return `ticket:${cliente} pago ${monto}`
    }


let total = calcularTotal(50,4);
let resultadoFinal = procesarPago("franco",total)
console.log(resultadoFinal)

//another one      
/*al hacer console log en la funcion solo sirve para mi, luego eso muere, 
es mejor guardar la funcion y poner retunr para que sea mas funcional*/
 
function verificarAprobacion (nota: number) {
    if (nota >=6)
        return "aprobado"
    else 
        return "desaprobado"
}

let resultado = verificarAprobacion(8)

console.log("el alumno esta ",resultado)


//modulo 03- estructuras de datos

//1)
let my_array = ["ferrari", "volkswagen", "ford"]
my_array.push("ram")

console.log(my_array)

//2)
interface klk {
    nombre: string
    edad: number
    profesion: string 
}

let my_obj: klk = {
    nombre: "benito",
    edad: 22,
    profesion: "streamer"
};

//3)

let my_map = new Map()
my_map.set(1,"argentina")
my_map.set(2, "francia")
my_map.set(3, "brasil")

console.log(my_map)
console.log(my_map.has(1))

//4)

let my_set = new Set() 
my_set.add(1)
my_set.add(2)
my_set.add(2)
my_set.add(3)
my_set.add(3)
my_set.add(3)

console.log(my_set)


//5)

let my_tupla: [string, number,number] = ["coords", 24.5, 57.6]

console.log(my_tupla)