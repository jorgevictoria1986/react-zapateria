import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';


const NavBar = () => {
    return(
        <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Calzados Silvia</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/category/1" className="nav-link active" aria-current="page" href="#">Caballeros</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/2" className="nav-link" href="#">Damas</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/3" className="nav-link" href="#">Niños</Link>
        </li>
      </ul>
    </div>
  </div>
 
<CartWidget />

</nav>

</div>
    );
}

export default NavBar;