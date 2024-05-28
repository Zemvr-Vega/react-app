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

    if (editIndex !== undefined) {
        const id = todo[editIndex]._id;
        const body = {_id: id, title, todo: [...tasks]};

        (async () => {
            const response = await fetch('/todo', {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const res = await response.json(body);

            setTodo(prevState => {
                var old = prevState;
                old[editIndex] = res;
                return [...old];
            });

        })();
    }
    else {
        const body = {title, todo: [...tasks]};

        (async () => {
            const response = await fetch('/todo', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const res = await response.json(body);
            setTodo([...todo, res]);
        })();
    }
  }

  const editForm = (index) => {
    setEditIndex(index);
    console.log(index);
  }

  const clearForm = () => {
    setEditIndex(undefined);
  }

  const deleteForm = (index) => {
    const body = todo[index];
    (async () => {
        const response = await fetch('/todo', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        const res = await response.json();
        setTodo(prevState => {
            var old = prevState;
            old.splice(index, 1);
            return [...old];
        });
    })();
  }


  return (
    <>
      <Header />
      <main className=' h-full w-full px-60 py-10 flex flex-row gap-8'>
        <TodoContainer>
          {(todo.length == 0) ? "No data found. Please add tasks." : todo.map((todoItem, index) => {
            return <Todo key={todoItem._id} id={index} title={todoItem.title} todo={todoItem.todo} onTodoDelete={deleteForm} onTodoEdit={editForm} />
          })}
          
        </TodoContainer>
        <Form save={saveForm} onClearForm={clearForm} toEdit={todo[editIndex]}></Form>
      </main>
    </>
  );
}

export default App;
