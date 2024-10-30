import Nav from "../Nav/Nav";
import "./Projects.css";
import Project from "../Project/Project";

function Projects() {
    return (
        <section className="projects-container">
            <Nav />

            <section className="projects-content">
                <h1>Projects</h1>

                <ul className="projects-ul">
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                    <li>
                        <Project></Project>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default Projects;
