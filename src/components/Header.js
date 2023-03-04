import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <Link to="/" >
            <h1>Ecommerce App</h1>
          </Link>
  );
}

export default Header;
