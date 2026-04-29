import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>

        {/* Link nou către pagina personală */}
      <NavLink to="/despre">Despre Mine</NavLink> 

      <NavLink to="/projects">Proiecte</NavLink>
      
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;