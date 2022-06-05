import { FC } from 'react';
import { ICheckboxProps } from '../types';

const Checkbox: FC<ICheckboxProps> = ({ changeTaskStatus, task }) => {
  return (
    <label className="todo__list-label">
      <input
        onChange={() => changeTaskStatus(task.id)}
        checked={task.isDone}
        className="todo__list-checkbox"
        type="checkbox"
      />
      <span className="todo__checkbox-style"></span>
    </label>
  );
};

export default Checkbox;
