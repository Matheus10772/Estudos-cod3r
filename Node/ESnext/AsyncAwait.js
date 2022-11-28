const http = require('http');

const getTurma = letra => {
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

const alunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');
    return [].concat(ta, tb, tc);
}

alunos().then((alunos) => {
    console.log(alunos);
});