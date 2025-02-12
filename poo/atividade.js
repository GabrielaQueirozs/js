/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author gabriela queiroz
 */

// Classe modelo (iniciar sempre com letra maiúscula)
class Carro {
    //atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
//ações
criarCarro() {
    console.log("---------------------------------------")
    console.log("┌─┐")
    console.log("└─┘")
    console.log(`Bloco de ${this.ano}`)
    console.log(`Resistência: ${this.cor}`)
}
ligar() {
    console.log(`Bloco de ${this.ano} colocado.`)
}
desligar(){
    console.log("□ □ □ □ Recursos obtidos!")
}
acelerar(){
    console.log("□ □ □ □ Recursos obtidos!")
}
}


