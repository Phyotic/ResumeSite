import { Link } from "react-router-dom";
import "./Nav.css";

function Home() {
    return (
        <nav className="nav-menu">
            <ul>
                <Link to={"/"} className="rr-link">
                    <li>Home</li>
                </Link>
                <Link to={"/projects"} className="rr-link">
                    <li>Projects</li>
                </Link>
                <Link to={"/about"} className="rr-link">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Home;
