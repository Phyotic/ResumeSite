import "./Project.css";

import testImage from "../../../public/profile-pic.jpg";

function Project() {
    return (
        <section className="card">
            <section className="card-img-container">
                <img className="card-img" src={testImage} alt="project name"></img>
            </section>

            <section className="card-bottom">
                <h1>PROJECT TITLE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
                    labore repellendus earum facere maxime perspiciatis nihil eius
                    recusandae ex eligendi sunt, natus incidunt praesentium molestiae
                    doloremque maiores sit, optio officiis!
                </p>
                <a href="/">LINK TO PROJECT SITE</a>
            </section>
        </section>
    );
}

export default Project;
