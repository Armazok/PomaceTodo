import {TaskType} from "../../ReducerProgramming/AppReducer";
import {v1} from "uuid";

export type DeleteTaskActionType = {
    type: "REMOVE-TASK",
    idTask: string
}


type IActionsType =
    DeleteTaskActionType


const initialState:TaskType[] = [
        {id: v1(), titleTask: "HTML", isDone: true},
        {id: v1(), titleTask: "CSS", isDone: true},
        {id: v1(), titleTask: "SCSS", isDone: true},
]


export const TaskReducer = (state: TaskType[] = initialState, action: IActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return [...state.filter(t => t.id !== action.idTask)]
        }
        default:
            return state;
    }
}



