import { FC } from 'react';
import { STATUS } from '../utils/consts';
import { ITaskProps } from '../types';
import Checkbox from './Checkbox';

const Task: FC<ITaskProps> = ({ task, deleteTask, changeTaskStatus }) => {
  return (
    <li
      className={`todo__list-item ${task.status === STATUS.DONE ? 'todo__list-item--done' : ''} `}
    >
      <Checkbox task={task} changeTaskStatus={changeTaskStatus} />
      <p className="todo__item-text">{task.text}</p>
      <button onClick={() => deleteTask(task.id)} className="todo__list-closebtn"></button>
    </li>
  );
};

export default Task;
