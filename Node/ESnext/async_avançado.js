const { reject } = require("lodash");

function esperarPor(segundos = 2) {
    const multiplicadorParSegundos = 1000;
    segundos = segundos * multiplicadorParSegundos;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("Executando promisse");
           resolve();
        }, segundos);
    });
}

async function executar() {
    console.log("Executando 1");
    await esperarPor(1);
    console.log("Executando 2");
    await esperarPor(2);
    console.log("Executando 3");
    await esperarPor(3);

}

executar();