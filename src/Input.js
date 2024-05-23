import { forwardRef } from 'react';
import './App.css';


const Input = forwardRef(function ({label, type}, inputRef) {

    return (
        <div className='flex flex-col gap-[.10rem] w-[34rem]'>
            <label>{label}</label>
            <input type={type} ref={inputRef} className='h-10 w-full border-slate-200 border-2 px-3 outline-none focus:border-blue-300 transition-all'/>
        </div>
    )
});

export default Input;