// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link href="#page-top">
          <a className="navbar-brand">
            <img src="/src/assets/img/navbar-logo.svg" alt="..." />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link href="#services">
                <a className="nav-link">Services</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#portfolio">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#team">
                <a className="nav-link">Team</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
