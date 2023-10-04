// fetch API

//then - catch

/* fetch('https://viacep.com.br/ws/01001000/json/')
  .then((resposta) => {
    //console.log(resposta)
    resposta.json().then((dados) => console.log(dados));
  })
  .catch((erro) => {
    console.log(erro);
  }); */

  //async - await
  //a promessa vai dentro da função assincrona, com o await, envolta no bloco try

async function obterDadosCEP() {
  try {
    const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log('Deu errado!', erro);
  } finally {
    console.log('Terminou a requisição.');
  }
}

obterDadosCEP();
