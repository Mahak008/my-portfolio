import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hungry Box",
    description: "Project 2 description",
    image: "/images/projects/P1.png",
    tag: ["All", "MERN"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "University Complaint Management System",
    description: "Project 3 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Java"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pharmacy Management System",
    description: "Project 4 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Smart Calculator",
    description: "Authentication and CRUD operations",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project Management System",
    description: "Project 5 description",
    image: "/images/projects/P1.png",
    tag: ["All", "MERN"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <section id="pro">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
