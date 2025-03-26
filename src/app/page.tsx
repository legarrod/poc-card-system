'use client';
import React, { useEffect, useState } from 'react';
import bdProject from './BD';
import Card from './components/Card';
import ProjectDetails from './components/ProjectDetails';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { IProject } from './types'

interface Project {
  title: string;
  user: string;
  percent: string;
  description: string;
  tasks: any[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<IProject[]>();
  const onViewMore = (project: Project) => {
    setSelectedProject(project);
    if (window.innerWidth < 768) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=> {
    const generatedProjects = bdProject();
    setProjects(generatedProjects)
    },[])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-0 md:pl-20 lg:pl-20 transition-all duration-300">
        <main className="p-8 pb-20 gap-2 sm:p-5 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col items-center w-full md:w-1/2 p-3 space-y-4 overflow-y-auto">
            {projects?.map((project, index) => (
              <Card
                key={index}
                project={project}
                onViewMore={onViewMore}
                onAdd={() => {}}
              />
            ))}
          </div>

          <div className="hidden md:flex justify-center w-full md:w-1/2 p-3 sticky top-0 h-screen">
            <ProjectDetails selectedProject={selectedProject} />
          </div>
        </div>
        </main>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ProjectDetails selectedProject={selectedProject} />
        </Modal>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
