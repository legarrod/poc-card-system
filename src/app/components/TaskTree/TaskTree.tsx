import React, { useState } from 'react';
import { Task, SubTask, Objective, SubObjective } from '../../types';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface TaskTreeProps {
  tasks: Task[] | SubTask[] | Objective[];
  level?: number;
}

const TaskTree: React.FC<TaskTreeProps> = ({ tasks, level = 0 }) => {
  return (
    <div className="w-full">
      {tasks.map((task, index) => (
        <TaskNode key={index} task={task} level={level} />
      ))}
    </div>
  );
};

const TaskNode: React.FC<{ task: any; level: number }> = ({ task, level }) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="mt-2" style={{ marginLeft: `${level * 20}px` }}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium">{task.title}</h3>
          <h4 className="text-sm font-medium">{task.user}</h4>
          <p className="text-xs text-gray-600">{task.description}</p>
        </div>
        {(task.subTask || task.objetives || task.objetive) && (
          <button
            onClick={toggleChildren}
            className="bg-green-500 text-white w-8 h-8 p-3 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center"
          >
            {showChildren ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        )}
      </div>

      {/* Mostrar hijos si showChildren es true */}
      {showChildren && (
        <div className="mt-2">
          {task.subTask && <TaskTree tasks={task.subTask} level={level + 1} />}
          {task.objetives && <TaskTree tasks={task.objetives} level={level + 1} />}
          {task.objetive && <TaskTree tasks={task.objetive} level={level + 1} />}
        </div>
      )}
    </div>
  );
};

export default TaskTree;
