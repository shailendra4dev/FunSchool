import { NavLink } from 'react-router';
import logo from '../assets/fun-school.png';
function Header() {
  return (
    <header>
      <h2 className='logo'><img src={logo} alt="Fun School Logo" width={150} /></h2>
      <h1>Fun School</h1>      
      <p>Welcome to Anwita & Aariket's Fun School, where learning is fun!</p>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>Posts</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;