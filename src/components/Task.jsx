import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Task = ({task}) => {
  return (
    <li className='tasks-list__task'>
        <FontAwesomeIcon 
            icon={faCheckSquare}
            className="tasks-list__icon tasks-list__icon-check" 
        />
        <div className='tasks-list__text'>
            {task.text}
        </div>
        <div className='.tasks-list__container-buttons'>
            <FontAwesomeIcon 
                icon={faEdit}
                className="tasks-list__icon tasks-list__icon-action"  
            />
            <FontAwesomeIcon 
                icon={faTimes}
                className="tasks-list__icon tasks-list__icon-action" 
            />
        </div>
    </li>
  ); 
}
