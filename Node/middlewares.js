// Middleware: Padrão de projeto usado que estipula um divisão de funcionalidades 
// por pequenos módulos individuais e independentes entre si. 
// No middleware, cada funcionalidade é qubrada e dividida entre funções/métodos, 
// atribuindo a cada um deles uma especialidade única, e em uma cadeia de execuções de passos 
// para realização de uma funcionalidade, uma função/método é chamada de forma ordenada, 
// sem precisar que os passos tenham uma amarração.

//         contexto, próxima função
function passo1 (ctx, next) {
    ctx.valor1 = 'mid1';
    next();
}

function passo2 (ctx, next) {
    ctx.valor2 = 'mid2';
    next();
}

function passo3 (ctx, next) {
    ctx.valor3 = 'mid3';
    next();
}

function exec (ctx, ...middlewares) {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0);
}

let ctx = {};
exec (ctx, passo1, passo2, passo3);
console.log(ctx);