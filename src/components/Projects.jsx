import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Goals Before 2026 Ends",
      description:
        "A goal management web app designed to help users set, organize, and track their goals with CRUD functionality, dynamic progress tracking, completion status updates, and persistent data storage using localStorage.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/saanvi-saxena/JavaScript/tree/main/docs",
      live: "https://goal-tracker-eight-psi.vercel.app/",
    },

    {
      title: "Amazon Styled Shopping Website Clone",
      description:
        "A frontend recreation of an Amazon-style shopping interface built to practice HTML structure, CSS layouts, and responsive design.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/saanvi-saxena/ShoppingWebsite-Clone",
      live: "https://amazon-styled-clone.vercel.app/",
    },

    {
      title: "Tic Tac Toe",
      description:
        "A simple interactive game built with JavaScript to practice DOM manipulation, event handling, game logic, and win detection.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saanvi-saxena/JavaScript/tree/main/tic-tac-toe",
      live: "https://tic-tac-toe-seven-sage.vercel.app/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <p className="section-label">MY WORK</p>

          <h2>
            Projects I've <span>Built</span>
          </h2>

          <p className="section-description">
            A collection of projects where I turn ideas into working
            applications while continuously improving my development skills.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card glass" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo ↗
                  </a>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;