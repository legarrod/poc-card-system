import React from 'react';

interface Project {
  title: string;
  user: string;
  percent: string;
  description: string;
}

interface ProjectDetailsProps {
  selectedProject: Project | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ selectedProject }) => {
  return (
    <div className='flex flex-col'>
    <h2 className='text-2xl text-center font-semibold'>Detalle</h2>
    <div className="bg-gray-100 w-full h-[300px] p-4 rounded-lg">
      {selectedProject ? (
        <div>
          <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
          <p className="text-sm text-gray-700">{selectedProject.user}</p>
          <p className="text-sm text-gray-700">{selectedProject.percent}</p>
          <p className="text-sm text-gray-600 mt-2">{selectedProject.description}</p>
        </div>
      ) : (
        <p className="text-gray-500">Selecciona un proyecto para ver más detalles.</p>
      )}
    </div>
    </div>
  );
};

export default ProjectDetails;
