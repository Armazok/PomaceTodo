import React  from 'react';
import '../App.css';
import {Todolist} from "../Todolists";
import {deleteTaskAC} from "../Component/Task/TaskAction";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./ReduxState/AppReduxStore";
import {AddItemForm} from "../Component/AddItemForm/AddItemForm";

export type TaskType = {
    id: string
    titleTask: string
    isDone: boolean
}

function AppRedux() {
    const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks);
    const dispatch = useDispatch();

    function deleteTask(idTask: string) {
        dispatch(deleteTaskAC(idTask))
    }


    return (
        <div className="App">
            <AddItemForm/>
            <Todolist
                titleTodolists={"Hey"}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default AppRedux;
