import React from "react";
import HomeContent from "./HomeContent";
import Grid from '@mui/material/Grid';
import Masonry from 'react-masonry-css';

function Home() {
  const { hero, about, services, productBenefits } = HomeContent;

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                <div className="container">
                  <img src={hero.logoImage} alt="Logo" style={{ width: '256px', marginBottom: '20px' }} />
                  <h2 className="animate__animated animate__fadeInDown">{hero.title}</h2>
                  <p className="animate__animated animate__fadeInUp">{hero.subtitle}</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">{hero.buttonText}</a>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </section>
      {/* End Hero */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">

          <div className="row content">
            <div className="col-lg-12">
              <h2 className="text-center main-header">{about.title}</h2>
              <h3 className="text-center p-3">{about.subtitle}</h3>
            </div>
            <div className="col-lg-12 pt-4 pt-lg-0">
              <ol className="ol-class row">
                {about.steps.map((step, index) => (
                  <li className="li-class pt-3 pb-4 pe-5 ps-5 col-lg-4" key={index}>
                    {step.content}
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>
      {/* End About Section */}

      {/* Services Section */}
      <div class="custom-shape-divider-top-1688373964">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>

      <div style={{ backgroundColor: '#c8e7ea' }}>
        <section id="services" className="services">
          <div className="container">
            <h2 className="text-center main-header">{services.title}</h2>
            <div className="row">
              {services.items.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="icon-box">
                    <i className={`fa-solid ${item.icon}`}></i>
                    <h4><a href={item.link}>{item.title}</a></h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div class="custom-shape-divider-bottom-1688374069">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      {/* End Services Section */}

      {/* Product Benefits */}
      <section id="product-benefits" className="portfolio">
        <div className="container">
          <div className="col-lg-12 mb-5">
            <h2 className="text-center main-header">{productBenefits.title}</h2>
          </div>
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1
            }}
            className="ol-class"
            columnClassName="masonry-grid-column"
          >
            {productBenefits.items.map((item, index) => (
              <div key={index} >
                <div className="portfolio-wrap">
                  <img src={item.image} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <li className="li-class pt-3 pb-4 pe-5 ps-5">{item.description}</li>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

    </>
  );
}

export default Home;
