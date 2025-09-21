function Resume() {
  return (
    <div className="home">
      <h1>My Resume</h1>
      <p>Click the button below to download my full resume.</p>
      <a href="/assets/Resume.pdf" download>
        <button>Download Resume</button>
      </a>

      <div className="resume-preview">
        <h2>Highlights</h2>
        <ul>
          <li>B.Tech CSE - 3rd Year</li>
          <li>Strong in DSA & Frontend Development</li>
          <li>Projects: Personal Portfolio, Web Apps</li>
          <li>Skills: C, Java, Python, HTML, CSS, JS, React</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
