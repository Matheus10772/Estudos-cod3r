const { reject } = require("lodash");

function gerarNumeros(min, max) {
    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const valorGerado = parseInt( Math.random() * fator) + min;
        if(typeof valorGerado != "number") reject("Valores passados por parâmetro são inválidos.");
        else resolve(valorGerado);
    });
}


gerarNumeros("a", 7).then(valorGerado => {
    console.log("Valor gerado: ", valorGerado);
}).catch(erro => {
    console.log(erro);
});