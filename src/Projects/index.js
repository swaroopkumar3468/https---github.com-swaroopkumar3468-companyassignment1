// Projects.js
import React, { useState } from 'react';
import './index.css';

const Projects = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    if (projectName.trim() === '' || projectDescription.trim() === '') {
      alert('Please enter both project name and description.');
      return;
    }

    const newProject = { name: projectName, description: projectDescription };
    setProjects([...projects, newProject]);
    setProjectName('');
    setProjectDescription('');
  };

  return (
    <section id="projects">
      <div id="add-project-form">
        <div className="input-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            placeholder="Enter project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            placeholder="Enter project description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          ></textarea>
        </div>

        <button onClick={addProject}>Add Project</button>
      </div>

      <div id="projects-view">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
