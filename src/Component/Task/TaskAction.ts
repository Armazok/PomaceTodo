import {DeleteTaskActionType} from "./TaskReducer";

export const deleteTaskAC = (idTask: string):DeleteTaskActionType => {
    return {type: "REMOVE-TASK", idTask}
}