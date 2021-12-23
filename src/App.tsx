import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.module";

const App: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [...prevTodos,
            {id:new Date().toISOString(), text: text}]
        );
    }

    const todoDeleteHandler = (id:string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo=> todo.id !== id);
        });
    }

    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    );
}

export default App;
