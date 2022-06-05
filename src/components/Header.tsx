import { FC, FormEvent, useState } from 'react';
import { IHeaderProps } from '../types';

const Header: FC<IHeaderProps> = ({ title, selector, setTasks, priority, tasks, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, isDone: false, priority }]);
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
          placeholder={placeholder}
        />
        <button className="todo__add-btn"></button>
      </form>
    </>
  );
};

export default Header;
