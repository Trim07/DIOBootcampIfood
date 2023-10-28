
class Heroi{

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let atributos = this.getAtributos();
        if(atributos.length){
            console.log(`o ${atributos[0].classe} atacou usando ${atributos[0].tipoAtaque}`);
            return true;
        }
        console.log(`escolha um heroi valido!`);
        return false;
    }

    getAtributos(){
        let tipos = [
            {
                classe: "mago",
                tipoAtaque: "magia"
            },
            {
                classe: "guerreiro",
                tipoAtaque: "espada"
            },
            {
                classe: "monge",
                tipoAtaque: "artes marciais"
            },
            {
                classe: "ninja",
                tipoAtaque: "shuriken"
            },
        ];
        return tipos.filter(e => e.classe === this.tipo.toString().toLowerCase());
    }
}


let heroi = new Heroi("Aladin", 70, "mago").atacar();

