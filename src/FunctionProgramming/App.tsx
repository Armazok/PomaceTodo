import React, {useState} from 'react';
import './App.css';
import {Todolist} from "../Todolists";
import {v1} from "uuid";

export type TaskType = {
    id: string
    titleTask: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), titleTask: "У тебя", isDone: true},
        {id: v1(), titleTask: "Всё", isDone: true},
        {id: v1(), titleTask: "Получится", isDone: true},
        {id: v1(), titleTask: "ФОЛС", isDone: false}
    ])

    function deleteTask(idTask: string) {
        setTasks(tasks.filter(t => t.id !== idTask))
    }


    return (
        <div className="App">
            <Todolist
                titleTodolists={"Hey"}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
