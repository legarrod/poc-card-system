export interface SubObjective {
    title: string;
    status: string;
    user: string;
    description: string;
  }
  
  export interface Objective {
    title: string;
    status: string;
    user: string;
    description: string;
    objetive: SubObjective[];
  }
  
  export interface SubTask {
    title: string;
    status: string;
    user: string;
    description: string;
    objetives: Objective[];
  }
  
  export interface Task {
    title: string;
    status: string;
    user: string;
    description: string;
    subTask: SubTask[];
  }
  
  export interface IProject {
    title: string;
    status: string;
    percent: string;
    user: string;
    description: string;
    tasks: Task[];
  }

  