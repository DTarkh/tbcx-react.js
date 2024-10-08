import { createBrowserRouter } from "react-router-dom";
import Contact from "../ContactPage/Contact";


const router = createBrowserRouter([
    { path: '/', element: <Contact/> },
])

export default router;