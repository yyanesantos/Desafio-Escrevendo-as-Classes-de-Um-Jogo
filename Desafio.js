class Herois {

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo //deve-se escolhido entre "mago", "guerreiro", "monge" e "ninja", escritos
                         // exatamente dessa forma, já que JavaScript consegue diferenciar maiúsculo do menúsculo.
    }

     atacar() {
        if(this.tipo === "mago") {
            console.log(`O ${this.tipo} atacou usando magia.`)
        }else if(this.tipo === "guerreiro") {
            console.log(`O ${this.tipo} atacou usando espada.`)
        }else if(this.tipo === "monge") {
            console.log(`O ${this.tipo} atacou usando artes marciais.`)
        }else if(this.tipo === "ninja") {
            console.log(`O ${this.tipo} atacou usando shuriken.`)
        }else{
            console.log(`Esse tipo de herói não existe no jogo.`)
        }
    }

}

    let heroi = new Herois("Sérgio", 28, "monge")
    
    heroi.atacar()
