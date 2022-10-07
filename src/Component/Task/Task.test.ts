import {TaskType} from "../../ReducerProgramming/AppReducer";
import {TaskReducer} from "./TaskReducer";
import {deleteTaskAC} from "./TaskAction";

let startState: TaskType[] = [];
beforeEach(() => {
    startState = [
        {id: "1", titleTask: "CSS", isDone: false},
        {id: "2", titleTask: "HTML", isDone: false},
        {id: "3", titleTask: "Redux", isDone: true}
    ]
});

describe('<Task />', () => {
    test('REMOVE-TASK', () => {
        const endState = TaskReducer(startState, deleteTaskAC("1"))

        expect(endState.length).toBe(2)
        expect(endState[0].id).not.toBe('1')
    });
});