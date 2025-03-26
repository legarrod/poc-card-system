import React, { useState } from 'react';
import { Task, SubTask, Objective, SubObjective } from '../../types';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface TaskTreeProps {
  tasks: Task[] | SubTask[] | Objective[];
  level?: number;
}

const TaskTree: React.FC<TaskTreeProps> = ({ tasks, level = 0 }) => {
  return (
    <div className="w-full space-y-2">
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

  const parsedPercent = parseFloat(task.percent || '0');
  const percentClass =
    parsedPercent < 50
      ? 'bg-red-500 text-white'
      : parsedPercent >= 51 && parsedPercent <= 80
      ? 'bg-yellow-500 text-black'
      : 'bg-green-500 text-white';

  return (
    <>
      {/* Cada nodo es un Card completo */}
      <div 
        className={`bg-white shadow-md rounded-lg p-4 w-[300px] md:w-[400px] ${
          level > 0 ? 'ml-8' : ''
        }`}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-1">
            <h3 className="text-sm font-semibold">{task.title}</h3>
            <h4 className="text-xs text-gray-700">{task.user}</h4>
            {task.description && (
              <p className="text-xs text-gray-600 line-clamp-2">
                {task.description}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end space-y-2">
            {task.percent && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${percentClass}`}
              >
                {task.percent}%
              </span>
            )}
            {(task.subTask || task.objetives || task.objetive) && (
              <button
                onClick={toggleChildren}
                className="bg-green-500 text-white w-6 h-6 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                {showChildren ? (
                  <AiOutlineUp size={12} />
                ) : (
                  <AiOutlineDown size={12} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Los hijos aparecen como Cards independientes debajo */}
      {showChildren && (
        <div className={`mt-2 ${level >= 0 ? 'ml-8' : ''}`}>
          {task.subTask && <TaskTree tasks={task.subTask} level={level + 1} />}
          {task.objetives && <TaskTree tasks={task.objetives} level={level + 1} />}
          {task.objetive && <TaskTree tasks={task.objetive} level={level + 1} />}
        </div>
      )}
    </>
  );
};

export default TaskTree;
