const fs = require('fs');

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
            fs.readFile(caminho, 'utf-8', (erro, dado) => {
                if(erro){
                    reject(erro);
                } else {resolve(dado);}
            });   
    });
}

lerArquivo(`C:/Users/mathe/Documents/Matheus/Estudos intensivo/Coder/Node/ESnext/promisseAdvanced/dados.txt`)
.then(conteudo => console.log("Conteudo: \n",conteudo))
.catch(erro => console.log("Erro do fs: ",erro));