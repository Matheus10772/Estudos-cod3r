//SET é uma estrutura não indexada que não aceita repetição. Não tem um indice associado ao valor, para que
//se possa acessar o valor.

const { values } = require("lodash");

//Para adicionar elemetnos a estrutura
let estruturaSet = new Set();
estruturaSet.add("Teste");
estruturaSet.add(123);
estruturaSet.add("Estrutura");
estruturaSet.add("Estrutura"); //Será ignorado, pois não aceita repetição

console.log(estruturaSet);

let estruturaSet2 = new Set([
    1,
    2,
    "Estrutura"
]);

console.log(estruturaSet2);

estruturaSet2.forEach((value) => {
    console.log("Valor: ", value);
});