"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Mahak008/my-portfolio",
    previewUrl: "https://mahakgarg.vercel.app/",
  },
  {
    id: 2,
    title: "Hungry Box",
    description: "Project 2 description",
    image: "/images/projects/HungryBox.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Mahak008/HungryBox",
    previewUrl: "https://hungrybox-frontend.onrender.com/",
  },
  {
    id: 3,
    title: "Complaint Resolution System",
    description: "Project 3 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/Mahak008/IGDTUW-Complaint-Resolution-System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pharmacy Management System",
    description: "Project 4 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Mahak008/Pharmacy-Management-System",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Smart Calculator",
    description: "Project 5 description",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/Mahak008/Smart-Calculator",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project Management System",
    description: "Project 6 description",
    image: "/images/projects/ProjectManagement.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Mahak008/Project-Management-System",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-2 md:gap-12 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
