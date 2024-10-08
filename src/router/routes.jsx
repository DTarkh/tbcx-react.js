import { createBrowserRouter } from "react-router-dom";
import Contact from "../ContactPage/Contact";
import About from "../AboutPage/About";


const router = createBrowserRouter([
    { path: '/', element: <Contact/> },
    { path: '/about', element: <About/> },
])

export default router;