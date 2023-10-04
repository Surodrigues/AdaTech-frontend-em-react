// Selecionar elementos HTML da nossa página utilizando o document

//Pelo nome da tag

const todosP = document.getElementsByTagName("p");

console.log(todosP);

//Pelo nome da classe

const todosClasseParagrafo = document.getElementsByClassName("p1");

console.log(todosClasseParagrafo);

//Pelo atributo name da tag

const emailInput = document.getElementsByName("email");

console.log(emailInput);

//Pelo id da tag

//document.getElementById(elementId);

//Query Selector

document.querySelector('seletor css') //pega só o primeiro elemento
document.querySelector('body > img#js-logo') //exemplo

document.querySelectorAll("pega todos os elementos passados")

//
console.clear();
//


// Acessando|alterando o conteúdo HTML das tags

const primeiroParagrafo = document.querySelector("p.p1");

console.log(primeiroParagrafo);

console.log("textContent:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = 'outra coisa'; //renderiza só texto
primeiroParagrafo.innerHTML = "<strong>Outra coisa</strong>"; //renderiza a tag


console.clear();

emailInput[0].value = 'suely@email.com'; //emailInput é um array (getElements)


// Criando elementos na Página HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li"); //pega todas as li

const novaTagLi = document.createElement('li');
novaTagLi.textContent = 'segundo item';

console.log(novaTagLi);

//listaUl.appendChild(novaTagLi); //não adianta repetir o cód, só adiciona uma vez. joga no final

listaUl.insertBefore(novaTagLi, listaLis[1]);

//remover

listaUl.removeChild(listaLis[0]);



