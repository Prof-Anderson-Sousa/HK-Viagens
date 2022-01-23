/* Selecionando Elementos do Index */
let menu = document.querySelector(".menu-desktop");
let body = document.querySelector("body");
let container = document.querySelector(".container");

/* Criando Lista */
let lista = document.createElement("ul");
lista.classList.add("lista-menu");
let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");

/* Selecionando Imagem do X */
let containerLogo = document.createElement("figure");
let imgLogo = document.createElement("img");
imgLogo.classList.add("aviao");
imgLogo.setAttribute("src", "./assets/img/aviao2.png");
containerLogo.appendChild(imgLogo);

/* Selecionando Botão de Fechar Menu */4
let buttonClose = document.createElement("div");
buttonClose.classList.add("buttonClose");
let imgClose = document.createElement("img");
imgClose.setAttribute("src", "./assets/img/close_black_24dp.svg");
imgClose.classList.add("imgClose");
buttonClose.appendChild(imgClose);

/* Adicionando Nome aos Itens da Lista */
item1.innerHTML = "CADASTRE-SE";
item2.innerHTML = "LOGIN";
item3.innerHTML = "PREÇOS";
item4.innerHTML = "CARACTERÍSTICAS";

/* Itens Sendo Adicionado a Lista */
lista.appendChild(buttonClose);
lista.appendChild(containerLogo);
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);

/* Criando Função Adicionar Menu */
menu.addEventListener('click', adicionarMenu);

/* Função Sendo Utilizada */
function adicionarMenu() {
    container.classList.add("blur");
    body.appendChild(lista);
}

/* Criando Função Remover Menu */
imgClose.addEventListener('click', removerMenu);

function removerMenu() {
    container.classList.remove("blur");
    lista.remove();
}



