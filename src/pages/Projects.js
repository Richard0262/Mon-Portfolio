import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Mes Projets</h1>

      <div className="project-cards">
        <div className="card">
          <h3>Projet 1</h3>
          <p>Description rapide du projet.</p>
        </div>

        <div className="card">
          <h3>Projet 2</h3>
          <p>Description rapide du projet.</p>
        </div>

        <div className="card">
          <h3>Projet 3</h3>
          <p>Description rapide du projet.</p>
        </div>
      </div>
    </section>
  );
}
