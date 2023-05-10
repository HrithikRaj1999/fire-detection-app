import "../CSS/MyNavbar.css";
import { Link } from "react-router-dom";
export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/'>
          <img
            id="logo"
            src="\fire.png"
            alt=""
            class="d-inline-block align-text-top"
          />
        </Link>
        <Link className="navbar-brand" to="/">
        
          Smoke & Fire Detection
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"> Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"> About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link"> Sign in</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup"className="nav-link"> Sign Up</Link>
            </li>
            <li className='nav-item'>
              <Link to="/UseApp" className="nav-link"> Use App</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
