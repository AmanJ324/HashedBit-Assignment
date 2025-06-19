import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

export default function Todo() {

    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("")

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        }
        )
        setNewTodo("")
    }

    let updateTaskValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id)) //mtlb delete hone waale todo ki id se match nhi honi chaiye dusre todo ki id aisa duplicate array bnakr do filter bhai
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                }
            }))

        )
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo => {
                if (todo.id == id) {
                    return {
                        ...todo, task: todo.task.toUpperCase()
                    }
                }
                else {
                    return todo;
                }

            }))

        )


    }

    let MarkAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo => {
                return {
                    ...todo, isDone: true
                }
            }))

        )
    }

    let MarkOneDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo => {
                if (todo.id == id) {
                    return {
                        ...todo, isDone: true
                    }
                }
                else {
                    return todo;
                }

            }))

        )

    }


    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter your task" value={newTodo} onChange={updateTaskValue} />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br />
            <hr />

            <h4>Tasks</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            
                            
                            &nbsp;&nbsp;
                            <button onClick={() => MarkOneDone(todo.id)}>Mark as done</button>
                        </li>
                    })
                }
            </ul>
            <br /><br />
            <button onClick={MarkAllDone}>
                Mark as Done All
            </button>

        </div >
    )

}