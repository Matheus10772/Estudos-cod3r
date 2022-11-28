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

function gerarVariosNumeros() {
    return Promise.all([gerarNumeros(5, 20),
                gerarNumeros(4, 7),
                gerarNumeros(8,10),
                gerarNumeros(15, 50)
                                ]);
}

gerarVariosNumeros()
.then(numeros => console.log(numeros))
.catch(erro => console.log("Erro: ", erro));