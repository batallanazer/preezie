import  { useState } from 'react'
import Todos from './Todos';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    function addTodo() {
        fetch('http://localhost:5000/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title })
        }).then(response => response.json())
        .then((data) => {
           setTodos(data);
           setTitle('');
        });
    }

    return (
        <>
            <h1>Todo List</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <Todos todos={ todos } setTodos={ setTodos }/>
        </>
    );
}

export default Todo