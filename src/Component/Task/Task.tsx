import React, {FC, memo} from 'react';
import {TaskType} from "../../ReducerProgramming/AppReducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Button} from "../Button/Button";

interface ITasks {
    tasks: TaskType

    deleteTask(idTask: string): void
}

export const Task: FC<ITasks> = memo(({
                                           tasks,
                                           deleteTask,
                                       }) => {
    const onClickDeleteTask = () => deleteTask(tasks.id)
    return (
        <>
            <li key={tasks.id}>
                <input type="checkbox" checked={tasks.isDone}/>
                <EditableSpan
                    titleTask={tasks.titleTask}
                />
                <Button
                    name={"X"}
                    callback={onClickDeleteTask}
                />
            </li>
        </>
    );
});
