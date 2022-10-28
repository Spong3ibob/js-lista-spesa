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
    elemnti.innerHTML = lista[i]; 
    listUN.append(elemnti);
    i++;
}
console.log(lista)