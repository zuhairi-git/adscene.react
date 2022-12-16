import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

          <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

          <nav id="navbar" class="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="d-none"><Link to="/contact" class="getstarted">Get Started</Link></li>
            </ul>
            <button className="d-none navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <i class="bi mobile-nav-toggle bi-list"></i>
          </nav>

        </div>
      </header>

      <Outlet />
    </>
  )
};

export default Header;