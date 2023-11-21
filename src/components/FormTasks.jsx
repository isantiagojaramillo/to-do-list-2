import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const FormTasks = ({tasks, changeTasks}) => {

    const [inputTask, changeInputTask] = useState('');

    const handleInput = (event) => {
        changeInputTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        changeTasks(
            [
                ...tasks,
                {
                    id: uuidv4(),
                    text: inputTask,
                    completed: false
                }
            ]
        );
    }

  return (
    <form action="" className='form-tasks' onSubmit={handleSubmit}>
        <input 
            type="text" 
            className='form-tasks__input'
            placeholder='Type a task...'
            value={inputTask}
            onChange={(event) => handleInput(event)}
        />
        <button
            type='submit'
            className='form-tasks__btn'

        > 
            <FontAwesomeIcon 
                icon={faPlusSquare} 
                className='form-tasks__icon-btn' 
            />
        </button>
    </form>
  )
}
