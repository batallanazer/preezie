import { useEffect } from "react";

function Todos( { todos, setTodos }) {

    function fetchTodos() {
        fetch('http://localhost:5000/api/todo')
            .then(response => response.json())
            .then(data => setTodos(data));
    }

    useEffect(() => {
        fetchTodos();
    }, []);
    
    function toggleTodo(id: number) {
        fetch(`http://localhost:5000/api/todo/${id}`, {
            method: 'PUT'
        }).then(response => response.json()).then((data) => {
            setTodos(data);
        });
    }

    function deleteTodo(id: number) {
        fetch('http://localhost:5000/api/todo', {
            method: 'DELETE',
            body: id
        }).then(response => response.json()).then((data) => {
            setTodos(data);
        });
    }
  return (
    <ul>
        {todos && todos.map(todo => (
            <li key={todo.id}>
                <span
                    style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none'
                    }}
                >
                    {todo.title}
                </span>
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}

export default Todos