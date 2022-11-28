//Uma promisse é uma forma de agendar um processamento assíncrono dentro do JavaScript.

function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    });
}

falarDepoisDe(3, "Teste")
    .then( frase => console.log("A frase deu certo: ", frase))
    .catch(erro => {
        console.log("Deu erro");
    })