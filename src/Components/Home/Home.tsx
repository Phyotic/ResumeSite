import Nav from "../Nav/Nav";
import "./Home.css";
import profilePic from "../../../public/profile-pic.jpg";

function Home() {
    return (
        <section id="home-container">
            <Nav />
            <section className="profile-section">
                <h1>Profile</h1>
                <hr />

                <section id="profile-body">
                    <img
                        id="profile-pic"
                        src={profilePic}
                        alt="Profile Image"
                        width={200}
                        height={200}
                    />
                    <section className="info-text">
                        <h2>Daniel Solorzano</h2>
                        <h3>Chicago, Illinois</h3>
                        <h4>Future Software Engineer</h4>
                    </section>

                    <p className="latest-text">
                        Graduated with a bachelor's in Computer Science. I'm a lifelong
                        student with a deep passion for all things computer science. My
                        personal goal is to become a full-stack developer with some strong
                        cloud expertise. Right now, I'm focused on advancing my front-end
                        skills by building websites and incorporating new technologies
                        into each project—like using React Router to enhance this very
                        site! I'm also currently preparing for the AWS Solutions Architect
                        exam to strengthen my cloud knowledge.
                    </p>
                </section>
            </section>
        </section>
    );
}

export default Home;
