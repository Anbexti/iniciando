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

if (i = 0) {console.log("despegue!")}