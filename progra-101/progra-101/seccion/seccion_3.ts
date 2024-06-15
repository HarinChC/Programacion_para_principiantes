//impresion 
 //Funcion para generar espacio entre las pruebas

console.log('***** SECCION 3 *****');
//prueba 1
console.log('***** PRUEBA 1 *****');
console.log("Inicio del programa: 1");
//pruebas de estructura de control -> IF 
export let cansado:boolean = true;
if(cansado === true){
    console.log("tomaria agua");
}
console.log("Fin del programa");
console.log(" ");
console.log(" ");

console.log('***** PRUEBA 2 *****');
console.log("Inicio del programa: 2");
//pruebas de estructura de control -> IF -> IF
let cansado1:boolean = true;
if(cansado1){
    console.log("esta cansado entonces");
    console.log("tomaria agua");
}
if(!cansado1){
    console.log("no esta cansado entonces");
    console.log("tomaria cafe");
}
console.log("Fin del programa");
console.log(" ");
console.log(" ");

console.log('***** PRUEBA 3 *****');
console.log("Inicio del programa: 3");
//pruebas de estructura de control -> IF -> ELSE
let cansado2:boolean = false;
if(cansado2){
    console.log("esta cansado entonces");
    console.log("tomaria agua");
}else
{
    console.log("no esta cansado entonces");
    console.log("tomaria cafe");
}
console.log("Fin del programa");
console.log(" ");
console.log(" ");

console.log('***** PRUEBA 4 *****');
console.log("Inicio del programa: 4");
//pruebas de estructura de control -> IF -> ELSE ANIDADO

let nota:number =56;

if(nota >= 60){
    console.log("Ganaste el Semestre");
} else if(nota <= 55){
    console.log("Perdiste el Semestre");
} else {
    console.log("no sabes que nota sacaste");
}
 
