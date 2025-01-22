/**
 * Estudo das funções
 
 */

//Função simples (literal)
function hello() {
    console.log("Hello function")
}

hello()

//função atribuida 
const hello2 = function(){
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()
 //arrow function => (simplicação de função atribuida)
 // function ------- =>
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

// funções com passagem de parametros e retorno 
// função simples
function somarS(num1,num2) {
    return (console.log(num1 + num2))
}
somarS(2,3)

// funçao atribuida 
const somarA = function(num1,num2){
    return(console.log(num1 + num2))
}
somarA(7,5)

somarA(4,6)
// arrow function 
const somarAF = (num1, num2) => {
    return(console.log(num1,num2))
}
// arrow function simplificada (retorno e implicito)
const somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2,2)