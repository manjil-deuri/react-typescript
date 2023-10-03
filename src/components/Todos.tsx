import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import Classes from './Todo.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
    const todoctx = useContext(TodosContext);
    return (
        <ul className={Classes.todos}>
            {todoctx.items.map(todo => <TodoItem item={todo} onDeleteTodo={todoctx.onDeleteTodo.bind(null, todo.id)} />)}
        </ul>
    );
}

export default Todos;