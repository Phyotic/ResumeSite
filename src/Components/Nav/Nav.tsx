import { Link } from "react-router-dom";
import "./Nav.css";

function Home() {
    return (
        <nav className="nav-menu">
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <Link to={"/projects"}>
                    <li>Projects</li>
                </Link>
                <Link to={"/about"}>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Home;
