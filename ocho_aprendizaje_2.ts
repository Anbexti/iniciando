//mouredev roadmap

//modulo 3- estructuras de datos

/*los parentesis() ejecutan funciones
los corchetes[] buscan en una posicion
las llaves {} tienen un objeto o un bloque de codigo*/

//array          //es una lista ordenada donde el orden importa

let my_list = ["pedro","juan","mouredev","franco"];

let num_list = [2,4,9,29];

console.log(my_list);

my_list.push("carlitos");     //el .push() añade al final el dato que queramos
console.log(my_list);

my_list.unshift("TypeScript");     //el .unshift() añade al principio el dato que queramos
console.log(my_list);

console.log(my_list[4]);       //accediendo a un dato segun su posiciion(arranca de 0)

my_list.pop();                 //el .pop() elimina el ultimo dato de la lista
console.log(my_list);

my_list.shift();               //el .shift() elimina el primer dato de la lista
console.log(my_list);

let my_second_list = my_list.slice(2,4);   //el .slice añade datos de otro array existente
console.log(my_second_list);      //el .slice()indica desde donde empieza hasta donde termina antes de llegar

my_list.splice(0,1);          // el .splice() elimina uno o mas datos segun su posicion
console.log(my_list);         // desde .splice(aqui empieza, aqui se indica cuantos elemntos borrara)

my_list[0] = "tomas";           //actualiza el valor en la posicion 0 a "tomas"(en este caso)
console.log(my_list);

my_list.push("chimuelo");
my_list.push("sarah");
my_list.sort();               //reacomoda los datos en orden alfabetico(no muy recomendado)
console.log(my_list);


//Set- en los sets no hay orden,pero en estos no se pueden duplicar un valor y son rapidos para saber si tiene algun valor

let my_set = new Set();
my_set.add (2);          //añadiendo valores al set con .add(solo set)
my_set.add ("compu");
my_set.add (true);
my_set.add (true);
my_set.add ("29");
console.log(my_set);

console.log(my_set.has("sarah"));    //el .has verifica o comprueba si tiene el valor que le decimos(solo set y map)

my_set.delete(true);        //el .delete borra algun valor que le indiquemos(solo set y map)
console.log(my_set);

//para actualizar algun valor lo mejor es la eliminacion y luego insercion
//y el set no se puede ordenar

console.log(my_set.size);     //el .size muestra el tamaño del set

// Map    //para poner etiquetas a valores//para darle una clave a un valor y poder acceder a ella

let my_map = new Map();
my_map.set("a", 1);         //insetando valores al map con .set
my_map.set("b", 2);
my_map.set("d", 3);
console.log(my_map);


my_map.set("a", 29);        //actualizando el elemento a con .set
console.log(my_map);

console.log(my_map.has("b"));     //verifica si tiene alguna "b"(en este caso) con .has(muy rapida)

my_map.delete("d");
console.log(my_map);

console.log(my_map.size);        //viendo la cantidad de datos con .size

console.log(my_map.has("a"));    //verificando si tiene algun dato especifico con .has

// Objects            //sirve para hacer un paquete de datos en una varibale

interface producto {        //definimos primero su forma para no cometer errores y que sea mas comodo
    nombre: string
    cantidad: number 
    stock: boolean
    peso?: number 
}

const my_obj: producto = {       //ya tenemos definido a my_obj, es su descriopcion o valores
    nombre: "esponja",
    cantidad: 10,
    stock: true,
    peso: 22
};           
console.log(my_obj); 

my_obj.nombre = "sponge" ;
console.log(my_obj);

console.log("nombre" in my_obj);

delete my_obj.peso;          //solo se puede usar .delete si es opcional (como peso?)
console.log(my_obj);

//tupla    //se usa para guardar un par de datos ("2 o 3") 

//es para ser mas organizado y recordar los datos de la tupla 
let tupla:[string,number];
tupla = ["franco",100];

console.log(tupla);
console.log(tupla[0]);


//ejercicio(no por ahora porque nose,hasta el modulo 6)

