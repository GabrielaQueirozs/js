/**
 * POO
 * Abstração, Herança e Polimosfismo
 *
 */



// classe modelo (iniciar sempre com letra maiuscula)
class Carros {
    constructor(cor,ano) {
        this.cor = cor
        this.ano = ano
    
    }
    
// açoes

criarCarro(){
    console.log("-------------------------------------------------------")
    console.log("")
    console.log(`Carro ${this.cor}`)
    console.log(`ano: ${this.ano}`)
}

ligar(){
    console.log("Seu carro está ligado")

}
desligar(){
    console.log("Seu carro está desligado!")
}


acelerar(){
    console.log("vrummm ____🚗___")
}
}

// classe modelo (iniciar sempre com letra maiuscula)
class Fuscas {
    constructor(cor,ano) {
        this.cor = cor
        this.ano = ano
    
    }
    
// açoes

criarFusca(){
    console.log("-------------------------------------------------------")
    console.log("  ")
    console.log(`Fusca ${this.cor}`)
    console.log(`ano: ${this.ano}`)
}

ligar(){
    console.log("Seu carro está ligado")

}
desligar(){
    console.log("Seu carro está desligado!")
}


acelerar(){
    console.log("vrummm ___🚗__")
}
}




// classe modelo (iniciar sempre com letra maiuscula)
class aviao extends Carros {
    constructor(cor,ano, envergadura ) {
        super(cor, ano)
        this.envergadura = envergadura
    
    }

    
// açoes

criarAviao(){
    console.log("-------------------------------------------------------")
    console.log("🛫 ")
    console.log(`avião ${this.cor}`)
    console.log(`ano: ${this.ano}`)
    console.log(`envergadura: ${this.envergadura}`)
}

aterrizar(){
    console.log("Avião")

}

acelerar(){
    console.log(" 🛫")
    console.log("____")
    console.log("")
}
}



    






    //instanciando (criando) um objeto
const carro1 = new Carros("vermelho", 2022)
    carro1.criarCarro()
    carro1.ligar()
    carro1.acelerar()
    carro1.desligar()

  //instanciando (criando) um objeto
const fusca1 = new Fuscas("azul", 1999)
  fusca1.criarFuscas()
  fusca1.ligar()
  fusca1.acelerar()
  fusca1.desligar()

const aviao1 = new aviao("azul e branco", 2022, 200)
  aviao1.criarAviao()
  aviao1.acelerar()
  aviao1.aterrizar()


