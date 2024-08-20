import { NavLink } from 'react-router-dom';
import './NavBar.css';  // Assuming you have some styles for NavBar

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
