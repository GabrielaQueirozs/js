/**
 *  Tipagem dinâmica - JS
 */

// DECLARAÇÃO DE VARIÁVEIS 
    let nome, idade, peso, altura, vip, imc
      
// Entrada de dados 

nome = "Gabriela Queiroz"
idade = 16
peso = 56
altura = 1.58
vip = true 

// a linha abaixo verifica o tipo da variável
console.log(typeof(vip))

console.clear()

// processamento
// imc (indice de massa corporal | fcm ( frequência cardiáca maxíma) )
imc = peso / (altura + altura)
fcm = 208 - (0.7 * idade)

//saida
console.log("ficha do aluno")
console.log("________________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`vip: ${vip}`)
console.log(`imc: ${imc.toFixed(2)}`)
console.log(`fcm: ${fcm} bpm` )
