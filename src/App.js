import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import Todo from './Todo';
import TodoContainer from './TodoContainer';

function App() {

  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(undefined);

  useEffect(() => {
    fetch('/todo').then(
        response => response.json()).then(
            data => {setTodo(data)});
  }, []);

  const saveForm = (title, task) => {
    var tasks = [];
    task.forEach(element => {
        if (element.value !== "") {
            tasks.push(element.value);
        }
    });

    const body = {title, todo: [...tasks]};

    (async () => {
        const response = await fetch('/todo', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        const res = await response.json(body);
        setTodo(res);
    })();
  }

  const editForm = (index) => {
    setEditIndex(index);
  }

  const clearForm = () => {
    setEditIndex(undefined);
  }

  const deleteForm = (index) => {
    (async () => {
        const response = await fetch('/todo', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: index})
        });
        const res = await response.json();
        setTodo(res);
    })();
  }


  return (
    <>
      <Header />
      <main className=' h-full w-full px-60 py-20 flex flex-row gap-8'>
        <TodoContainer>
          {(todo.length == 0) ? "No data found. Please add tasks." : todo.map((todoItem, index) => {
            return <Todo key={index} id={index} title={todoItem.title} todo={todoItem.todo} onTodoDelete={deleteForm} onTodoEdit={editForm} />
          })}
        </TodoContainer>
        <Form save={saveForm} onClearForm={clearForm} toEdit={todo[editIndex]}></Form>
      </main>
    </>
  );
}

export default App;
