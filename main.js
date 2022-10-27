const lista = [
    "latte",
    "uova",
    "biscotti",
    "pane",
    "marmellata",
]
const listUN = document.querySelector("#lista-spesa");
let i = 0;
while (i < lista.length ){
    const elemnti = document.createElement("li");
    elemnti.append(lista)
    elemnti.append(listUN);
    i++;
}
console.log(lista)