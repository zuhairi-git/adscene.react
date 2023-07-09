import React from "react";
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';

function PortfolioContent() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  const masonryOptions = {
    columnClassName: 'masonry-grid-item',
    gutter: 10,
  };


  const portfolioItems = [
    {
      imgSrc: "assets/img/portfolio/portfolio-1.jpg",
      category: "Shop",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-2.jpg",
      category: "Web",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-3.jpg",
      category: "Web",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-4.jpg",
      category: "Web",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-5.jpg",
      category: "Shop",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-6.jpg",
      category: "Shop",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-7.jpg",
      category: "Web",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-8.jpg",
      category: "Web",
      title: "Product",
      lightboxTitle: "Products",
    },
    {
      imgSrc: "assets/img/portfolio/portfolio-9.jpg",
      category: "Shop",
      title: "Product",
      lightboxTitle: "Products",
    },
  ];

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-shop">Shop</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="row portfolio-container"
            columnClassName="masonry-grid"
            {...masonryOptions}
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`text-center col portfolio-item filter-${item.category.toLowerCase()} masonry-grid-item`}
              >
                <div className="portfolio-wrap">
                  <img src={item.imgSrc} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <p>{item.category}</p>
                    <div className="portfolio-links">
                      <a
                        href={item.imgSrc}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title={item.lightboxTitle}
                      >
                        <i className="bx bx-slideshow"></i>
                      </a>
                      <Link
                        to="/portfolio-details"
                        className="portfolio-details-lightbox"
                        data-glightbox="type: external"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <h4 className="mt-2 mb-5">{item.title}</h4>

              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* End Portfolio Section */}
    </>
  );
}

export default PortfolioContent;
