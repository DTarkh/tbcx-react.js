import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
       <ul>
        <Link  className='nav-link' to='/'> <li>Contact</li></Link>
        <Link className='nav-link' to='/about'> <li >About</li></Link>
       </ul>

    </div>
  )
}

export default Navbar