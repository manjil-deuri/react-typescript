import React, { useContext, useRef } from 'react';
import Classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {

    const todosctx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent): void => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (!(enteredText.trim().length > 0)) {
            return;
        }
        todosctx.onAddTodo(enteredText);
    };

    return (
        <form className={Classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Enter Todo</label>
            <input className={Classes.input} type="text" id="text" ref={todoTextInputRef} />
            <button className={Classes.btn} type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;