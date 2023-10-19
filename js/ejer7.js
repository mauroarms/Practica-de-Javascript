/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande

Dificultad:  🟢*/

let num1 = parseInt(prompt("Ingrese el primer numero:"))
let num2 = parseInt(prompt("Ingrese el segundo numero:"))
let num3 = parseInt(prompt("Ingrese el tercer numero:"))

if (num1>num2 && num1>num3) {
    console.log("El primer numero ingresado ("+num1+") es el número más grande")
} 
if (num2>num1 && num2>num3) {
    console.log("El segundo numero ingresado ("+num2+") es el número más grande")
} 
if (num3>num1 && num3>num2) {
    console.log("El tercer numero ingresado ("+num3+") es el número más grande")
} 