import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React, HTML, and CSS to showcase projects and skills.",
      techStack: "React, HTML, CSS"
    },
    {
      title: "LinguaBoost - Language Learning Platform",
      description: "An interactive, multi-page language learning website featuring engaging lessons, pricing plans, and user signup form.",
      techStack: "HTML, CSS Grid & Flexbox, CSS animations"
    },
    {
      title: "GuessMaster 1-10",
      description: "A fun web game where you guess a number between 1–10, track your score, and try to beat your high score.",
      techStack: "HTML, CSS, JavaScript"
    },
    {
      title: "Movie Finder",
      description: "A responsive web app to search and view movie details using the OMDB API.",
      techStack: "HTML, CSS, JavaScript, API"
    },
    {
      title: "Weather Finder",
      description: "Check real-time weather anywhere in seconds with Weather Finder.",
      techStack: "HTML, CSS, JavaScript, API"
    },
    {
      title: "CineSearch - Tailwind",
      description: "A responsive movie search web app using Tailwind CSS and JavaScript, fetching real-time data from the OMDb API.",
      techStack: "Tailwind CSS, JavaScript, API"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A two-player interactive game with win/draw detection, highlighted winning cells, and a dynamic scoreboard.",
      techStack: "React, CSS"
    },
    {
      title: "To-Do App",
      description: "A simple and responsive To-Do application featuring task add, edit, and delete functionality with local storage support.",
      techStack: "React, CSS, Local Storage"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
