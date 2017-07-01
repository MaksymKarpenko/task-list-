import { ADD_TASK } from '../constants';

const item = (action) => {
	return {
		text: action.text, 
		id: Math.random()
	}
}

const taskList = (state=[], action) => {
	let taskList = null;
	switch(action.type)	{
		case ADD_TASK:
			taskList = [...state, item(action)];
			console.log('task list as state', taskList);
			return taskList;
		default: 
			return state;
	}
}

export default taskList;