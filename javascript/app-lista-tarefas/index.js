// sempre começa pegando os elementos
const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');

let tasks = []; //array de strings: ['tarefa 1', 'tarefa 2', ...]
// array de objetos = [{title:'tarefa 1', done: false}, {title: 'tarefa 2', ...}, ...]

function renderTaskOnHTML(taskTitle){
  const li = document.createElement('li');
  // li.textContent = taskTitle; //<li>Tarefa2</li>
  const input = document.createElement('input'); //criou o  <input>
  input.setAttribute('type', 'checkbox'); //<input type="checkbox">
  //criar evento
  input.addEventListener('change', (event) => {
    const liToToggle = event.target.parentElement;
    const spanToToggle = liToToggle.querySelector('span');

    //alterar o HTML
    const done = event.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = 'line-through';
    } else {
      spanToToggle.style.textDecoration = 'none';
    }

    //alterar o array
    tasks = tasks.map(t => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done
        }
      }

      return t
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
  })

  const span = document.createElement('span');
  span.textContent = taskTitle;
  const button = document.createElement('button');
  button.textContent = 'Remover';
  button.addEventListener('click', (event) => {
    // todoListUl.removeChild(event.target.parentElement);//remove só do HTML
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector('span').textContent;

    tasks = tasks.filter((t) => t.title !== titleToRemove); //filtra o array de objetos pelo title e remove a tarefa com o título escolhido
    todoListUl.removeChild(liToRemove);

    localStorage.setItem('tasks', JSON.stringify(tasks));

  });

  //cria a <li><input type="checkbox"><span></span><button></button></li>
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
}

window.onload = ()=>{
  const tasksOnLocalStorage = localStorage.getItem('tasks');

  
}

// lidar com o evento
form.addEventListener('submit', (event) => {
  event.preventDefault(); //evita o comportamento padrão de regarregar a ṕag ao submeter o formulário

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert('Sua tarefa precisa ter mais de 3 caracteres.');
    return;
  }

  //adicionando a nova tarefa no array de tasks
  // tasks.push(taskTitle);
  //adicionando a nova tarefa no array de objetos:
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem('tasks', JSON.stringify(tasks)); 

  //adicionando a nova tarefa no HTML
  renderTaskOnHTML(taskTitle);


  taskTitleInput.value = ''; //limpa o input

});


