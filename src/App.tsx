import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ITask } from './types';
import { PRIORITY, STATUS } from './utils/consts';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    const tasksCopy = [...tasks].filter((task) => task.id !== id);
    setTasks(tasksCopy);
  };

  const changeTaskStatus = (id: number) => {
    const tasksCopy: ITask[] = [...tasks];
    const findedTask: ITask | undefined = tasksCopy.find((task) => task.id === id);

    if (findedTask) {
      findedTask.status =
        findedTask.status === STATUS.DONE
          ? (findedTask.status = STATUS.TO_DO)
          : (findedTask.status = STATUS.DONE);

      setTasks(tasksCopy);
    }
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="todo__top">
          <Header
            title="HIGH"
            selector="todo__add-high"
            setTasks={setTasks}
            priority={PRIORITY.HIGH}
            tasks={tasks}
          />
          <List
            tasks={tasks}
            selector="todo__list-high"
            priority={PRIORITY.HIGH}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
          />
        </div>
        <div className="todo__bottom">
          <Header
            title="LOW"
            selector="todo__add-low"
            setTasks={setTasks}
            priority={PRIORITY.LOW}
            tasks={tasks}
          />
          <List
            tasks={tasks}
            selector="todo__list-low"
            priority={PRIORITY.LOW}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
