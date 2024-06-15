#😊 Programacion_para_principiantes 😊
Este Repo es referente a el curso realizado en udemy del curso programacion para principiantes

## ¿Qué es un lenguaje de programación?
 Un lenguaje de programación es un conjunto de reglas y símbolos que los desarrolladores utilizan para comunicarse con las computadoras. Es como enseñarle a la máquina qué hacer. Ejemplos de lenguajes de programación incluyen Python, JavaScript, Java, C++, PHP y muchos más

## Bajo nivel 
Es lo mas cercano al lenguaje nativo de la computadora 
0100101010101 -> Binarios

## Alto nivel
Es un lenguaje que es humanamente legible y cercano a como los seres humanos hablamos SMS->Mensajes de texto

# En este curso trabajaremos con Javascript y Typescript

# seccion_1.ts
## ¡ Aqui inicia la primera seccion !

## Impresion en consola
console.log('dato o msn a imprimir')

## Creacion de variable
let variable = valor;
let edad = 30;
let edad = '30';

# Que es una funcion ?
Una función en programación es un bloque de código que realiza una tarea específica cuando es llamado. Imagina que estás construyendo un programa, y una parte de él necesita hacer un cálculo, como sumar dos números o calcular la distancia entre objetos en un videojuego 3D. En lugar de escribir todo ese cálculo directamente en el programa principal, puedes crear una función para realizarlo.

Aquí están las partes clave de una función:

> Nombre de la función-> Es como llamamos a la función. Por ejemplo, podríamos tener una función llamada calcularDistancia.

> Argumentos o parámetros -> Estos son valores que pasamos a la función para que los use en su tarea. Por ejemplo, si queremos calcular la distancia entre dos puntos en un juego, podríamos pasar las coordenadas de esos puntos como argumentos.

> Tipo de retorno -> La función puede devolver un valor, como el resultado de la distancia calculada. Por ejemplo, podría devolver un número decimal.

>Bloque de código -> Aquí es donde escribimos las instrucciones específicas que la función ejecutará. En nuestro ejemplo, sería el cálculo de la distancia.

>>En resumen, las funciones nos permiten modularizar y reutilizar el código, lo cual es fundamental en el desarrollo de programas informáticos123. Si tienes más preguntas, no dudes en preguntar. 😊

## Creacion de una funcion para incrementar valor
function incrementoValor (){
    // esta incrementara el valor
    numero++

}
## Creacion de una funcion para Decrementar valor
function incrementoValor (){
    // esta incrementara el valor
    numero--
    
}
## Creacion de una funcion para incrementar valor de 2 en 2 tambien se puede crear para disminuir de 2 en 2
function incrementoValor (){
    // esta incrementara el valor
    numero+2
    numero-2
    
}

# seccion_2.ts
## ¡ Aqui inicia la Segunda seccion !


## Palabras reservadas

>if
>const
>for
>while
>case
>switch
>Entre otras ....

## lowerCamelCase -> se usa para crear funciones  y variables
let nombreUsuario

## UperCamelCase -> se usa cuando se crea una clase
ImprimirEnConsola

# Tipos de variables

//creando variable numero
let promedioNotas :number = 4;
let promedioNotas2  = 4;

//creando variable texto
let nombre :string = 'carlos';
let nombre2 = 'carlos';

//creando variable texto
let desactivado :boolean = false;
let activo :boolean = true;
let activo3  = true;
console.log("inverso  es :",!activo3)


## SECCION_3.ts 
> If 
>>if(validacion ){
>>    console.log("lo que haria");
>>}

> If anidado ( If - If )
>>if(validacion){
>>     console.log("lo que haria");
>>}
>>if(validacion2){
>>    console.log("lo que haria 2");
>>}

> If anidado ( If - Else )
>>if(validacion){
>>    console.log("lo que haria");
>>}else
>>{
>>    console.log("lo que haria 2");
>>}

> Otra forma y si no
>>if(validacion){
>>    console.log("lo que haria ");
>>} else if(validacion2){
>>    console.log("lo que haria 2");
>>} else {
>>    console.log("no sabe que haria 3");
>>}
    