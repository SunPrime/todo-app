import { ADD_TASK, REMOTE_TASK, COMPLETE_TASK } from "../constants"
import { load } from 'redux-localstorage-simple'

let TASKS = load({ namespace: 'todo-list'});

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length){
    TASKS = {
        tasks: [],
    }
}

/*
const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    }
];
*/

//короткая запись
const tasks = (state =TASKS.tasks, {id, text, isCompleted, type }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ];
        case REMOTE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if(task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
};

//подробная запись
// const tasks = (state =[], action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return [
//                 ...state, {
//                 id: action.id,
//                 text: action.text,
//                 isCompleted: action.isCompleted
//                 }
//             ];
//         default:
//             return state;
//     }
// };

export default tasks;