import React from 'react';
import { Task } from './Task';

export const TaskList = ({tasks, changeTasks}) => {
  const toggleCompleted = (id) => {

  }

  return (
    <ul className='tasks-list'>
        {tasks.length > 0 ? tasks.map((task) => {
					return <Task 
                    key={task.id} 
                    task={task}
                    toggleCompleted = {toggleCompleted}
                  />
        })
        :<div className='tasks-list__message'>No Tasks Added</div>
        }
    </ul>
  ); 
}
 