// let nums = Number (prompt("Escriba el numero a multiplicar"))
// function tablaDel(numero){
//     for (let i = 1; i<=10; i++){
//         multiplo = i * numero;
//         console.log(multiplo);
//     }
// }
// tablaDel(nums)
/*ejercicio 2*/

//  let numero = Number (prompt("Ingrese un numero"))
//  let numerosArray = []

//  while (numero !=0){
//      numerosArray.push(numero)
//      numero = Number(prompt("Ingrese su numero"))
//      console.log(numerosArray)
//  }

//  let ultimoNumero = numerosArray[numerosArray.length - 1]
//  console.log(ultimoNumero)

// /*ejercicio 3*/

// let numeroIngresado = Number(prompt("Ingrese un numero y trate de adivinar"))
// let contador = 1
// if (numeroIngresado == null || numeroIngresado == " "){
//     alert("Usted no Ingreso nada, vuelva a intentar desde el ejercicio anterior")
// }else {
//     while (numeroIngresado != ultimoNumero && numeroIngresado >= 1 && numeroIngresado <= 100){
//         contador++
//         if (numeroIngresado > ultimoNumero){
//             alert ("El numro ingresado es mas grande, ingrese un nuevo numero")
//         } else {
//             alert("el numero ingresado es mas chico, ingrese otro numero")
//         }
//         numeroIngresado = Number (prompt("Ingrese un numero y trate de adivinar"))
//     }
//     alert('Felicitaciones usted adivino en ' + contador + ' intentos')
// }


/*ejercicio 4*/

// let numero = Number(prompt("Ingrese un valor numérico"))

// for (let divisor = 1; divisor <= numero; divisor++){
//     if((numero % divisor) === 0 ){
//         console.log(divisor)
//     }
// }


/*ejercicio 5*/

// let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
//  for (let i = 1; i<= nuevoArray.length; i++){
//     console.log(nuevoArray)
//  }

/*ejercicio 6*/

// let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
// for (let i=0; i <= (nuevoArray.length - 1); i++){
//     console.log(nuevoArray[i]*2)
// }

/*ejercicio 7*/

// let grupoFamiliar = [
//      mama ={
//         nombre: "Julia",
//         edad: 35,
//         altura: 167,
//         diaCumple: "10 de enero",
//         colorOjos: "marrón"
//     },
//     papa = {
//         nombre: "Pablo",
//         edad: 32,
//         altura: 180,
//         diaCumple: "15 de marzo",
//         colorOjos: "azul"
//     },
//     hija_mayor = {
//         nombre: "Luna",
//         edad: 10,
//         altura: 155,
//         diaCumple: "15 de marzo",
//         colorOjos: "azul"
//     },
//     hijo_medio = {
//         nombre: "Milo",
//         edad: 6,
//         altura: 112,
//         diaCumple: "15 de marzo",
//         colorOjos: "marron"
//     },
//     hija_menor = {
//         nombre: "Cloe",
//         edad: 4,
//         altura: 104,
//         diaCumple: "15 de marzo",
//         colorOjos: "azul"
//     }
// ]

// for (let elementos of grupoFamiliar){
//     console.log(elementos);
// }



/*ejercicio 9*/

// let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
// for(let i=0; i<=(nuevoArray.length - 1); i++){
//     if(nuevoArray[i] % 2 !== 0){
//         console.log (nuevoArray[i])
//     }
// }

/*ejercicio 10*/

// let numero = Number (prompt("Ingrese un numero"))
// let numCalculo = []
// let sumaPar = 0
// let sumaImpar = 0

// while (numero !=0){
//     numCalculo.push(numero)
//     numero = Number(prompt("Ingrese su numero"))
// }

// for (let i = 1; i<=numCalculo.length - 1; i++) {
//     if(numCalculo[i] % 2 === 0){
//         sumaPar += numCalculo[i] 
//     }else{
//         sumaImpar += numCalculo[i]
//     }
// }

// console.log(sumaPar)
// console.log(sumaImpar)

/*ejercicio 11*/

// let nuevoArray = [5, 6, 2, 6, 8, 10, 7, 6, 89, 12]
// let numMayor = nuevoArray[0]
// for (let i = 1; i<= nuevoArray.length; i++){
//     if(nuevoArray[i] > numMayor){
//         numMayor = nuevoArray[i]
//     }
// }
// console.log("El numero mas grande es: " + numMayor)



