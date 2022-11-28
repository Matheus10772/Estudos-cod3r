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

async function executar() {
    try {
        return await gerarNumeros('a',7);
    } catch (error) {
        return error;
    }
}


executar().then(resultado => console.log(resultado));