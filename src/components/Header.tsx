import { FC, FormEvent, useState } from 'react';
import { IHeaderProps } from '../types';
import { STATUS } from '../utils/consts';

const Header: FC<IHeaderProps> = ({ title, selector, setTasks, priority, tasks }) => {
  const [inputValue, setInputValue] = useState('');

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, status: STATUS.TO_DO, priority }]);
    setInputValue('');
  };

  return (
    <>
      <h1 className="todo__title">{title}</h1>
      <form onSubmit={addTask} className={`todo__add ${selector}`}>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          className="todo__add-input"
          type="text"
          placeholder="Добавить важных дел..."
        />
        <button className="todo__add-btn"></button>
      </form>
    </>
  );
};

export default Header;
