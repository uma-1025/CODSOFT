import SkillCard from './SkillCard';
import cLogo from './assets/cLogo.png';
import javaLogo from './assets/javaLogo.png';
import pythonLogo from './assets/pythonLogo.png';
import sqlLogo from './assets/sqlLogo.png';
import jsLogo from './assets/jsLogo.png';
import htmlLogo from './assets/htmlLogo.png';
import cssLogo from './assets/cssLogo.png';
import reactLogo from './assets/reactLogo.png';
import tailwindLogo from './assets/tailwindLogo.png';
import gitLogo from './assets/gitLogo.png';
import githubLogo from './assets/githubLogo.png';
import vscodeLogo from './assets/vscodeLogo.png';

function Skills() {
  const skills = [
    { title: "C", description: "Programming Language", logo: cLogo },
    { title: "Java", description: "Object-Oriented Language", logo: javaLogo },
    { title: "Python", description: "High-Level Language", logo: pythonLogo },
    { title: "SQL", description: "Database Queries", logo: sqlLogo },
    { title: "JavaScript", description: "Frontend & Logic", logo: jsLogo },
    { title: "HTML", description: "Markup Language", logo: htmlLogo },
    { title: "CSS", description: "Styling Webpages", logo: cssLogo },
    { title: "React", description: "Frontend Library", logo: reactLogo },
    { title: "Tailwind CSS", description: "Utility-First CSS", logo: tailwindLogo },
    { title: "Git", description: "Version Control", logo: gitLogo },
    { title: "GitHub", description: "Code Hosting", logo: githubLogo },
    { title: "VS Code", description: "IDE/Code Editor", logo: vscodeLogo },
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
