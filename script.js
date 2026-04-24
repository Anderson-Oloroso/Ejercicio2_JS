// 4. Mostrar los números del 1 al 10 con for
// 5. Mostrar los números del 10 al 1 con while
// 6. Función que muestre la tabla de multiplicar de un número
// 7. Sumar los números del 1 al 100 usando un ciclo
// 8. Función que reciba dos números y devuelva el mayor
// 9. Contar cuántas letras tiene una palabra usando un ciclo
// 10. Función que cuente cuántas vocales tiene una palabra
// 11. Función que reciba un número y muestre todos los pares hasta ese número
// 12. Función que calcule el factorial de un número
// 13. Función que reciba una frase y la imprima carácter por carácter
// 14. Función que invierta una palabra (ej: "hola" → "aloh")
// 15. Función que determine si una palabra es palíndroma
// 16. Función que sume solo los números pares del 1 al 50
// 17. Función que reciba un número y diga si es primo
// 18. Función que muestre un patrón de asteriscos
// *
// **
// ***
// ****
// 19. Función que simule un cajero automático
// Recibe un saldo y un retiro, valida si puede retirar o no.
// 20. Función que simule un login
// Recibe usuario y contraseña y valida si coinciden con valores definidos en el programa.
console.log("1. NUMERO POSITIVO, NEGATIVO O CERO");
function positivoeNegativo(numero){
    if (numero > 0){
        console.log("El numero",numero,"es positivo")
    }else if(numero < 0){
        console.log("El numero",numero,"es negativo")
    }
    else{
        console.log("El numero es 0")
    }
}
positivoeNegativo(15)

console.log("2. NUMERO PAR O IMPAR");
function parImpar(x){
    if (x%2 == 0){
        console.log("Numero par")
    }
    else{
        console.log("Numero impar")
    }
}
parImpar(10)

console.log("3. MAYOR DE EDAD");
function mayorEdad(edad){
    if (edad > 0 && edad <18){
        console.log("Usuario Menor de edad")
    }else if(edad >=18 && edad <=100){
        console.log("Usuario Mayor de edad")
    }else{
        console.log("Edad invalida")
    }
}

console.log("4. NUMEROS DEL 1 AL 10");
function mostrarAsc(){
    for(let i = 1; i<=10; i++){
        console.log(i)
    }
}
mostrarAsc()

console.log("5. NUMEROS DEL 10 AL 1");
function mostrarDesc(){
    let a = 10
    while( a > 0 ){
        console.log(a)
        a--
    }
}
mostrarDesc()
 
console.log("6. TABLA DE MULTIPLICAR");
function tablaMult(){
    let num = prompt("Ingrese el numero para la respectiva tabla de multiplicar: ")
    for(let j = 1; j <=10;j++){
        console.log(num,"*",j,"=",num*j)
    }
}
tablaMult()

console.log("7. SUMA DEL 1 AL 100");
function sumA100(){
    let suma = 0
    for(let y = 1; y<101;y++){
        suma +=y
        console.log(suma)
    }
}
sumA100()

console.log("8. EL MAYOR DE DOS NUMEROS");
function mayorMenor(a,b){
    if (a>b){
        console.log(a,"es mayor que",b)
    }
    else if (b>a){
        console.log(b,"es mayor que",a)
    }
    else{
        console.log("Los numeros son iguales")
    }
}
mayorMenor(8,1)

console.log("9. CONTAR LETRAS");
function contarLetras(){
    contador = 0
    let word = "Ornitorrinco"
    for(let letra of word){
        contador++
    }
    console.log("Letras en la palabra "+word+":",contador)
}
contarLetras()

console.log("10. CONTAR VOCALES");
function contarVocales(palabra){
    let vocales = "aeiou"
    let numVocal = 0
    for (let vocal of palabra.toLowerCase()){
        for (let letra of vocales){
            if (letra == vocal){
                numVocal++
            }
        }
    }
    console.log("Palabra: "+palabra)
    console.log("Cantidad de vocales: ",numVocal

    )
}
contarVocales("Caballo")

console.log("11. MOSTRAR NUMEROS PARES HASTA N");
function numPares(num){
    for(i = 0; i<=num;i++){
        if (i%2 == 0){
        console.log(i)
    }
    }
}
numPares(50)

console.log("12. FACTORIAL");
function factorial(num){
    if (num < 0){
        console.log("No se puede efectuar los factoriales con numeros negativos")
    }else if (num === 0 || num === 1){
        console.log(1)
    }else{
        let factor = 1
        for(j = 2; j <=num;num++){
            factor *=j
        }
        console.log(factor)
    }
}
factorial(15)

console.log("13. IMPRIMIR CARACTER POR CARACTER");
console.log("14. INVERTIR PALABRA");
console.log("15. PALINDROMA");
console.log("16. SUMA DE NUMEROS PARES DEL 1 AL 50");
console.log("17. NUMERO PRIMO");
console.log("18. PATRON DE ASTERISCOS");
console.log("19. CAJERO AUTOMATICO");
console.log("20. LOGIN");
