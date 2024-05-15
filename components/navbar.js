// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link href="/" className="navbar-brand">

          <img src="/src/assets/img/navbar-logo.svg" alt="..." />

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
              <Link href="/#services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#team" className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
