import React from 'react';
import Todo from '../models/Todo';
import Classes from '../components/TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo, onDeleteTodo: () => void }> = (props) => {
    return (
        <li className={Classes.item} onClick={props.onDeleteTodo} key={props.item.id}> {props.item.text}</li>
    );
}

export default TodoItem;