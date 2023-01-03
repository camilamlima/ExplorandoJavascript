console.log(`Trabalhando com listas`);

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';

console.log(`Destinos possíveis:`);
console.log(salvador,saoPaulo,rioDeJaneiro);

const listaDeDestinos = new Array(
    `Barcelona`,
    `Portugal`,
    `Lisboa`,
)

console.log(listaDeDestinos);

listaDeDestinos.push(`Madri`);
console.log(listaDeDestinos);

listaDeDestinos.splice(3,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);
