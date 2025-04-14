import { Link } from "react-router-dom";
import logo from './pawlogo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Логотип" style={{height: "50px"}}/>
      </div>
      <ul>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/about">Про нас</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;