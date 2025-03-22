const bdProjects = () =>{
return Array.from({ length: 10 }, (_, index) => {
  const projectId = index + 1;
  const randomTasksCount = Math.floor(Math.random() * 5) + 1;

  return {
    title: `Proyecto ${projectId}`,
    status: ['En progreso', 'Pendiente', 'Completado'][Math.floor(Math.random() * 3)],
    percent: `${Math.floor(Math.random() * 100)}%`,
    user: `Usuario ${projectId}`,
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ${projectId}`,
    tasks: Array.from({ length: randomTasksCount }, (_, taskIndex) => {
      const taskId = taskIndex + 1;
      const randomSubTasksCount = Math.floor(Math.random() * 3) + 1;

      return {
        title: `Tarea ${taskId}`,
        status: ['En progreso', 'Pendiente', 'Completado'][Math.floor(Math.random() * 3)],
        user: `Usuario Tarea ${taskId}`,
        description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ${taskId}`,
        subTask: Array.from({ length: randomSubTasksCount }, (_, subTaskIndex) => {
          const subTaskId = subTaskIndex + 1;

          return {
            title: `Subtarea ${subTaskId}`,
            status: ['En progreso', 'Pendiente', 'Completado'][Math.floor(Math.random() * 3)],
            user: `Usuario Subtarea ${subTaskId}`,
            description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ${subTaskId}`,
            objetives: Array.from({ length: 3 }, (_, objectiveIndex) => {
              const objectiveId = objectiveIndex + 1;

              return {
                title: `Objetivo ${objectiveId}`,
                status: ['En progreso', 'Pendiente', 'Completado'][Math.floor(Math.random() * 3)],
                user: `Usuario Objetivo ${objectiveId}`,
                description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ${objectiveId}`,
                objetive: Array.from({ length: 2 }, (_, subObjectiveIndex) => {
                  const subObjectiveId = subObjectiveIndex + 1;

                  return {
                    title: `Subobjetivo ${subObjectiveId}`,
                    status: ['En progreso', 'Pendiente', 'Completado'][Math.floor(Math.random() * 3)],
                    user: `Usuario Subobjetivo ${subObjectiveId}`,
                    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ${subObjectiveId}`,
                  };
                }),
              };
            }),
          };
        }),
      };
    }),
  };
});
}
  
  
 export default bdProjects;
