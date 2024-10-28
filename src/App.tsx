import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
        },
        {
            path: "/projects",
            element: <Projects />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
