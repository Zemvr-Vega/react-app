import './App.css';
import Card from './Card';
import TodoItem from './TodoItem';

function Todo({title, todo, todokey, onTodoDelete, onTodoEdit}) {
    function onDelete() {
        onTodoDelete(todokey);
    }

    function onEdit() {
        onTodoEdit(todokey);
    }

    return (
        <Card styleName=' basis-60 flex flex-wrap flex-shrink flex-col gap-2 overflow-hidden w-full border-[1px] border-slate-300 relative'>
            <h1 className=' text-xl capitalize font-bold'>{title}</h1>
            {
                todo.map((item, index) => {
                    return <TodoItem key={index} todo={item}></TodoItem>
                })
            }

            <div className=' absolute top-2 right-1 flex flex-row'>
                <i onClick={onEdit}>
                    <svg className=' hover:fill-blue-600 cursor-pointer h-4 fill-blue-400 transition-all' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                </i>

                <i onClick={onDelete}>
                    <svg className=' hover:fill-red-600 cursor-pointer h-4 fill-red-400 transition-all' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                </i>
            </div>
        </Card>
    )
}

export default Todo;