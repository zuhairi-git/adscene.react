import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">

          <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="d-none"><Link to="/contact" className="getstarted">Get Started</Link></li>
            </ul>
            <button className="d-none navbar-toggler" type="button" data-toggle="collapse" data-target="/navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <i className="bi mobile-nav-toggle bi-list"></i>
          </nav>

        </div>
      </header>

      <Outlet />
    </>
  )
};

export default Header;