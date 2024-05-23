import { useState } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import Todo from './Todo';
import TodoContainer from './TodoContainer';

function App() {

  const [todo, setTodo] = useState([]);

  const saveForm = (title, task) => {
    
    var tasks = [];
    task.forEach(element => {
        tasks.push(element.value);
    });
    var index = Math.random();

    setTodo([...todo, {index, title, todo: tasks}]);
  }



  const editForm = (index) => {
    
  }

  const deleteForm = (index) => {
    
  }

  return (
    <>
      <Header />
      <main className=' h-full w-full px-60 py-20 flex flex-row gap-8'>
        <TodoContainer>
          {(todo.length == 0) ? "No data found. Please add tasks." : todo.map((todoItem) => {
            return <Todo key={todoItem.index} title={todoItem.title} todo={todoItem.todo} todokey={todoItem.index} onTodoDelete={deleteForm} onTodoEdit={editForm} />
          })}
        </TodoContainer>
        <Form save={saveForm}></Form>
      </main>
    </>
  );
}

export default App;
