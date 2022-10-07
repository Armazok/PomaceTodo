import React, {useReducer} from 'react';
import '../App.css';
import {Todolist} from "../Todolists";
import {v1} from "uuid";
import {TaskReducer} from "../Component/Task/TaskReducer";
import {deleteTaskAC} from "../Component/Task/TaskAction";

export type TaskType = {
    id: string
    titleTask: string
    isDone: boolean
}

function AppReducer() {
    const [tasks, dispatchToTask] = useReducer(TaskReducer,[
        {id: v1(), titleTask: "У тебя", isDone: true},
        {id: v1(), titleTask: "Всё", isDone: true},
        {id: v1(), titleTask: "Получилось", isDone: true},
        {id: v1(), titleTask: "true", isDone: false}
    ])

    function deleteTask(idTask: string) {
       dispatchToTask(deleteTaskAC(idTask))
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

export default AppReducer;
