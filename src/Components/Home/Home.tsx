import Nav from "../Nav/Nav";
import "./Home.css";
import profilePic from "../../../public/default-profile-pic.svg";
import { SiteData } from "../../SiteData";

type HomeProps = {
    data: SiteData | null;
};

function Home({ data }: HomeProps) {
    let picUrl: string = profilePic;

    if (data != null) {
        picUrl = "../../../public/" + data.home["profile-pic"];
    }

    return data == null ? (
        <p>"Loading..."</p>
    ) : (
        <section id="home-container">
            <Nav />
            <section className="profile-section">
                <h1>Profile</h1>
                <hr />

                <section id="profile-body">
                    <img
                        id="profile-pic"
                        src={picUrl}
                        alt="Profile Image"
                        width={200}
                        height={200}
                    />
                    <section className="info-text">
                        <h2>{data.home.name}</h2>
                        <h3>{data.home.location}</h3>
                        <h4>{data.home["job-title"]}</h4>
                    </section>

                    <p className="latest-text">{data.home.description}</p>
                </section>
            </section>
        </section>
    );
}

export default Home;
