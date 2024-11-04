import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiteData } from "./SiteData";

function App() {
    const [data, setData] = useState<SiteData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data.json");
                setData(response.data);
            } catch (error) {
                console.error("Couldn't fetch data: ", error);
            }
        };

        fetchData();
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home data={data} />,
            errorElement: <Error />,
        },
        {
            path: "/projects",
            element: <Projects data={data} />,
        },
        {
            path: "/about",
            element: <About data={data} />,
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
