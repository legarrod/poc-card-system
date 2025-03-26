import React, { useState } from 'react';
import TaskTree from '../TaskTree';
import { IProject } from '../../types';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface CardProps {
  project: IProject;
  onViewMore: (project: IProject) => void;
  onAdd: () => void;
}

const Card: React.FC<CardProps> = ({ project, onViewMore, onAdd }) => {
  const { title, user, percent, tasks } = project;
  const [showTasks, setShowTasks] = useState(false);
  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  const parsedPercent = parseFloat(percent);
  const percentClass =
    parsedPercent < 50
      ? 'bg-red-500 text-white'
      : parsedPercent >= 51 && parsedPercent <= 80
      ? 'bg-yellow-500 text-black'
      : 'bg-green-500 text-white';

  return (
    <div className="relative"> 
      <div className="bg-white shadow-md rounded-lg p-6 mb-3 w-[300px] md:w-[400px] min-h-[100px]">
        {/* Contenido del Card principal */}
        <div className="flex justify-between items-start">
          {/* Columna izquierda: Título y botón "Ver más" */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-sm font-semibold">{title}</h2>
            <button
              onClick={() => onViewMore(project)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Ver más
            </button>
          </div>

          {/* Columna derecha: Usuario, porcentaje y botón "+" */}
          <div className="flex flex-col items-end space-y-2">
            <span className="text-gray-700 text-sm">{user}</span>
            <span
              className={`text-sm px-3 py-1 rounded-full ${percentClass}`}
              suppressHydrationWarning
            >
              {percent}
            </span>
            <button
              onClick={toggleTasks}
              className="bg-green-500 text-white w-10 h-10 p-3 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              {showTasks ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>
          </div>
        </div>
      </div>
      {/* Mostrar tareas si showTasks es true */}
      {showTasks && (
          <div className="ml-8 mt-2">
            <TaskTree tasks={tasks} level={0} />
          </div>
      )}
    </div>
  );
};

export default Card;