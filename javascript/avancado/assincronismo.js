const fs = require("fs");

//  1. Callbacks

console.log("ANTES da função de ler o arquivo...");

//Função assíncrona (ler um arquivo demora um tempo)
fs.readFile(
  "/home/suely/Cursos/AdaTech-frontend-em-react/javascript/avancado/arquivo.txt",
  (erro, conteudoDoArquivo) => {
    if (erro) {
      console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
    } else {
      console.log(String(conteudoDoArquivo));
    }
  }
);

console.log("DEPOIS da função de ler o arquivo...");
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//Exemplo 02: setTimeout (função que cria um timer)

console.log("Antes do setTimeout...");

setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos!");
}, 2 * 1000);

console.log("Depois do setTimeout...");

// 2. Promisses (promessas)

/* const promessa = new Promise((resolve, reject) => {
    fs.readFile("/home/suely/Cursos/AdaTech-frontend-em-react/javascript/avancado/arquivo.txt", (erro, conteudoDoArquivo) => {
        if(erro) {
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
}); //criando uma promessa */

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "/home/suely/Cursos/AdaTech-frontend-em-react/javascript/avancado/arquivo.txt",
      (erro, conteudoDoArquivo) => {
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
          resolve(String(conteudoDoArquivo));
        }
      }
    );
  }); //criando uma promessa
}

// Foco a partir daqui... JavaScript já tem promessas prontas
//===========================================================!

/* promessa.then((retornoDoResolveDaPromise) => {
    console.log("Deu certo:", retornoDoResolveDaPromise);
}).catch((erro)=>{
    console.log("Deu ruim:", erro);
}).finally(()=>{
    console.log("Isso aqui vai ser executado independente de sucesso ou fracasso da promessa.");
}); */

lerArquivoPromise() //fetch()
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo:", retornoDoResolveDaPromise);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log(
      "Isso aqui vai ser executado independente de sucesso ou fracasso da promessa."
    );
  });

// 3. Async / Await

async function leituraDeDados() {
  console.log("2Isso é executado antes da promise ser resolvida!");

  const retornoDaPromessa = await lerArquivoPromise(); //espera a resolução da promessa para avançar no código, DENTRO do escopo da função.
  
  console.log(retornoDaPromessa);
  console.log("Isso é executado ANTES da promise ser resolvida!");
}

leituraDeDados();
