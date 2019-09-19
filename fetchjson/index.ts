import 'axios';
import Axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

Axios.get(url).then(response => {
  const todo = response.data as ToDo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  To do with ID: ${id}
  Has a titile: ${title}
  Is it finished? ${completed}
  `);
}
