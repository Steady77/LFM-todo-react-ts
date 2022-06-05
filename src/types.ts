import { Dispatch, SetStateAction } from 'react';

type DeleteTaskType = (id: number) => void;
type ChangeTaskStatusType = (id: number) => void;

export interface ITask {
  id: number;
  text: string;
  status: string;
  priority: string;
}

export interface IListProps {
  selector: string;
  tasks: ITask[];
  priority: string;
  deleteTask: DeleteTaskType;
  changeTaskStatus: ChangeTaskStatusType;
}

export interface ICheckboxProps {
  task: ITask;
  changeTaskStatus: ChangeTaskStatusType;
}

export interface ITaskProps {
  task: ITask;
  deleteTask: DeleteTaskType;
  changeTaskStatus: ChangeTaskStatusType;
}

export interface IHeaderProps {
  title: string;
  selector: string;
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  priority: string;
  tasks: ITask[];
}
