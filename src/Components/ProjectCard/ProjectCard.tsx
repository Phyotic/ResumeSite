import "./ProjectCard.css";
import { Project } from "../../SiteData";

type ProjectProps = {
    project: Project;
};

function ProjectCard({ project: Project }: ProjectProps) {
    return (
        <section className="card">
            <section className="card-img-container">
                <img
                    className="card-img"
                    src={"../../../public/" + Project.image}
                    alt={Project.name}
                ></img>
            </section>

            <section className="card-bottom">
                <h1>{Project.name}</h1>

                <section className="tech-used">
                    {Project["tech-used"].sort().map((tech) => {
                        return (
                            <p key={tech} className="project-tech">
                                {tech}
                            </p>
                        );
                    })}
                </section>
                <p>{Project.description}</p>
                <section className="project-links">
                    {Project["github-url"].length > 0 && (
                        <a className="project-link" href={Project["github-url"]}>
                            <img
                                className="project-link-img"
                                src="../../../public/github-icon.svg"
                            ></img>
                        </a>
                    )}

                    {Project["site-url"].length > 0 && (
                        <a className="project-link" href={Project["site-url"]}>
                            <img
                                className="project-link-img"
                                src="../../../public/website-icon.svg"
                            ></img>
                        </a>
                    )}
                </section>
            </section>
        </section>
    );
}

export default ProjectCard;
