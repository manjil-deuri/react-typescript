import React, { useState } from 'react';
import Todo from '../models/Todo';

type TodosContextObj = {
    items: Todo[],
    onAddTodo: (text: string) => void,
    onDeleteTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    onAddTodo: (text: string) => { },
    onDeleteTodo: (id: string) => { }
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoItem = (todoText: string) => {
        const todo = new Todo(todoText);
        setTodos((prevTodos) =>
            prevTodos.concat(todo)
        );
    };

    const deleteTodoItem = (todoKey: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(prevTodoItem =>
                prevTodoItem.id !== todoKey
            )
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        onAddTodo: addTodoItem,
        onDeleteTodo: deleteTodoItem
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
};

export default TodosContextProvider;