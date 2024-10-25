//Descomentar las lineas de ------ERROR------ para verlos en la consola. Se detendra el programa

// Inciso 1
function mostar_alerta(){
    let nombre="Facundo";
    const nacionalidad="argentino";

    if (nombre=="Facundo") {
        var edad=20//accesible dentro y fuera del bloque if
    }

    window.alert(`Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`);

    //Modifico los valores de las variables var y let
    nombre="Lautaro";
    edad=30;
    window.alert(`Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`);

    //------ERROR------ Intento modificar una variable const
    //nacionalidad="chileno";
}

mostar_alerta();

//window.alert(`Nombre: ${nombre}, Edad: ${edad}, Nacionalidad: ${nacionalidad}`);
//------ERROR------ no existen las variables fuera del bloque mostar_alerta()


/* 
Las diferencias entre var y let en JavaScript están relacionadas con el ámbito y el comportamiento de redeclaración: 

Alcance:
-'var' tiene ámbito de función. Por lo que si se declara una variable con 'var' dentro de una función, esta solo es accesible dentro de esa función. Pero, si la declaras dentro de un bloque (ej. un if o un for), sigue siendo accesible fuera de este.

-'let' tiene ámbito de bloque, significa que solo será accesible dentro de ese bloque {} y no fuera de él.

Redeclaración:
-'var' permite redeclarar la misma variable en el mismo ámbito sin generar un error. 'let' no lo permite, produce un error.
*/



//Inciso 2
/*
Hoisting (o "elevación") es un comportamiento en JavaScript en el que las declaraciones de variables y funciones son elevadas ("movidas") a la parte superior de su momento de ejecución durante la fase de compilación. Se puede usar variables y funciones antes de haberlas declarado en el código.

Ejemplo con variables:
Las declaraciones con 'var' pueden ser referenciadas antes de su declaracion, su valor sera 'undefined'
*/

console.log(x); //undefined
var x = 5; 
console.log(x); //5

/*Las variables declaradas con let y const también son elevadas, pero no se puede acceder a ellas antes de su declaración en el código.

console.log(y); //------ERROR------ ReferenceError: Cannot access 'y' before initialization
let y = 10;
*/

//Ejemplo con funciones:
saludar();
function saludar() {
    console.log("¡Hola!");
}



//Inciso 3
//funciones anónimas
let restar=function (x,y) {
    console.log("--Resta anónima--");
    return x-y;
}
console.log(restar(10,7));

//funciones flecha
let restar_flecha=(x,y) => x-y;
console.log("Resta flecha: ",restar_flecha(10,8));

//funciones de orden superior
function aplicarResta(x,y, operacion) {
    return operacion(x,y);
}
let resultado=aplicarResta(20, 10, (x,y)=>x-y);
console.log("Resta funcion orden superior: ", resultado);

//Funciones como métodos
let auto={
    marca:"porsche",
    mostarMarca: function() {
        console.log("El auto es un ", this.marca);
    }
}
auto.mostarMarca(); 

//funciones recursivas
function factorial(num) {
    if (num==0){
        return 1
    }
    else{
        return num * factorial(num-1)
    }
}
console.log("Factorial de 5 = ", factorial(5))



//inciso 4
//menor elemento
let arreglo=[1, 2, 3, 4, 5, 6, 11, 23, 1, 989, 0, 1, 111, 645, 50, 45];
const menor = arreglo.reduce((acumulador, valorActual) => {
    if (valorActual<acumulador){
        return valorActual
    }
    else{
        return acumulador
    }
  });
console.log("Menor de los elementos: "+menor)

//suma de elementos
const suma=arreglo.reduce((acumulador, valorActual)=>acumulador+=valorActual)

console.log("Suma de los elementos: "+suma)

//Arreglo donde cada elemento es el doble que en el arreglo original.
let dobles=arreglo.map(x=>x*2)
console.log("Arreglo con elementos x2: "+dobles)

//Arreglo con los elementos que sean mayores o iguales a 10.
let mayoresIguales=arreglo.filter(x=>x>=10)
console.log("Arreglo con los elementos que sean mayores o iguales a 10: "+mayoresIguales)

//Retornar el índice (en caso de existir) del primer elemento mayor a 10
let indice=arreglo.findIndex(x=>x>10)
console.log("Indice del primer elemento mayor a 10: "+indice)



//inciso 5
let automovil={
    ruedas:4,
    puertas:4,
    color:"Negro",
    velocidad:50,

    acelerar(){
        this.velocidad+=20
    }
}

console.log("Velocidad actual: "+automovil.velocidad+"KM/H")
console.log("Acelerando...")
automovil.acelerar()
console.log("Velocidad: "+automovil.velocidad+"KM/H")
