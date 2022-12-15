/**
 * OPERADORES 
 * 
 */

let nombre = "jhonny"
let apellido = "Achig"
let nombreCompleto = nombre + apellido

// Template String
// estos sinbolos `` se llaman back string o plantillas literales una de sus ventajas es que se puede escribir variables
// utilizando ${}
 let nickname = `Mi nombre es: ${nombre} y mi apellido es ${apellido}`
 console.log(nickname)

//IGUALDAD

// este simbolo == es igualdad o comparacion 
//verifica si los valores son iguales y devuelte un resultado booleano
//let a = 20,  b=30
//let resultado = a == b
//console.log(resultado) //en este ejemplo su resultado es false

//let c = 40, d= "40"
//let resultado2 = c ==d
//console.log(resultado2)// en este ejemplo su resultado es true


///ESTRICTAMENTE IGUAL
//este sinbolo === es de estrictamente igual al comprar deben ser iguales en todo sentido

//let a =50, b=50
//let resultado =a ===b
//console.log(resultado) //el resultado es true son iguales

//let d = "50"
//let resultado2 = a === d
//console.log(resultado2) // el resultado es false ya que es la variable d el 50 tiene comillas


///DIFERENCIA
//estos simboles != compruena si sus dos operadores no son iguales
//let a = 24, b= 6
//let resultado = a != b
//console.log(resultado) //resultado true ya que no son iguales

//let d = "24"
//let resultado2 = a !=d
//console.log(resultado2)// el sresutlado el false ya que sin son iguales sin importar las comillas
 


///DIFERENCIA ESTRICA
//estos simboles !== compruena si sus dos operadores no son iguales
//let a = 24, b= 24
//let resultado = a !== b
//console.log(resultado) //resultado false ya que si son iguales

//let d = "24"
//let resultado2 = a !==d
//console.log(resultado2)// el sresutlado el true ya que no son iguales por las comillas


///MAYOR/MENOR QUE
/// mayor que > -- mmenor < --- mayor o igual que >=   --- menor o igual que <=
let a = 20
let b = 21

console.log (a >= b)