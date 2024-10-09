import { createBrowserRouter } from "react-router-dom";
import Blog from '../BlogPage/Blog';
import Profile from '../ProfilePage/Profile';


const router = createBrowserRouter([
    { path: '/', element: <Blog/> },
    { path: '/profile', element: <Profile/> }
    
])

export default router;