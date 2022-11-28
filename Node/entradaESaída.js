const { indexOf } = require("lodash");

const pessoa = process.argv.indexOf('-a') !== -1;

if (pessoa) {
    process.stdout.write('Fala anônimo!\n');
    process.exit();
} else {
    process.stdout.write('Informe seu nome: ');
    let nome;
    process.stdin.on('data', data => {
        nome = data.toString().replace('\n', '');
        process.stdout.write('Fala ' + nome);
        setTimeout(() => {
            process.exit();
        }, 5000);
        
    });

}