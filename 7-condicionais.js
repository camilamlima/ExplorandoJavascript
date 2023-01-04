console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Barcelona`,
    `Portugal`,
    `Lisboa`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
const passagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(3,1); //removendo um item
// }else if(estaAcompanhada == 18){
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(3,1); //removendo um item
// }else{
//         console.log("Não é maior de Idade e não posso vender")
// }

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem !!");
    listaDeDestinos.splice(3,1); //removendo um item
}else{
    console.log("Não é maior de Idade e não posso vender")
}

console.log("Embarque: \n\n")
if(idadeComprador >=18 && passagemComprada){
    console.log("Boa Viagem !!");
}else{
    console.log("Você não pode embarcar");
}



// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

console.log(listaDeDestinos);

