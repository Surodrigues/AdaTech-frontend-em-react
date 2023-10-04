//captura a tag input
const checkboxTema = document.querySelector("#tema");

//variável do tema
let isDarkTema;

//função que muda o tema
function setTema(){
  const body = document.querySelector('body');
  if(isDarkTema){
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
}//tbm fazer usando objeto do evento (e | evt | event) e e.target
// referência: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events

//função que verifica checkbox 
function onCheck(){
  if(isDarkTema){
    checkboxTema.checked = 'true';
  } else {
    checkboxTema.removeAttribute('checked');
  }
}

//verifica o tema no carregamento da pagina
window.onload = ()=>{
  const darkTemaStorage = localStorage.getItem('darkTema');
  isDarkTema = darkTemaStorage ==='true'? true : false;
  onCheck();
  setTema();
}

//evento que escuta se caixa for clicada e muda o tema
checkboxTema.addEventListener('click', ()=>{
  isDarkTema = !isDarkTema;
  localStorage.setItem('darkTema', isDarkTema);
  setTema();
}); 

//aprendizado: definir e separar as funções!