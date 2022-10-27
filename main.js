const lista = [
    "latte",
    "uova",
    "biscotti",
    "pane",
    "marmellata",
]
const listUN = document.querySelector("#lista-spesa");
let i = 0;
while (i < lista.length, i++ ){
    const elemnti = document.createElement("li");
    const contenuto = document.createElement("div");
    contenuto.setAttribute("src", lista[i]);
    contenuto.append(elemnti);
    elemnti.append(listUN);
}
