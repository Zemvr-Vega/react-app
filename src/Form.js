import { useEffect, useRef, useState } from 'react';
import './App.css';
import Input from './Input';


function Form({save, onClearForm, toEdit}) {

    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        if (toEdit) {
            setInputs(toEdit.todo);
        }
    }, [toEdit]);

    const titleRef = useRef();
    const taskRef = useRef([]);

    const clearForm = () => {
        document.getElementById("form").reset();
        setInputs([]);
        onClearForm();
    }

    const saveTodo = () => {
        var title = titleRef.current.value;
        var task = taskRef.current;

        if (title != "" && task) {
            save(title, task);
        }
    }

    const addInput = () => {
        if (inputs.length <= 4) {
            setInputs([...inputs, ""]);
        }
    }

    return (
        <form id="form" className=' flex-1 flex flex-col gap-5'>
            <Input label="Todo Title" type="text" ref={titleRef} inpValue={(toEdit?.title) && toEdit.title}/>
            {
                inputs.map((input, index) => {
                    return <Input key={index + input} label={`Task ${index+1}`} inpValue={input} type="text" ref={ref => taskRef.current[index] = ref}/>
                })
            }
            <button type="button" className={`w-[100%] max-w-[34rem] rounded-md bg-blue-100 hover:bg-blue-200 p-3 transition-all ${(inputs.length > 4) ? ' cursor-not-allowed hover:bg-gray-100' : ''}`} onClick={addInput}>Add task</button>

            <div className='w-[34rem] flex flex-row gap-4'>
                <button type="button" className={`w-[35%] rounded-md bg-gray-100 hover:bg-gray-200 p-3 transition-all`} onClick={clearForm}>Clear</button>
                <button type="button" className='w-[65%] rounded-md bg-blue-300 text-white hover:bg-blue-400 p-3 transition-all' onClick={saveTodo}>Save task</button>
            </div>
        </form>
    )
}

export default Form;