//Mais formas dentro do JavaScript de percorrer arrays.
//For of percorre os valore
//For in percorre os índices

let letras = ['a', 'b', 'c'];

for(let letra of letras){
    console.log(letra);
}

for(let indiceLetra in letras){
    console.log(indiceLetra);
}

let chavesVariadas = new Map([
    [123, "Número"],
    [{}, "obj"],
    [function () {}, "Função anônima"]
]);

for(let [chave, valor] of chavesVariadas.entries()) {
    console.log("chave: ", chave, " valor: ", valor);
}