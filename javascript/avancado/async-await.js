const fs = require("fs");



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
  }); //criando uma promessa... JavaScript já tem promessas prontas
}

//---a chamada da promessa vai dentro da função assíncrona:

async function leituraDeDados() {
  console.log("Isso é executado antes da promise ser resolvida!");

  try {
    const dadosDoArquivoLido = await lerArquivoPromise(); //espera a resolução da promessa para avançar no código, DENTRO do escopo da função.
  
    console.log(dadosDoArquivoLido);
    console.log("Isso é executado DEPOIS da promise ser resolvida!");

  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promise (com erro).");
  }

  
}

leituraDeDados();