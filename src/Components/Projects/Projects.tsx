import Nav from "../Nav/Nav";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SiteData, Project as ProjectData } from "../../SiteData";

type ProjectProps = {
    data: SiteData | null;
};

function Projects({ data }: ProjectProps) {
    let projectList: ProjectData[] = [
        {
            name: "Error",
            description: "No projects found",
            image: "",
            "github-url": "/",
            "site-url": "/",
            "tech-used": [],
        },
    ];

    if (data != null) {
        projectList = data.projects;
    }

    return (
        <section className="projects-container">
            <Nav />

            <section className="projects-content">
                <h1>Projects</h1>

                <ul className="projects-ul">
                    {projectList.map((project) => {
                        return (
                            <li key={project.name}>
                                <ProjectCard project={project}></ProjectCard>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </section>
    );
}

export default Projects;
