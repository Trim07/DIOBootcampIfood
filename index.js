
let heroi = {
    nome: "Superman",
    xp: 9999999
};

let nivel = [
    {
        minimo: 0,
        maximo: 1000,
        nome: "Ferro"
    },
    {
        minimo: 1001,
        maximo: 2000,
        nome: "Bronze"
    },
    {
        minimo: 2001,
        maximo: 5000,
        nome: "Prata"
    },
    {
        minimo: 6001,
        maximo: 7000,
        nome: "Ouro"
    },
    {
        minimo: 7001,
        maximo: 8000,
        nome: "Platina"
    },
    {
        minimo: 8001,
        maximo: 9000,
        nome: "Ascendente"
    },
    {
        minimo: 9001,
        maximo: 10000,
        nome: "Imortal"
    },
    {
        minimo: 10001,
        maximo: "unlimited",
        nome: "Radiante"
    }
];

for (let index = 0; index < nivel.length; index++) {
    if(heroi.xp >= nivel[index].minimo && (heroi.xp <= nivel[index].maximo || nivel[index].maximo === 'unlimited')){
        console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel[index].nome}`);
    }
}

