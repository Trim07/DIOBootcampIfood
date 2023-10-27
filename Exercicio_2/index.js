
let nivel = [
    {
        vitorias_min: 0,
        vitorias_max: 10,
        nome: "Ferro"
    },
    {
        vitorias_min: 11,
        vitorias_max: 20,
        nome: "Bronze"
    },
    {
        vitorias_min: 21,
        vitorias_max: 50,
        nome: "Prata"
    },
    {
        vitorias_min: 51,
        vitorias_max: 80,
        nome: "Ouro"
    },
    {
        vitorias_min: 81,
        vitorias_max: 90,
        nome: "Diamante"
    },
    {
        vitorias_min: 91,
        vitorias_max: 100,
        nome: "Lendário"
    },
    {
        vitorias_min: 101,
        vitorias_max: "unlimited",
        nome: "Imortal"
    },
];


function calcularVitorias(vitorias, derrotas){
    let saldo_vitorias = vitorias - derrotas;
    for (let index = 0; index < nivel.length; index++) {
        if(vitorias >= nivel[index].vitorias_min && (vitorias <= nivel[index].vitorias_max || nivel[index].vitorias_max === 'unlimited')){
            console.log(`O Herói tem de saldo de ${saldo_vitorias} está no nível de ${nivel[index].nome}`);
            return saldo_vitorias;
        }
    }
}

let saldo = calcularVitorias(150, 5);