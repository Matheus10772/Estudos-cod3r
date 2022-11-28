//MAP é uma estrutura do JavaScript, semelhante ao objeto. O MAP permite, usar qualquer estrutura do 
//JavaScript como identificador, ao contrário do objeto que só permite usar literias de string como identificador.
//No map você pode usar funções anônimas, números, strings e até objetos como identificadores.
//O MAP não permite pares chave valor com identificadores duplicados

let estruturaMap = new Map();

//para definir uma nova linha chave valor dentro do MAP:
estruturaMap.set({}, "Isso é obj como identificador");
estruturaMap.set("string", {id: 0001});
console.log(estruturaMap);

let chavesVariadas = new Map([
    [123, "Número"],
    [{}, "obj"],
    [function () {}, "Função anônima"]
]);

chavesVariadas.forEach((ch, vl) => {
    console.log(ch, " ", vl);
})


//Para deletar um atributo

chavesVariadas.delete(123);
console.log(chavesVariadas);

//Verificar número de itens

console.log(chavesVariadas.size);

//Verificar se um determinado atributo existe pelo identificador

console.log(chavesVariadas.has(function () {}));