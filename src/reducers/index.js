import { ADD_TASK } from '../constants';

const reminder = (action) => {
	return {
		text: action.text, 
		id: Math.random()
	}
}

const reminders = (state=[], action) => {
	let reminders = null;
	switch(action.type)	{
		case ADD_REMINDER:
			reminders = [...state, reminder(action)];
			console.log('task list as state', taskList);
			return reminders;
		default: 
			return state;
	}
}

export default reminders;