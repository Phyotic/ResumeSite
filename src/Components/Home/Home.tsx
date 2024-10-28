import Nav from "../Nav/Nav";
import "./Home.css";

function Home() {
    return (
        <section id="home-container">
            <Nav />
            <section className="profile-section">
                <h1>Profile</h1>
                <h2>Some Quick Info</h2>
                <hr />

                <section id="profile-body">
                    <img src="" alt="Profile Image" width={300} height={300} />
                    <p className="info-text">
                        INFORMATION: (About Me) - Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Odio aspernatur neque nobis incidunt excepturi
                        reiciendis nesciunt, repellat modi veniam consectetur
                        exercitationem, iste soluta atque repudiandae nihil tempore culpa
                        alias officia?
                    </p>

                    <p className="latest-text">
                        LATEST: (Name, Age, Location) Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Libero, et. Distinctio unde natus
                        alias, eos sequi deleniti officia facilis hic dolore voluptatum
                        exercitationem est quasi numquam ratione, fugit culpa commodi.
                    </p>
                </section>
            </section>
        </section>
    );
}

export default Home;
