import { SiteData } from "../../SiteData";
import Nav from "../Nav/Nav";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./About.css";
import Card from "../Card/Card";

type AboutProps = {
    data: SiteData | null;
};

function About({ data }: AboutProps) {
    return data == null ? (
        <p> No data loaded.</p>
    ) : (
        <section className="about-page">
            <Nav />

            <section className="content-container">
                <section className="content">
                    <h1 className="page-header">About Me</h1>
                    <h2 className="update-date">Updated on: {data.updated}</h2>

                    <section className="working-on-status">
                        <h1>Currently Working On:</h1>
                        <section className="current-project">
                            <ProjectCard
                                project={
                                    data["about-me"]["working-on"]["current-project"]
                                }
                            ></ProjectCard>
                        </section>

                        <section className="books">
                            <h1>Currently Reading:</h1>
                            <section className="currently-reading">
                                <Card
                                    card={data["about-me"]["working-on"]["current-book"]}
                                ></Card>
                            </section>

                            <h1>Books Read:</h1>
                            <ul className="finished-reading">
                                {data["about-me"]["working-on"]["past-read"].map(
                                    (book) => {
                                        return (
                                            <li key={book.header}>
                                                <Card card={book}></Card>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </section>
                    </section>

                    <section className="certifications">
                        <h1>Certifications</h1>
                        <ul className="certification-list">
                            {data["about-me"].certifications.map((cert) => {
                                return (
                                    <li key={cert.header}>
                                        <Card card={cert}></Card>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    <section className="skill-set">
                        <h1>Skills:</h1>
                        <ul>
                            {data["about-me"].skills.sort().map((skill) => {
                                return <li key={skill}>{skill}</li>;
                            })}
                        </ul>
                    </section>
                </section>

                <footer className="links">
                    <ul>
                        {data["about-me"].links.map((link) => {
                            return (
                                <li key={link.name}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </footer>
            </section>
        </section>
    );
}

export default About;
