import './App.css';

function TodoItem({todo}) {
    var key = Math.random();
    return (
        <div className='flex flex-row-reverse gap-2 justify-end overflow-hidden overflow-ellipsis' key={key}>
            <label htmlFor={key} className=' overflow-hidden overflow-ellipsis'>{todo}</label>
            <input type="checkbox" id={key} className='cursor-pointer' />
        </div>
    )
}

export default TodoItem;