import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div id="nav">
      <span className="nav-button">
        <Link to="/">Home</Link>
      </span>

      <span className="nav-button">
        <Link to="/project">Project</Link>
      </span>
    </div>
  );
};

export default Navbar;
