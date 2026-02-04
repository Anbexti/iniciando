//mouredev roadmap

//modulo 3- estructuras de datos

/*los parentesis() ejecutan funciones
los corchetes[] buscan en una posicion
las llaves {} tienen un objeto o un bloque de codigo*/

//array

let my_list = ["pedro","juan","mouredev","franco"];

let num_list = [2,4,9,29];

console.log(my_list)

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

my_list[0] = "tomas";
console.log(my_list);

my_list.push("chimuelo");
my_list.push("sarah");
my_list.sort();
console.log(my_list)


//Set- los sets con como los array pero en estos no se pueden duplicar un valor 

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

console.log(my_set.size)     //el .size muestra el tamaño del set

// Map

let my_map = new Map();
my_map.set("a", 1);         //insetando valores al map con .set
my_map.set("b", 2);
my_map.set("d", 3);
console.log(my_map);


my_map.set("a", 29);        //actualizando el elemento a con .set
console.log(my_map);

my_map.delete("d");
console.log(my_map);

console.log(my_map.size);        //viendo la cantidad de datos con .size

console.log(my_map.has("a"));    //verificando si tiene algun dato especifico con .has

// Objects

interface producto {        //definimos primero su forma para no cometer errores y que sea mas comodo
    nombre: string
    cantidad: number 
    stock: boolean
}


const my_obj: producto = {
    nombre: "esponja",
    cantidad: 10,
    stock: true
};                          
let my_second_obj = new Object ();             //dos formas de hacer el object 

