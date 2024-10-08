import { createBrowserRouter } from "react-router-dom";
import Contact from "../ContactPage/Contact";
import About from "../AboutPage/About";
import Assignment3 from "../AssignPage/Assignment3";


const router = createBrowserRouter([
    { path: '/', element: <Contact/> },
    { path: '/about', element: <About/> },
    { path: 'assignment3', element: <Assignment3/>}
])

export default router;