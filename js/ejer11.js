let numero = parseInt(prompt("Ingrese el número:"))

if(numero % 2 === 0){
    console.log("El número "+numero+" es divisible por 2")

    if(numero % 3 === 0){
        console.log("El número "+numero+" es divisible por 3")

        if(numero % 5 === 0){
            console.log("El número "+numero+" es divisible por 5")

            if(numero % 7 === 0){
                console.log("El número "+numero+" es divisible por 7")
            }
        }
    }
}
else{
    console.log("El número "+numero+" no es divisible por ningun numero")
}