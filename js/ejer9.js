/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo*/

let frase = prompt("Escriba la frase:")
let longitud = frase.length
let puntero = 0
let fraseVocales = ""

while(puntero<=longitud){

    switch(frase.charAt(puntero)){  
        case 'a':
            fraseVocales += "a"
            puntero++    
         break;
        case 'e':
            fraseVocales += "e"
            puntero++  
         break;
        case 'i':
            fraseVocales += "i"
            puntero++  
         break;
        case 'o':
            fraseVocales += "o"
            puntero++  
         break;
        case 'u':
            fraseVocales += "u"
            puntero++  
         break;
        default:
            puntero++ 
            
    }

}

console.log("Las voacales de: '"+frase+"' son: \n -> "+fraseVocales)

