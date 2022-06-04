import { FC } from 'react';
import { IListProps, ITask } from '../types';
import Task from './Task';

const List: FC<IListProps> = ({ selector, tasks, priority, deleteTask, changeTaskStatus }) => {
  return (
    <ul className={`todo__list ${selector}`}>
      {tasks &&
        tasks
          .filter((task: ITask) => task.priority === priority)
          .map((task: ITask) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
            />
          ))}
    </ul>
  );
};

export default List;
