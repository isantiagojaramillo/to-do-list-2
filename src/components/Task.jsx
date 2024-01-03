import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Task = ({task, toggleCompleted}) => {
    const [editingTask, changeEditingTask] = useState(false);
    const [newTask, changeNewTask] = useState(task.text);

    const handleSubmit = (event) => {
        event.preventDefault();
        changeEditingTask(false);
    }

    return (
        <li className='tasks-list__task'>
            <FontAwesomeIcon 
                icon={task.completed ? faCheckSquare : faSquare}
                className="tasks-list__icon tasks-list__icon-check"
                onClick={() => toggleCompleted(task.id)}
            />
            <div className='tasks-list__text'>
                {editingTask ?
                    <form action="" className='form-edit-task' onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className='form-edit-task__input'
                            value={newTask}
                            onChange={(event) => changeNewTask(event.target.value)}
                            />
                        <button
                            type='submit'
                            className='form-edit-task__btn'
                            >
                            Update
                        </button>
                    </form>
                : task.text
                }
            </div>
            <div className='.tasks-list__container-buttons'>
                <FontAwesomeIcon 
                    icon={faEdit}
                    className="tasks-list__icon tasks-list__icon-action"
                    onClick={() => changeEditingTask(!editingTask)}
                />
                <FontAwesomeIcon 
                    icon={faTimes}
                    className="tasks-list__icon tasks-list__icon-action" 
                />
            </div>
        </li>
    ); 
}
