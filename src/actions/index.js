import { ADD_TASK } from '../constants';

export const addTask = (text) => {
	const action ={
		type: ADD_TASK,
		text
	}
	console.log('action in addTask', action);
	return action;
}