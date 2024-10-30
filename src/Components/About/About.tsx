import Nav from "../Nav/Nav";
import "./About.css";

function About() {
    return (
        <section className="about-page">
            <Nav />

            <section className="content-container">
                <section className="content">
                    <h1 className="page-header">About Me</h1>
                    <h2 className="update-date">Updated on: Oct. 30, 2024</h2>

                    <section className="working-on-status">
                        <h1>Currently Working On:</h1>
                        <p>Reading the Book: abc by def</p>
                        <p>Current project: abc</p>
                        <p>Last LeetCode Problem: abc</p>
                    </section>

                    <section className="certifications">
                        <h1>Certifications</h1>
                        <ul>
                            <li>AWS Cloud Practitioner</li>
                            <li>Meta Front End Developer</li>
                            <li>AWS Solutions Architect Prep</li>
                        </ul>
                    </section>

                    <section className="skill-set">
                        <h1>Skills:</h1>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Router</li>
                            <li>TypeScript</li>
                            <li>AWS</li>
                            <li>Java</li>
                        </ul>
                    </section>
                </section>

                <footer className="links">
                    <ul>
                        <li>
                            <a href="/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="/">GitHub</a>
                        </li>
                        <li>
                            <a href="">LeetCode</a>
                        </li>
                    </ul>
                </footer>
            </section>
        </section>
    );
}

export default About;
