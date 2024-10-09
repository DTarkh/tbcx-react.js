import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {



  return (
    <div className='nav-container'>
       <ul>
        <Link  className='nav-link' to='/'> <li>Blog</li></Link>
        <Link className='nav-link' to='/profile'> <li >Profile</li></Link>
       </ul>

    </div>
  )
}

export default Navbar