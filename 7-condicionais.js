console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Barcelona`,
    `Portugal`,
    `Lisboa`,
)

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(3,1); //removendo um item
}else if(estaAcompanhada){
        console.log("Comprador esta acompanhado");
        listaDeDestinos.splice(3,1); //removendo um item
}else{
        console.log("Não é maior de Idade e não posso vender")
}


// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

console.log(listaDeDestinos);

