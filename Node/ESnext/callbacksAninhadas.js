//Lidando com processamento assíncrono do jeito antigo
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    let resultado = "";
    http.get(url, response => {
        response.on('data', dados => {
            resultado += dados;
        });

        response.on('end', () => {
            callback(JSON.parse(resultado));
        });
    });
}


// let nomes = [];
// getTurma('A', (alunos) => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
//     getTurma('B', (alunos) => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));
//         getTurma('C', (alunos) => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
//             imprimirNomes(nomes);
//         });
//     });
// });

// function imprimirNomes (nomes) {
//     console.log(nomes);
// }

//Refatorando para promisses, nós temos:

const getTurma2 = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        let resultado = "";
        http.get(url, response => {
            response.on('data', dados => {
                resultado += dados;
            });

            response.on('end', () => {
                try {
                   resolve(JSON.parse(resultado));    
                } catch (error) {
                    reject(error);
                }
                
            });
        });
    });
}

Promise.all([getTurma2('A'), getTurma2('B'), getTurma2('C')])
    .then(turmas => {
        console.log(turmas.map(turma => turma.map(aluno => aluno.nome) ));
    })
    .catch(error => {
        console.log("Erro: ", error);
    });