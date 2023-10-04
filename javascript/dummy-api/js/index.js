async function getUsers() {
  const resposta = await fetch('https://dummyapi.io/data/v1/user?created=1', {
    headers: {
      'app-id': '650f819546342aa285c99d5a',
    },
  });
  const users = await resposta.json();
  console.log(users.data);
}
getUsers();

async function getUser() {
  const resposta = await fetch('https://dummyapi.io/data/v1/user/650f8512d885666619f56c17', {
    headers: {
      'app-id': '650f819546342aa285c99d5a',
    },
  });
  const user = await resposta.json();
  console.log(user);
}
getUser();

async function createUser() {
  const userData = {
    firstName: "Marlene",
    lastName: "Medeiros",
    email: "mmmedeiros@email.com",
  };
  try {
    await fetch('https://dummyapi.io/data/v1/user/create', {
      method: "POST",
      headers: {
        "app-id": "650f819546342aa285c99d5a",
        "content-type": "application/json", //tem que passar. o insomnia cria automatico
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log('Deu erro ao tentar criar novo usuário:', erro);
  }
}
//createUser();

