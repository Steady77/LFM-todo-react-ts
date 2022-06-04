import { ChangeEvent, FC, useState } from 'react';
import { ICheckboxProps } from '../types';

const Checkbox: FC<ICheckboxProps> = ({ changeTaskStatus, task }) => {
  const [checked, setChecked] = useState(false);

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    changeTaskStatus(task.id);
  };

  return (
    <label className="todo__list-label">
      <input
        onChange={onChangeCheckbox}
        checked={checked}
        className="todo__list-checkbox"
        type="checkbox"
      />
      <span className="todo__checkbox-style"></span>
    </label>
  );
};

export default Checkbox;
