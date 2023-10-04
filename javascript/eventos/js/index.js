const botaoAumentar = document.querySelector('#aumentar');
const botaoDiminuir = document.querySelector('#diminuir');

const contador = document.querySelector('#contador');



botaoAumentar.addEventListener('click', ()=>{
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual + 1;
});

botaoDiminuir.addEventListener('click', ()=>{
  const valorAtual = Number(contador.textContent);

  contador.textContent = valorAtual - 1;
});

const input = document.querySelector('#input');

input.addEventListener('input', ()=>{
  console.log(input.value)
})

//alterando estilo inline


contador.style.color = 'red' ;
