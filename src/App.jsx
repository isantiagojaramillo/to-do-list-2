import React, {useState} from 'react';
import './App.css';
import { Header } from './components/Header';
import { FormTasks } from './components/FormTasks';
import { TaskList } from './components/TaskList';

const App = () => {
  const [tasks, changeTasks] = useState(
    [
      {
        id: 1,
        text: 'Wash the Dishes',
        completed: false
      },
      {
        id: 2,
        text: 'Take the trash out',
        completed: false
      }
    ]
  );

  console.log(tasks);

  return (
    <div className='container'>
      <Header />
      <FormTasks tasks={tasks} changeTasks={changeTasks} />
      <TaskList tasks={tasks} changeTasks={changeTasks} />
    </div>
  ); 
}

export default App;
