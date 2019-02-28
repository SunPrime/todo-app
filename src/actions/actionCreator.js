import { ADD_TASK, REMOTE_TASK, COMPLETE_TASK, CHANGE_FILTER } from "../constants"

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const removeTask = id => ({
    type: REMOTE_TASK,
    id
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id
});

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter,
});