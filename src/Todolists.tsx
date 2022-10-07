import React, {FC, memo} from 'react';
import {TaskType} from "./ReducerProgramming/AppReducer"
import {Task} from "./Component/Task/Task";
import {Button} from "./Component/Button/Button";
import {AddItemForm} from "./Component/AddItemForm/AddItemForm";
import {EditableSpan} from "./Component/EditableSpan/EditableSpan";
import _ from "lodash";

interface ITodolist {
    tasks: TaskType[]
    titleTodolists: string

    deleteTask(idTask: string): void
}

export const Todolist: FC<ITodolist> = memo(({
                                                 titleTodolists,
                                                 tasks,
                                                 deleteTask,
                                             }) => {
    return (
        <div>
                <h3>
                    <EditableSpan titleTodolists={titleTodolists}/>
                </h3>

                <div>
                   <AddItemForm/>
                </div>

                <ul>
                  {/*  {
                        _.map([tasks], function (t:TaskType) {
                          return (
                            <Task
                                tasks={t}
                                deleteTask={deleteTask}
                            />
                        )
                        })
                    }*/}

                    {
                        tasks.map((t) =>
                            <Task
                                tasks={t}
                                deleteTask={deleteTask}
                            />
                        )
                    }
                </ul>

                <div>
                   <Button name={"All"}/>
                   <Button name={"Active"}/>
                   <Button name={"Completed"}/>
                </div>

        </div>
    );
});
