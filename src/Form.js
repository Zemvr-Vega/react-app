import { useEffect, useRef, useState } from 'react';
import './App.css';
import Input from './Input';


function Form({save}) {

    // const [todo, setTodo] = useState({todoTitle: "", todoTask: ""});

    const titleRef = useRef();
    const taskRef = useRef([]);

    const [inputs, setInputs] = useState(["input"]);

    const saveTodo = () => {
        var title = titleRef.current.value;
        var task = taskRef.current;

        if (title != "" && task) {
            save(title, task);
        }
    }

   const addInput = () => {
        if (inputs.length <= 4) {
            setInputs([...inputs, "input"]);
        }
   }

    return (
        <form className=' flex-1 flex flex-col gap-5'>
            <Input label="Todo Title" type="text" ref={titleRef}/>
            {/* <Input label={`Task`} type="text" ref={taskRef}/> */}
            {
                inputs.map((input, index) => {
                    return <Input key={index} label={`Task ${index+1}`} type="text" ref={ref => taskRef.current[index] = ref}/>
                })
            }
            <div className='w-[34rem] flex flex-row gap-4'>
                <button type="button" className={`w-[35%] rounded-md bg-gray-100 hover:bg-gray-200 p-3 transition-all ${(inputs.length > 4) ? ' cursor-not-allowed hover:bg-gray-100' : ''}`} onClick={addInput}>Add task</button>
                <button type="button" className='w-[65%] rounded-md bg-blue-300 text-white hover:bg-blue-400 p-3 transition-all' onClick={saveTodo}>Save task</button>
            </div>
        </form>
    )
}

export default Form;